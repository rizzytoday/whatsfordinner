-- Add active_fast column to profiles for seasonal fasting (Ramadan, etc.)
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS active_fast text;
