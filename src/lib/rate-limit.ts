import { NextRequest, NextResponse } from "next/server";

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

// Per-route rate limit stores (in-memory, per serverless instance)
const stores = new Map<string, Map<string, RateLimitEntry>>();

// Clean up expired entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const store of stores.values()) {
    for (const [key, entry] of store) {
      if (now > entry.resetAt) store.delete(key);
    }
  }
}, 300_000);

function getStore(name: string): Map<string, RateLimitEntry> {
  let store = stores.get(name);
  if (!store) {
    store = new Map();
    stores.set(name, store);
  }
  return store;
}

function getIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

/**
 * Rate limit by IP address.
 * Returns null if allowed, or a 429 NextResponse if blocked.
 *
 * @param req - The incoming request
 * @param name - Unique name for this rate limit bucket (e.g. "generate-plan")
 * @param max - Max requests allowed in the window
 * @param windowMs - Time window in milliseconds
 */
export function rateLimit(
  req: NextRequest,
  name: string,
  max: number,
  windowMs: number
): NextResponse | null {
  const ip = getIp(req);
  const store = getStore(name);
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + windowMs });
    return null;
  }

  if (entry.count >= max) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((entry.resetAt - now) / 1000)),
        },
      }
    );
  }

  entry.count++;
  return null;
}
