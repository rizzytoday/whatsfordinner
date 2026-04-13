import type { FullRecipe } from "./types";

export const healthyLightRecipes: FullRecipe[] = [
  {
    slug: "quinoa-salad",
    name: "Quinoa Salad",
    emoji: "\u{1F957}",
    description:
      "A bright and filling quinoa salad with cucumber, cherry tomatoes, red onion, kalamata olives, and a zesty lemon-herb vinaigrette. Meal-prep gold that tastes better the next day.",
    cuisine: "Mediterranean",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    servings: 4,
    ingredients: [
      { name: "quinoa, rinsed", amount: "1", unit: "cup" },
      { name: "water", amount: "2", unit: "cups" },
      { name: "English cucumber, diced", amount: "1", unit: "medium" },
      { name: "cherry tomatoes, halved", amount: "1", unit: "cup" },
      { name: "red onion, finely diced", amount: "1/4", unit: "small" },
      { name: "kalamata olives, halved", amount: "1/3", unit: "cup" },
      { name: "fresh parsley, chopped", amount: "1/4", unit: "cup" },
      { name: "fresh mint, chopped", amount: "2", unit: "tbsp" },
      { name: "extra virgin olive oil", amount: "3", unit: "tbsp" },
      { name: "lemon juice", amount: "2", unit: "tbsp" },
      { name: "red wine vinegar", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "3/4", unit: "tsp" },
      { name: "black pepper", amount: "1/4", unit: "tsp" },
      { name: "crumbled feta cheese", amount: "1/3", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Bring quinoa and water to a boil in a medium saucepan. Reduce to a simmer, cover, and cook for 15 minutes until water is absorbed. Fluff with a fork and let cool.",
        tip: "Spread the cooked quinoa on a sheet pan to cool faster. Warm quinoa will wilt the vegetables.",
      },
      {
        step: 2,
        instruction:
          "Whisk together olive oil, lemon juice, red wine vinegar, salt, and pepper for the dressing.",
      },
      {
        step: 3,
        instruction:
          "In a large bowl, combine the cooled quinoa, cucumber, tomatoes, red onion, olives, parsley, and mint.",
      },
      {
        step: 4,
        instruction:
          "Pour the dressing over the salad and toss to combine. Top with crumbled feta. Serve at room temperature or chilled.",
      },
    ],
    nutrition: { calories: 280, protein: 10, carbs: 30, fat: 14, fiber: 5 },
    tags: ["healthy", "vegetarian", "meal-prep", "mediterranean", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["mediterranean-bowl", "chickpea-salad", "edamame-grain-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "grilled-chicken-breast",
    name: "Grilled Chicken Breast",
    emoji: "\u{1F357}",
    description:
      "Juicy, perfectly seasoned grilled chicken breast that is anything but boring. Brined in salt water for guaranteed moisture, then charred with a simple herb marinade.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken breasts", amount: "4", unit: "6-oz pieces" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "lemon juice", amount: "2", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "dried oregano", amount: "1", unit: "tsp" },
      { name: "smoked paprika", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "fresh lemon wedges", amount: "4", unit: "wedges" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "If chicken breasts are thick, butterfly or pound them to an even 3/4-inch thickness. This ensures even cooking.",
        tip: "Uneven thickness is the number one reason people overcook chicken breast. Even it out and you'll never have dry chicken again.",
      },
      {
        step: 2,
        instruction:
          "Whisk together olive oil, lemon juice, garlic, oregano, paprika, salt, and pepper. Coat the chicken and marinate for at least 15 minutes (or up to 4 hours refrigerated).",
      },
      {
        step: 3,
        instruction:
          "Preheat grill or grill pan to medium-high heat. Oil the grates lightly.",
      },
      {
        step: 4,
        instruction:
          "Grill the chicken for 5-6 minutes per side until grill marks form and internal temperature reaches 165F.",
      },
      {
        step: 5,
        instruction:
          "Rest for 5 minutes before slicing. Squeeze a lemon wedge over each portion before serving.",
      },
    ],
    nutrition: { calories: 220, protein: 38, carbs: 2, fat: 8, fiber: 0 },
    tags: ["healthy", "high-protein", "quick", "gluten-free", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["greek-lemon-chicken", "spinach-feta-stuffed-chicken", "thai-chicken-salad"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "baked-sweet-potato",
    name: "Baked Sweet Potato",
    emoji: "\u{1F360}",
    description:
      "Perfectly baked sweet potatoes with crispy skin and fluffy flesh, loaded with black beans, corn, avocado, and a lime-cilantro drizzle. A complete meal from a single root vegetable.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 50,
    totalTime: 60,
    servings: 4,
    ingredients: [
      { name: "large sweet potatoes", amount: "4", unit: "whole" },
      { name: "canned black beans, drained", amount: "15", unit: "oz" },
      { name: "corn kernels (fresh or frozen)", amount: "1", unit: "cup" },
      { name: "ripe avocado, diced", amount: "1", unit: "medium" },
      { name: "plain Greek yogurt", amount: "1/4", unit: "cup" },
      { name: "lime juice", amount: "2", unit: "tbsp" },
      { name: "fresh cilantro, chopped", amount: "2", unit: "tbsp" },
      { name: "ground cumin", amount: "1/2", unit: "tsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "chili powder", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Scrub sweet potatoes and poke several times with a fork. Rub with olive oil and sprinkle with salt.",
      },
      {
        step: 2,
        instruction:
          "Place on a foil-lined baking sheet. Bake for 45-50 minutes until very soft when squeezed.",
        tip: "Baking on foil catches any dripping sugar that caramelizes. Line the pan or you'll be scrubbing.",
      },
      {
        step: 3,
        instruction:
          "Warm the black beans and corn in a small saucepan with cumin and chili powder.",
      },
      {
        step: 4,
        instruction:
          "Mix Greek yogurt with half the lime juice and a pinch of salt for the drizzle.",
      },
      {
        step: 5,
        instruction:
          "Split each sweet potato open, fluff the inside with a fork. Top with the bean-corn mixture, diced avocado, yogurt drizzle, and cilantro. Squeeze remaining lime over top.",
      },
    ],
    nutrition: { calories: 340, protein: 14, carbs: 56, fat: 8, fiber: 12 },
    tags: ["healthy", "vegetarian", "gluten-free", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["sweet-potato-black-bean-bowl", "stuffed-zucchini", "tofu-buddha-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "turkey-lettuce-wraps",
    name: "Turkey Lettuce Wraps",
    emoji: "\u{1F957}",
    description:
      "Savory ground turkey cooked with water chestnuts, ginger, and a sweet-salty sauce, scooped into crisp butter lettuce cups. All the flavor, no heavy carbs.",
    cuisine: "Asian Fusion",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    servings: 4,
    ingredients: [
      { name: "ground turkey", amount: "1", unit: "lb" },
      { name: "butter lettuce heads", amount: "2", unit: "heads" },
      { name: "canned water chestnuts, diced", amount: "8", unit: "oz" },
      { name: "soy sauce", amount: "3", unit: "tbsp" },
      { name: "rice vinegar", amount: "1", unit: "tbsp" },
      { name: "hoisin sauce", amount: "2", unit: "tbsp" },
      { name: "sesame oil", amount: "1", unit: "tsp" },
      { name: "fresh ginger, grated", amount: "1", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "green onions, sliced", amount: "3", unit: "stalks" },
      { name: "sriracha", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Separate and wash the lettuce leaves. Pat dry and arrange on a serving platter like cups.",
      },
      {
        step: 2,
        instruction:
          "Heat a large skillet over medium-high heat. Cook the turkey, breaking into small crumbles, for 5 minutes until browned.",
      },
      {
        step: 3,
        instruction:
          "Add ginger and garlic, cook 30 seconds. Stir in water chestnuts.",
      },
      {
        step: 4,
        instruction:
          "Mix soy sauce, rice vinegar, hoisin, sesame oil, and sriracha. Pour into the skillet and cook 2 minutes until sauce thickens slightly.",
        tip: "Taste the sauce before adding. Adjust soy for saltiness and sriracha for heat.",
      },
      {
        step: 5,
        instruction:
          "Spoon the turkey mixture into lettuce cups. Top with sliced green onions. Serve immediately.",
      },
    ],
    nutrition: { calories: 240, protein: 26, carbs: 12, fat: 10, fiber: 2 },
    tags: ["healthy", "high-protein", "quick", "low-carb", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["grilled-chicken-breast", "shrimp-and-broccoli", "thai-chicken-salad"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "cauliflower-rice-stir-fry",
    name: "Cauliflower Rice Stir-Fry",
    emoji: "\u{1F966}",
    description:
      "A low-carb take on fried rice using riced cauliflower, scrambled eggs, peas, carrots, and a splash of soy and sesame. So close to the real thing you might not notice the swap.",
    cuisine: "Asian Fusion",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 12,
    totalTime: 22,
    servings: 4,
    ingredients: [
      { name: "cauliflower, riced (or pre-riced bag)", amount: "1", unit: "large head" },
      { name: "large eggs, beaten", amount: "3", unit: "whole" },
      { name: "frozen peas and carrots", amount: "1", unit: "cup" },
      { name: "green onions, sliced", amount: "3", unit: "stalks" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp" },
      { name: "soy sauce", amount: "2", unit: "tbsp" },
      { name: "sesame oil", amount: "1", unit: "tsp" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "white pepper", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "If using a whole cauliflower, cut into florets and pulse in a food processor until rice-sized. Don't over-process or it'll become mushy.",
      },
      {
        step: 2,
        instruction:
          "Heat 1 tbsp oil in a large skillet or wok over high heat. Scramble the eggs, breaking into small pieces. Remove to a plate.",
      },
      {
        step: 3,
        instruction:
          "Add remaining oil. Stir-fry peas and carrots for 2 minutes. Add garlic and ginger, cook 30 seconds.",
      },
      {
        step: 4,
        instruction:
          "Add the cauliflower rice. Stir-fry for 4-5 minutes until tender but not soggy.",
        tip: "High heat is key. If the cauliflower steams instead of fries, the texture will be mushy.",
      },
      {
        step: 5,
        instruction:
          "Return the eggs to the pan. Add soy sauce, sesame oil, and white pepper. Toss everything together. Top with green onions.",
      },
    ],
    nutrition: { calories: 180, protein: 12, carbs: 12, fat: 10, fiber: 4 },
    tags: ["healthy", "low-carb", "gluten-free", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["vegetable-stir-fry", "chicken-fried-rice", "tofu-buddha-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "salmon-bowl",
    name: "Salmon Bowl",
    emoji: "\u{1F363}",
    description:
      "Pan-seared salmon over a bed of brown rice with edamame, pickled ginger, cucumber, avocado, and a drizzle of spicy mayo. A balanced bowl that feels indulgent but is entirely nutritious.",
    cuisine: "Japanese Fusion",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 2,
    ingredients: [
      { name: "salmon fillets, skin-on", amount: "2", unit: "6-oz pieces" },
      { name: "cooked brown rice", amount: "2", unit: "cups" },
      { name: "shelled edamame", amount: "1/2", unit: "cup" },
      { name: "English cucumber, sliced", amount: "1/2", unit: "medium" },
      { name: "ripe avocado, sliced", amount: "1/2", unit: "medium" },
      { name: "pickled ginger", amount: "2", unit: "tbsp" },
      { name: "soy sauce", amount: "2", unit: "tbsp" },
      { name: "rice vinegar", amount: "1", unit: "tbsp" },
      { name: "sesame oil", amount: "1", unit: "tsp" },
      { name: "mayonnaise", amount: "1", unit: "tbsp" },
      { name: "sriracha", amount: "1", unit: "tsp" },
      { name: "sesame seeds", amount: "1", unit: "tsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Pat salmon dry and season with salt and pepper. Heat olive oil in a skillet over medium-high heat. Place salmon skin-side down and cook 4 minutes until skin is crispy.",
      },
      {
        step: 2,
        instruction:
          "Flip and cook 3-4 more minutes for medium (or longer if you prefer well-done). Remove and let rest.",
        tip: "Start skin-side down and don't move it. Pressing down gently the first minute helps the skin crisp evenly.",
      },
      {
        step: 3,
        instruction:
          "Mix soy sauce, rice vinegar, and sesame oil for the bowl dressing. Mix mayo and sriracha for the spicy mayo.",
      },
      {
        step: 4,
        instruction:
          "Divide brown rice between two bowls. Arrange edamame, cucumber, avocado, and pickled ginger in sections. Place salmon on top.",
      },
      {
        step: 5,
        instruction:
          "Drizzle with the soy dressing and spicy mayo. Sprinkle with sesame seeds.",
      },
    ],
    nutrition: { calories: 480, protein: 38, carbs: 36, fat: 22, fiber: 6 },
    tags: ["healthy", "high-protein", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["herb-salmon", "mango-shrimp-bowl", "tuna-steak"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "vegetable-curry-light",
    name: "Vegetable Curry",
    emoji: "\u{1F35B}",
    description:
      "A light yet aromatic vegetable curry made with coconut milk, chickpeas, spinach, and sweet potato. Packed with warming spices and served over steamed basmati rice.",
    cuisine: "Indian",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    ingredients: [
      { name: "sweet potato, peeled and cubed", amount: "1", unit: "large" },
      { name: "canned chickpeas, drained", amount: "15", unit: "oz" },
      { name: "light coconut milk", amount: "14", unit: "oz" },
      { name: "baby spinach", amount: "3", unit: "cups" },
      { name: "diced tomatoes", amount: "14", unit: "oz" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "fresh ginger, grated", amount: "1", unit: "tbsp" },
      { name: "curry powder", amount: "2", unit: "tbsp" },
      { name: "ground turmeric", amount: "1/2", unit: "tsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "cooked basmati rice", amount: "3", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat olive oil in a large pot over medium heat. Cook onion for 4 minutes. Add garlic and ginger, cook 1 minute.",
      },
      {
        step: 2,
        instruction:
          "Add curry powder and turmeric. Stir 30 seconds until fragrant. Add sweet potato and stir to coat in spices.",
      },
      {
        step: 3,
        instruction:
          "Pour in coconut milk and diced tomatoes. Bring to a simmer and cook 15 minutes until sweet potato is tender.",
        tip: "Light coconut milk keeps this lighter. Full-fat works too if you prefer it richer.",
      },
      {
        step: 4,
        instruction:
          "Add chickpeas and spinach. Cook 3 more minutes until spinach wilts and chickpeas are heated through. Season with salt.",
      },
      {
        step: 5,
        instruction:
          "Serve over steamed basmati rice.",
      },
    ],
    nutrition: { calories: 340, protein: 12, carbs: 50, fat: 10, fiber: 9 },
    tags: ["healthy", "vegan", "one-pot", "budget"],
    youtubeVideoId: null,
    relatedSlugs: ["baked-sweet-potato", "tofu-buddha-bowl", "cauliflower-steaks"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "stuffed-zucchini",
    name: "Stuffed Zucchini",
    emoji: "\u{1F33D}",
    description:
      "Tender zucchini boats filled with a savory mixture of ground turkey, quinoa, tomatoes, and herbs, topped with melted mozzarella. A satisfying, low-carb dinner.",
    cuisine: "Mediterranean",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 4,
    ingredients: [
      { name: "large zucchini", amount: "4", unit: "whole" },
      { name: "ground turkey", amount: "1", unit: "lb" },
      { name: "cooked quinoa", amount: "1/2", unit: "cup" },
      { name: "diced tomatoes", amount: "14", unit: "oz" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "dried Italian seasoning", amount: "1", unit: "tsp" },
      { name: "shredded mozzarella cheese", amount: "1", unit: "cup" },
      { name: "Parmesan cheese, grated", amount: "1/4", unit: "cup" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "fresh basil", amount: "4", unit: "leaves" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 375F. Cut zucchini in half lengthwise and scoop out the seeds with a spoon to create boats. Place in a baking dish.",
      },
      {
        step: 2,
        instruction:
          "Heat olive oil in a skillet. Cook ground turkey until browned, breaking into small pieces. Add garlic, cook 30 seconds.",
      },
      {
        step: 3,
        instruction:
          "Stir in diced tomatoes, cooked quinoa, Italian seasoning, salt, and pepper. Cook 3 minutes.",
        tip: "Chop the scooped-out zucchini flesh and add it to the filling for extra bulk.",
      },
      {
        step: 4,
        instruction:
          "Fill each zucchini boat generously with the turkey mixture. Top with mozzarella and Parmesan.",
      },
      {
        step: 5,
        instruction:
          "Cover with foil and bake 20 minutes. Remove foil and bake 10 more minutes until cheese is golden and zucchini is tender. Garnish with basil.",
      },
    ],
    nutrition: { calories: 320, protein: 30, carbs: 16, fat: 16, fiber: 4 },
    tags: ["healthy", "high-protein", "low-carb", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["zucchini-lasagna", "stuffed-bell-peppers", "grilled-chicken-breast"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chicken-vegetable-soup",
    name: "Chicken and Vegetable Soup",
    emoji: "\u{1F372}",
    description:
      "A clear, clean chicken soup loaded with zucchini, green beans, spinach, and tomatoes. Lighter than traditional chicken noodle but just as satisfying and restorative.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 30,
    totalTime: 40,
    servings: 6,
    ingredients: [
      { name: "boneless skinless chicken breast", amount: "1", unit: "lb" },
      { name: "chicken broth", amount: "8", unit: "cups" },
      { name: "zucchini, diced", amount: "1", unit: "medium" },
      { name: "green beans, cut into 1-inch pieces", amount: "1", unit: "cup" },
      { name: "diced tomatoes", amount: "14", unit: "oz" },
      { name: "baby spinach", amount: "2", unit: "cups" },
      { name: "carrots, diced", amount: "2", unit: "medium" },
      { name: "yellow onion, diced", amount: "1", unit: "medium" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "dried thyme", amount: "1/2", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "lemon juice", amount: "1", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Heat olive oil in a large pot over medium heat. Cook onion and carrots for 4 minutes. Add garlic, cook 30 seconds.",
      },
      {
        step: 2,
        instruction:
          "Add chicken broth, diced tomatoes, and thyme. Bring to a boil. Add the chicken breasts whole, reduce to a simmer, and cook 15 minutes until chicken is cooked through.",
      },
      {
        step: 3,
        instruction:
          "Remove chicken and shred with two forks. Add zucchini and green beans to the pot. Cook 5 minutes.",
      },
      {
        step: 4,
        instruction:
          "Return shredded chicken to the pot. Stir in spinach and cook 1 minute until wilted. Season with salt, pepper, and lemon juice.",
        tip: "The lemon juice at the end brightens everything. Don't skip it.",
      },
    ],
    nutrition: { calories: 200, protein: 24, carbs: 14, fat: 6, fiber: 4 },
    tags: ["healthy", "one-pot", "gluten-free", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["chicken-noodle-soup", "vegetable-curry-light", "greek-lemon-chicken"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "mediterranean-bowl",
    name: "Mediterranean Bowl",
    emoji: "\u{1F957}",
    description:
      "A colorful grain bowl with farro, roasted red peppers, cucumbers, chickpeas, hummus, and a bright tahini-lemon dressing. Every bite hits different.",
    cuisine: "Mediterranean",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 2,
    ingredients: [
      { name: "farro", amount: "1", unit: "cup" },
      { name: "canned chickpeas, drained", amount: "15", unit: "oz" },
      { name: "English cucumber, diced", amount: "1/2", unit: "medium" },
      { name: "roasted red peppers, sliced", amount: "1/2", unit: "cup" },
      { name: "cherry tomatoes, halved", amount: "1/2", unit: "cup" },
      { name: "kalamata olives", amount: "1/4", unit: "cup" },
      { name: "hummus", amount: "1/4", unit: "cup" },
      { name: "crumbled feta cheese", amount: "1/4", unit: "cup" },
      { name: "tahini", amount: "2", unit: "tbsp" },
      { name: "lemon juice", amount: "2", unit: "tbsp" },
      { name: "water", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "fresh parsley", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Cook farro according to package directions (usually 20 minutes in salted boiling water). Drain and let cool slightly.",
      },
      {
        step: 2,
        instruction:
          "Whisk together tahini, lemon juice, water, and salt for the dressing. It should be pourable; add more water if needed.",
      },
      {
        step: 3,
        instruction:
          "Divide farro between two bowls. Arrange chickpeas, cucumber, roasted peppers, tomatoes, and olives in sections on top.",
      },
      {
        step: 4,
        instruction:
          "Add a dollop of hummus and sprinkle with feta. Drizzle the tahini dressing over everything. Garnish with parsley.",
        tip: "Warm bowls are great, but this is equally good cold. It makes excellent meal prep.",
      },
    ],
    nutrition: { calories: 420, protein: 18, carbs: 52, fat: 16, fiber: 10 },
    tags: ["healthy", "vegetarian", "meal-prep", "mediterranean"],
    youtubeVideoId: null,
    relatedSlugs: ["quinoa-salad", "falafel-bowl", "chickpea-salad"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "shrimp-and-broccoli",
    name: "Shrimp and Broccoli",
    emoji: "\u{1F966}",
    description:
      "Plump shrimp and crisp-tender broccoli in a savory garlic-ginger sauce. A 20-minute dinner that is lighter than takeout but just as satisfying.",
    cuisine: "Chinese",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    servings: 4,
    ingredients: [
      { name: "large shrimp, peeled and deveined", amount: "1", unit: "lb" },
      { name: "broccoli florets", amount: "4", unit: "cups" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp" },
      { name: "soy sauce", amount: "3", unit: "tbsp" },
      { name: "oyster sauce", amount: "1", unit: "tbsp" },
      { name: "cornstarch", amount: "1", unit: "tsp" },
      { name: "water", amount: "2", unit: "tbsp" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "sesame oil", amount: "1", unit: "tsp" },
      { name: "red pepper flakes", amount: "1/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Mix soy sauce, oyster sauce, cornstarch, and water in a small bowl. Set aside.",
      },
      {
        step: 2,
        instruction:
          "Heat 1 tbsp oil in a large skillet or wok over high heat. Add broccoli and stir-fry 3 minutes until bright green and crisp-tender. Remove to a plate.",
      },
      {
        step: 3,
        instruction:
          "Add remaining oil. Cook shrimp in a single layer for 1-2 minutes per side until pink. Add garlic, ginger, and red pepper flakes. Cook 30 seconds.",
        tip: "Don't move the shrimp for the first minute. Let them get a good sear before flipping.",
      },
      {
        step: 4,
        instruction:
          "Return broccoli to the pan. Pour in the sauce and toss everything for 1 minute until the sauce is glossy and coats evenly. Finish with sesame oil.",
      },
    ],
    nutrition: { calories: 220, protein: 26, carbs: 10, fat: 8, fiber: 3 },
    tags: ["healthy", "high-protein", "quick", "low-carb", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["salmon-bowl", "vegetable-stir-fry", "mango-shrimp-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "tofu-buddha-bowl",
    name: "Tofu Buddha Bowl",
    emoji: "\u{1F96C}",
    description:
      "Crispy baked tofu over brown rice with roasted sweet potato, kale, avocado, and a creamy peanut-lime dressing. A plant-powered bowl that satisfies everyone.",
    cuisine: "Asian Fusion",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 30,
    totalTime: 45,
    servings: 2,
    ingredients: [
      { name: "extra-firm tofu, pressed and cubed", amount: "14", unit: "oz" },
      { name: "sweet potato, peeled and cubed", amount: "1", unit: "medium" },
      { name: "cooked brown rice", amount: "1.5", unit: "cups" },
      { name: "curly kale, stemmed and torn", amount: "2", unit: "cups" },
      { name: "ripe avocado, sliced", amount: "1/2", unit: "medium" },
      { name: "peanut butter", amount: "2", unit: "tbsp", group: "For the dressing" },
      { name: "lime juice", amount: "2", unit: "tbsp", group: "For the dressing" },
      { name: "soy sauce", amount: "1", unit: "tbsp", group: "For the dressing" },
      { name: "maple syrup", amount: "1", unit: "tsp", group: "For the dressing" },
      { name: "warm water", amount: "2", unit: "tbsp", group: "For the dressing" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "cornstarch", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "sesame seeds", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Toss sweet potato cubes with 1 tbsp olive oil and salt. Spread on one half of a sheet pan.",
      },
      {
        step: 2,
        instruction:
          "Toss tofu cubes with remaining olive oil and cornstarch. Spread on the other half of the sheet pan. Bake for 25-30 minutes, flipping halfway, until both are golden.",
      },
      {
        step: 3,
        instruction:
          "Massage kale with a pinch of salt and a squeeze of lime for 1 minute until it softens and darkens.",
        tip: "Massaging kale breaks down the tough fibers and removes bitterness. It only takes a minute.",
      },
      {
        step: 4,
        instruction:
          "Whisk peanut butter, lime juice, soy sauce, maple syrup, and warm water until smooth.",
      },
      {
        step: 5,
        instruction:
          "Assemble bowls with brown rice, massaged kale, roasted sweet potato, crispy tofu, and avocado. Drizzle with peanut dressing and sprinkle with sesame seeds.",
      },
    ],
    nutrition: { calories: 440, protein: 22, carbs: 46, fat: 20, fiber: 8 },
    tags: ["healthy", "vegan", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["baked-sweet-potato", "edamame-grain-bowl", "vegetable-curry-light"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "grilled-fish-tacos",
    name: "Grilled Fish Tacos",
    emoji: "\u{1F32E}",
    description:
      "Flaky grilled white fish in warm corn tortillas with a crunchy cabbage slaw, creamy avocado crema, and a squeeze of lime. Light, fresh, and completely addictive.",
    cuisine: "Mexican",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 8,
    totalTime: 23,
    servings: 4,
    ingredients: [
      { name: "firm white fish fillets (mahi-mahi or cod)", amount: "1", unit: "lb" },
      { name: "corn tortillas (small)", amount: "8", unit: "tortillas" },
      { name: "purple cabbage, shredded", amount: "2", unit: "cups" },
      { name: "ripe avocado", amount: "1", unit: "medium" },
      { name: "plain Greek yogurt", amount: "1/4", unit: "cup" },
      { name: "lime juice", amount: "3", unit: "tbsp" },
      { name: "fresh cilantro, chopped", amount: "3", unit: "tbsp" },
      { name: "chili powder", amount: "1", unit: "tsp" },
      { name: "ground cumin", amount: "1/2", unit: "tsp" },
      { name: "garlic powder", amount: "1/2", unit: "tsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Mix chili powder, cumin, garlic powder, and 1/2 tsp salt. Rub the fish with olive oil and the spice mix.",
      },
      {
        step: 2,
        instruction:
          "Grill or pan-sear the fish over medium-high heat for 3-4 minutes per side until flaky and cooked through.",
      },
      {
        step: 3,
        instruction:
          "Blend avocado, Greek yogurt, 2 tbsp lime juice, half the cilantro, and a pinch of salt for the crema.",
        tip: "No blender? Mash with a fork and stir vigorously. It doesn't need to be perfectly smooth.",
      },
      {
        step: 4,
        instruction:
          "Toss cabbage with remaining lime juice and salt for the slaw.",
      },
      {
        step: 5,
        instruction:
          "Warm tortillas in a dry skillet. Break fish into chunks and assemble tacos with cabbage slaw, avocado crema, and remaining cilantro.",
      },
    ],
    nutrition: { calories: 300, protein: 28, carbs: 26, fat: 10, fiber: 5 },
    tags: ["healthy", "high-protein", "quick"],
    youtubeVideoId: null,
    relatedSlugs: ["tuna-steak", "shrimp-and-broccoli", "salmon-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "chickpea-salad",
    name: "Chickpea Salad",
    emoji: "\u{1F957}",
    description:
      "A protein-packed chickpea salad with bell peppers, red onion, parsley, and a bright lemon-dijon vinaigrette. Perfect for lunches, meal prep, or scooped up with pita.",
    cuisine: "Mediterranean",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 0,
    totalTime: 15,
    servings: 4,
    ingredients: [
      { name: "canned chickpeas, drained and rinsed", amount: "30", unit: "oz" },
      { name: "red bell pepper, diced", amount: "1", unit: "medium" },
      { name: "English cucumber, diced", amount: "1/2", unit: "medium" },
      { name: "red onion, finely diced", amount: "1/4", unit: "small" },
      { name: "fresh flat-leaf parsley, chopped", amount: "1/4", unit: "cup" },
      { name: "extra virgin olive oil", amount: "3", unit: "tbsp" },
      { name: "lemon juice", amount: "2", unit: "tbsp" },
      { name: "Dijon mustard", amount: "1", unit: "tsp" },
      { name: "garlic clove, minced", amount: "1", unit: "clove" },
      { name: "salt", amount: "3/4", unit: "tsp" },
      { name: "black pepper", amount: "1/4", unit: "tsp" },
      { name: "crumbled feta (optional)", amount: "1/4", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Whisk together olive oil, lemon juice, Dijon mustard, garlic, salt, and pepper for the vinaigrette.",
      },
      {
        step: 2,
        instruction:
          "In a large bowl, combine chickpeas, bell pepper, cucumber, red onion, and parsley.",
      },
      {
        step: 3,
        instruction:
          "Pour the vinaigrette over the salad and toss to coat. Let sit for 10 minutes to marinate.",
        tip: "This salad gets better as it sits. Make it a few hours ahead or the night before for maximum flavor.",
      },
      {
        step: 4,
        instruction:
          "Top with crumbled feta if using. Serve at room temperature or chilled.",
      },
    ],
    nutrition: { calories: 260, protein: 12, carbs: 30, fat: 12, fiber: 8 },
    tags: ["healthy", "vegan", "quick", "budget", "meal-prep", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["quinoa-salad", "mediterranean-bowl", "falafel-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "spinach-feta-stuffed-chicken",
    name: "Spinach and Feta Stuffed Chicken",
    emoji: "\u{1F357}",
    description:
      "Juicy chicken breasts stuffed with a creamy spinach and feta filling, pan-seared until golden, then finished in the oven. Looks restaurant-level but takes 30 minutes.",
    cuisine: "Mediterranean",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    ingredients: [
      { name: "boneless skinless chicken breasts", amount: "4", unit: "6-oz pieces" },
      { name: "frozen spinach, thawed and squeezed dry", amount: "10", unit: "oz" },
      { name: "crumbled feta cheese", amount: "1/2", unit: "cup" },
      { name: "cream cheese, softened", amount: "2", unit: "oz" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "sun-dried tomatoes, chopped", amount: "2", unit: "tbsp" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "smoked paprika", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Mix the spinach, feta, cream cheese, garlic, and sun-dried tomatoes in a bowl.",
      },
      {
        step: 2,
        instruction:
          "Cut a deep horizontal pocket in each chicken breast (don't cut all the way through). Stuff each with the spinach mixture and secure with toothpicks.",
        tip: "Use a sharp knife and take your time. A deep pocket means more filling stays inside during cooking.",
      },
      {
        step: 3,
        instruction:
          "Season the outside of each breast with olive oil, paprika, salt, and pepper.",
      },
      {
        step: 4,
        instruction:
          "Heat an oven-safe skillet over medium-high heat. Sear chicken 3 minutes per side until golden. Transfer skillet to oven.",
      },
      {
        step: 5,
        instruction:
          "Bake for 15-18 minutes until internal temp reaches 165F. Rest 5 minutes before removing toothpicks and slicing.",
      },
    ],
    nutrition: { calories: 320, protein: 40, carbs: 4, fat: 16, fiber: 2 },
    tags: ["healthy", "high-protein", "low-carb", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["grilled-chicken-breast", "greek-lemon-chicken", "stuffed-zucchini"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "sweet-potato-black-bean-bowl",
    name: "Sweet Potato Black Bean Bowl",
    emoji: "\u{1F360}",
    description:
      "Roasted sweet potato and seasoned black beans over cilantro-lime rice with avocado, pickled onions, and a chipotle-yogurt drizzle. Plant-forward and entirely filling.",
    cuisine: "Mexican",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    ingredients: [
      { name: "sweet potatoes, peeled and cubed", amount: "2", unit: "medium" },
      { name: "canned black beans, drained", amount: "15", unit: "oz" },
      { name: "cooked white rice", amount: "2", unit: "cups" },
      { name: "ripe avocado, sliced", amount: "1", unit: "medium" },
      { name: "fresh cilantro, chopped", amount: "3", unit: "tbsp" },
      { name: "lime juice", amount: "3", unit: "tbsp" },
      { name: "plain Greek yogurt", amount: "1/4", unit: "cup" },
      { name: "chipotle in adobo, minced", amount: "1", unit: "tsp" },
      { name: "ground cumin", amount: "1", unit: "tsp" },
      { name: "chili powder", amount: "1/2", unit: "tsp" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "1", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 425F. Toss sweet potato cubes with 1 tbsp olive oil, cumin, chili powder, and 1/2 tsp salt. Roast for 25 minutes until caramelized.",
      },
      {
        step: 2,
        instruction:
          "Warm black beans in a small pan with a pinch of cumin and salt.",
      },
      {
        step: 3,
        instruction:
          "Stir 2 tbsp cilantro and 1 tbsp lime juice into the cooked rice.",
      },
      {
        step: 4,
        instruction:
          "Mix yogurt, chipotle, and 1 tbsp lime juice for the drizzle.",
        tip: "Start with half the chipotle and taste. A little goes a long way.",
      },
      {
        step: 5,
        instruction:
          "Assemble bowls with cilantro-lime rice, roasted sweet potatoes, black beans, and avocado. Drizzle with chipotle yogurt and remaining lime juice.",
      },
    ],
    nutrition: { calories: 380, protein: 14, carbs: 58, fat: 12, fiber: 12 },
    tags: ["healthy", "vegetarian", "gluten-free", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["baked-sweet-potato", "tofu-buddha-bowl", "edamame-grain-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "thai-chicken-salad",
    name: "Thai Chicken Salad",
    emoji: "\u{1F957}",
    description:
      "Shredded chicken tossed with crunchy cabbage, mango, cilantro, peanuts, and a tangy peanut-lime dressing. A light but deeply flavorful salad with serious crunch.",
    cuisine: "Thai",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 0,
    totalTime: 20,
    servings: 4,
    ingredients: [
      { name: "cooked chicken breast, shredded", amount: "2", unit: "cups" },
      { name: "napa cabbage, shredded", amount: "3", unit: "cups" },
      { name: "ripe mango, diced", amount: "1", unit: "medium" },
      { name: "red bell pepper, thinly sliced", amount: "1", unit: "medium" },
      { name: "carrot, julienned", amount: "1", unit: "medium" },
      { name: "fresh cilantro, chopped", amount: "1/4", unit: "cup" },
      { name: "roasted peanuts, crushed", amount: "1/4", unit: "cup" },
      { name: "green onions, sliced", amount: "2", unit: "stalks" },
      { name: "creamy peanut butter", amount: "2", unit: "tbsp", group: "For the dressing" },
      { name: "lime juice", amount: "3", unit: "tbsp", group: "For the dressing" },
      { name: "soy sauce", amount: "1", unit: "tbsp", group: "For the dressing" },
      { name: "rice vinegar", amount: "1", unit: "tbsp", group: "For the dressing" },
      { name: "sesame oil", amount: "1", unit: "tsp", group: "For the dressing" },
      { name: "honey", amount: "1", unit: "tsp", group: "For the dressing" },
      { name: "sriracha", amount: "1/2", unit: "tsp", group: "For the dressing" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Whisk together all dressing ingredients until smooth. Add a splash of warm water if too thick.",
      },
      {
        step: 2,
        instruction:
          "In a large bowl, combine cabbage, shredded chicken, mango, bell pepper, carrot, cilantro, and green onions.",
      },
      {
        step: 3,
        instruction:
          "Pour the dressing over the salad and toss thoroughly to coat.",
        tip: "Use rotisserie chicken for a shortcut. The slightly seasoned flavor works perfectly here.",
      },
      {
        step: 4,
        instruction:
          "Divide between plates and top with crushed peanuts. Serve immediately for best crunch.",
      },
    ],
    nutrition: { calories: 300, protein: 26, carbs: 22, fat: 14, fiber: 4 },
    tags: ["healthy", "high-protein", "quick", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["turkey-lettuce-wraps", "grilled-chicken-breast", "mango-shrimp-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "tuna-steak",
    name: "Tuna Steak",
    emoji: "\u{1F3A3}",
    description:
      "Seared ahi tuna steaks with a sesame crust, served rare in the center with a ginger-soy dipping sauce and wasabi on the side. Elegant and ready in 10 minutes.",
    cuisine: "Japanese",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 4,
    totalTime: 9,
    servings: 2,
    ingredients: [
      { name: "sushi-grade ahi tuna steaks", amount: "2", unit: "6-oz pieces" },
      { name: "sesame seeds (black and white)", amount: "3", unit: "tbsp" },
      { name: "soy sauce", amount: "3", unit: "tbsp" },
      { name: "rice vinegar", amount: "1", unit: "tbsp" },
      { name: "sesame oil", amount: "1", unit: "tsp" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp" },
      { name: "vegetable oil", amount: "1", unit: "tbsp" },
      { name: "wasabi paste", amount: "1", unit: "tsp" },
      { name: "green onion, thinly sliced", amount: "1", unit: "stalk" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Pat tuna steaks completely dry with paper towels. Press sesame seeds firmly into all sides.",
      },
      {
        step: 2,
        instruction:
          "Mix soy sauce, rice vinegar, sesame oil, and grated ginger for the dipping sauce.",
      },
      {
        step: 3,
        instruction:
          "Heat vegetable oil in a skillet over high heat until it just begins to smoke. Sear tuna for 1-1.5 minutes per side for rare (longer for medium).",
        tip: "Only use sushi-grade tuna. The center should be completely raw and cool. If your pan isn't screaming hot, wait.",
      },
      {
        step: 4,
        instruction:
          "Slice against the grain into 1/4-inch slices. Fan out on plates, garnish with green onion. Serve with dipping sauce and wasabi on the side.",
      },
    ],
    nutrition: { calories: 280, protein: 42, carbs: 4, fat: 10, fiber: 1 },
    tags: ["healthy", "high-protein", "quick", "low-carb", "dairy-free", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["salmon-bowl", "grilled-fish-tacos", "herb-salmon"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "vegetable-stir-fry",
    name: "Vegetable Stir-Fry",
    emoji: "\u{1F96C}",
    description:
      "A vibrant mix of snap peas, bell peppers, broccoli, and mushrooms wok-tossed in a savory garlic-ginger sauce. Simple, fast, and endlessly customizable with whatever vegetables you have.",
    cuisine: "Chinese",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 8,
    totalTime: 23,
    servings: 4,
    ingredients: [
      { name: "broccoli florets", amount: "2", unit: "cups" },
      { name: "snap peas", amount: "1", unit: "cup" },
      { name: "red bell pepper, sliced", amount: "1", unit: "medium" },
      { name: "shiitake mushrooms, sliced", amount: "1", unit: "cup" },
      { name: "carrots, thinly sliced on diagonal", amount: "2", unit: "medium" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "fresh ginger, grated", amount: "1", unit: "tbsp" },
      { name: "soy sauce", amount: "3", unit: "tbsp" },
      { name: "rice vinegar", amount: "1", unit: "tbsp" },
      { name: "cornstarch", amount: "1", unit: "tsp" },
      { name: "water", amount: "2", unit: "tbsp" },
      { name: "vegetable oil", amount: "2", unit: "tbsp" },
      { name: "sesame oil", amount: "1", unit: "tsp" },
      { name: "cooked jasmine rice", amount: "3", unit: "cups" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Mix soy sauce, rice vinegar, cornstarch, and water in a small bowl. Set aside.",
      },
      {
        step: 2,
        instruction:
          "Heat vegetable oil in a large wok or skillet over the highest heat. Add broccoli and carrots first (they take longest). Stir-fry 3 minutes.",
        tip: "Cut everything before you start cooking. Stir-frying moves fast and there's no time to prep mid-cook.",
      },
      {
        step: 3,
        instruction:
          "Add bell pepper, snap peas, and mushrooms. Stir-fry 2 more minutes.",
      },
      {
        step: 4,
        instruction:
          "Push vegetables to the sides. Add garlic and ginger to the center of the pan, cook 30 seconds. Toss everything together.",
      },
      {
        step: 5,
        instruction:
          "Pour in the sauce and toss until everything is coated and glossy (about 1 minute). Finish with sesame oil. Serve over jasmine rice.",
      },
    ],
    nutrition: { calories: 240, protein: 8, carbs: 38, fat: 8, fiber: 5 },
    tags: ["healthy", "vegan", "quick", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["cauliflower-rice-stir-fry", "shrimp-and-broccoli", "tofu-buddha-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "greek-lemon-chicken",
    name: "Greek Lemon Chicken",
    emoji: "\u{1F34B}",
    description:
      "Chicken thighs roasted with lemon, garlic, oregano, and olive oil until the skin is crackling and the meat is falling-off-the-bone tender. Greek home cooking at its finest.",
    cuisine: "Greek",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 45,
    totalTime: 55,
    servings: 4,
    ingredients: [
      { name: "bone-in skin-on chicken thighs", amount: "8", unit: "thighs" },
      { name: "lemon juice", amount: "1/4", unit: "cup" },
      { name: "lemon, thinly sliced", amount: "1", unit: "whole" },
      { name: "olive oil", amount: "3", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "4", unit: "cloves" },
      { name: "dried oregano", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "chicken broth", amount: "1/2", unit: "cup" },
      { name: "fresh parsley, chopped", amount: "2", unit: "tbsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 425F. Mix olive oil, lemon juice, garlic, oregano, salt, and pepper.",
      },
      {
        step: 2,
        instruction:
          "Place chicken thighs skin-side up in a baking dish. Pour the marinade over the chicken. Tuck lemon slices between the pieces. Pour broth around (not over) the chicken.",
      },
      {
        step: 3,
        instruction:
          "Roast for 40-45 minutes until the skin is deeply golden and crispy and internal temperature reaches 185F.",
        tip: "185F for thighs, not 165F. Thighs taste better when cooked past the standard minimum. The collagen breaks down and they become more tender.",
      },
      {
        step: 4,
        instruction:
          "Let rest 5 minutes. Spoon the lemony pan juices over the chicken. Garnish with parsley. Serve with roasted potatoes or a simple salad.",
      },
    ],
    nutrition: { calories: 320, protein: 34, carbs: 2, fat: 20, fiber: 0 },
    tags: ["healthy", "high-protein", "gluten-free", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["grilled-chicken-breast", "spinach-feta-stuffed-chicken", "herb-salmon"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "herb-salmon",
    name: "Herb Salmon",
    emoji: "\u{1F41F}",
    description:
      "Oven-baked salmon fillets topped with a fragrant herb crust of parsley, dill, garlic, and lemon zest. Perfectly flaky inside with a golden herb topping.",
    cuisine: "American",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    ingredients: [
      { name: "salmon fillets, skin-on", amount: "4", unit: "6-oz pieces" },
      { name: "fresh parsley, finely chopped", amount: "3", unit: "tbsp" },
      { name: "fresh dill, finely chopped", amount: "2", unit: "tbsp" },
      { name: "garlic cloves, minced", amount: "2", unit: "cloves" },
      { name: "lemon zest", amount: "1", unit: "tsp" },
      { name: "olive oil", amount: "2", unit: "tbsp" },
      { name: "Dijon mustard", amount: "1", unit: "tbsp" },
      { name: "panko breadcrumbs", amount: "2", unit: "tbsp" },
      { name: "salt", amount: "3/4", unit: "tsp" },
      { name: "black pepper", amount: "1/4", unit: "tsp" },
      { name: "lemon wedges", amount: "4", unit: "wedges" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Line a baking sheet with parchment paper. Place salmon fillets skin-side down.",
      },
      {
        step: 2,
        instruction:
          "Spread a thin layer of Dijon mustard on top of each fillet.",
      },
      {
        step: 3,
        instruction:
          "Mix parsley, dill, garlic, lemon zest, panko, olive oil, salt, and pepper. Press the herb mixture onto the mustard-coated tops of each fillet.",
        tip: "The mustard acts as glue for the herb crust and adds a subtle tang. Don't skip it.",
      },
      {
        step: 4,
        instruction:
          "Bake for 12-15 minutes until the salmon flakes easily with a fork and the herb crust is golden.",
      },
      {
        step: 5,
        instruction:
          "Serve with lemon wedges. Pairs well with roasted asparagus or a simple green salad.",
      },
    ],
    nutrition: { calories: 340, protein: 36, carbs: 4, fat: 20, fiber: 0 },
    tags: ["healthy", "high-protein", "quick", "dairy-free"],
    youtubeVideoId: null,
    relatedSlugs: ["salmon-bowl", "tuna-steak", "miso-glazed-salmon"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "cauliflower-steaks",
    name: "Cauliflower Steaks",
    emoji: "\u{1F33E}",
    description:
      "Thick-cut cauliflower slabs roasted until golden and caramelized, topped with a zippy chimichurri sauce. A plant-based main course that earns its place at the center of the plate.",
    cuisine: "Argentinian Fusion",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 30,
    totalTime: 40,
    servings: 2,
    ingredients: [
      { name: "large cauliflower head", amount: "1", unit: "whole" },
      { name: "olive oil", amount: "3", unit: "tbsp" },
      { name: "smoked paprika", amount: "1", unit: "tsp" },
      { name: "garlic powder", amount: "1/2", unit: "tsp" },
      { name: "salt", amount: "1", unit: "tsp" },
      { name: "fresh parsley, finely chopped", amount: "1/2", unit: "cup", group: "For chimichurri" },
      { name: "fresh oregano, chopped", amount: "1", unit: "tbsp", group: "For chimichurri" },
      { name: "garlic clove, minced", amount: "1", unit: "clove", group: "For chimichurri" },
      { name: "red wine vinegar", amount: "2", unit: "tbsp", group: "For chimichurri" },
      { name: "extra virgin olive oil", amount: "3", unit: "tbsp", group: "For chimichurri" },
      { name: "red pepper flakes", amount: "1/4", unit: "tsp", group: "For chimichurri" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 425F. Trim the leaves from the cauliflower and cut 2 thick steaks (about 1.5 inches) from the center. Save the remaining florets for another use.",
        tip: "Cut from the center to get the largest slabs that hold together. The outer pieces will crumble.",
      },
      {
        step: 2,
        instruction:
          "Brush both sides of the steaks with olive oil. Season with paprika, garlic powder, and salt.",
      },
      {
        step: 3,
        instruction:
          "Place on a sheet pan. Roast for 15 minutes, flip carefully, and roast 15 more minutes until deep golden brown and tender.",
      },
      {
        step: 4,
        instruction:
          "Make the chimichurri: combine parsley, oregano, garlic, red wine vinegar, olive oil, and red pepper flakes.",
      },
      {
        step: 5,
        instruction:
          "Plate the cauliflower steaks and spoon chimichurri generously over the top.",
      },
    ],
    nutrition: { calories: 260, protein: 6, carbs: 14, fat: 22, fiber: 5 },
    tags: ["healthy", "vegan", "gluten-free", "low-carb"],
    youtubeVideoId: null,
    relatedSlugs: ["vegetable-curry-light", "baked-sweet-potato", "stuffed-zucchini"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "mango-shrimp-bowl",
    name: "Mango Shrimp Bowl",
    emoji: "\u{1F364}",
    description:
      "Spiced grilled shrimp over coconut rice with fresh mango salsa, pickled red onion, and a squeeze of lime. Tropical, light, and bursting with color.",
    cuisine: "Caribbean Fusion",
    mealType: "dinner",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 12,
    totalTime: 27,
    servings: 2,
    ingredients: [
      { name: "large shrimp, peeled and deveined", amount: "12", unit: "oz" },
      { name: "cooked jasmine rice", amount: "1.5", unit: "cups" },
      { name: "ripe mango, diced", amount: "1", unit: "medium" },
      { name: "red bell pepper, diced", amount: "1/2", unit: "medium" },
      { name: "red onion, thinly sliced", amount: "1/4", unit: "small" },
      { name: "fresh cilantro, chopped", amount: "3", unit: "tbsp" },
      { name: "lime juice", amount: "3", unit: "tbsp" },
      { name: "coconut milk", amount: "3", unit: "tbsp" },
      { name: "chili powder", amount: "1", unit: "tsp" },
      { name: "ground cumin", amount: "1/2", unit: "tsp" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "3/4", unit: "tsp" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Stir coconut milk into the warm cooked rice for coconut rice. Season with a pinch of salt.",
      },
      {
        step: 2,
        instruction:
          "Make the mango salsa: combine diced mango, bell pepper, red onion, 2 tbsp cilantro, and 2 tbsp lime juice.",
      },
      {
        step: 3,
        instruction:
          "Toss shrimp with olive oil, chili powder, cumin, and 1/2 tsp salt.",
      },
      {
        step: 4,
        instruction:
          "Cook shrimp in a hot skillet for 2 minutes per side until pink and slightly charred.",
        tip: "Don't overcook the shrimp. They're done as soon as they curl into a C shape. If they're an O, they're overdone.",
      },
      {
        step: 5,
        instruction:
          "Divide coconut rice between bowls. Top with shrimp and mango salsa. Squeeze remaining lime juice over everything. Garnish with cilantro.",
      },
    ],
    nutrition: { calories: 380, protein: 28, carbs: 48, fat: 8, fiber: 3 },
    tags: ["healthy", "high-protein", "dairy-free", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["salmon-bowl", "shrimp-and-broccoli", "grilled-fish-tacos"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "edamame-grain-bowl",
    name: "Edamame Grain Bowl",
    emoji: "\u{1F35B}",
    description:
      "A nourishing bowl of farro, shelled edamame, roasted beets, pickled carrots, and a miso-ginger dressing. A grain bowl that hits every note: earthy, tangy, creamy, and crunchy.",
    cuisine: "Asian Fusion",
    mealType: "lunch",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 2,
    ingredients: [
      { name: "farro", amount: "3/4", unit: "cup" },
      { name: "shelled edamame", amount: "1", unit: "cup" },
      { name: "beets, peeled and cubed", amount: "2", unit: "medium" },
      { name: "carrot, thinly sliced", amount: "1", unit: "medium" },
      { name: "rice vinegar", amount: "2", unit: "tbsp" },
      { name: "white miso paste", amount: "1", unit: "tbsp", group: "For the dressing" },
      { name: "fresh ginger, grated", amount: "1", unit: "tsp", group: "For the dressing" },
      { name: "sesame oil", amount: "1", unit: "tsp", group: "For the dressing" },
      { name: "rice vinegar", amount: "1", unit: "tbsp", group: "For the dressing" },
      { name: "warm water", amount: "1", unit: "tbsp", group: "For the dressing" },
      { name: "olive oil", amount: "1", unit: "tbsp" },
      { name: "salt", amount: "1/2", unit: "tsp" },
      { name: "sesame seeds", amount: "1", unit: "tsp" },
      { name: "microgreens or sprouts", amount: "1/4", unit: "cup" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 400F. Toss beet cubes with olive oil and salt. Roast for 25 minutes until tender.",
      },
      {
        step: 2,
        instruction:
          "Cook farro in salted boiling water for 20 minutes until tender. Drain. Cook edamame according to package directions.",
      },
      {
        step: 3,
        instruction:
          "Quick-pickle the carrots: toss sliced carrots with 2 tbsp rice vinegar and a pinch of salt. Let sit while you prep everything else.",
        tip: "Even 10 minutes of pickling makes a noticeable difference in the flavor and texture.",
      },
      {
        step: 4,
        instruction:
          "Whisk miso paste, ginger, sesame oil, rice vinegar, and warm water until smooth for the dressing.",
      },
      {
        step: 5,
        instruction:
          "Assemble bowls with farro, edamame, roasted beets, and pickled carrots. Drizzle with miso-ginger dressing. Top with sesame seeds and microgreens.",
      },
    ],
    nutrition: { calories: 380, protein: 18, carbs: 50, fat: 12, fiber: 10 },
    tags: ["healthy", "vegan", "meal-prep"],
    youtubeVideoId: null,
    relatedSlugs: ["quinoa-salad", "tofu-buddha-bowl", "mediterranean-bowl"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
  {
    slug: "zucchini-lasagna",
    name: "Zucchini Lasagna",
    emoji: "\u{1F96C}",
    description:
      "All the comfort of lasagna with thin-sliced zucchini replacing the noodles. Layered with a beefy marinara, ricotta mixture, and bubbly mozzarella on top.",
    cuisine: "Italian",
    mealType: "dinner",
    difficulty: "Medium",
    prepTime: 25,
    cookTime: 45,
    totalTime: 70,
    servings: 8,
    ingredients: [
      { name: "large zucchini", amount: "4", unit: "whole" },
      { name: "ground beef (90/10)", amount: "1", unit: "lb" },
      { name: "marinara sauce", amount: "24", unit: "oz" },
      { name: "ricotta cheese", amount: "15", unit: "oz" },
      { name: "shredded mozzarella cheese", amount: "2", unit: "cups" },
      { name: "Parmesan cheese, grated", amount: "1/2", unit: "cup" },
      { name: "large egg", amount: "1", unit: "whole" },
      { name: "garlic cloves, minced", amount: "3", unit: "cloves" },
      { name: "dried Italian seasoning", amount: "1", unit: "tsp" },
      { name: "salt", amount: "1.5", unit: "tsp" },
      { name: "black pepper", amount: "1/2", unit: "tsp" },
      { name: "fresh basil", amount: "6", unit: "leaves" },
    ],
    steps: [
      {
        step: 1,
        instruction:
          "Preheat oven to 375F. Slice zucchini lengthwise into 1/4-inch strips. Lay on paper towels, sprinkle with 1 tsp salt, and let sit 15 minutes. Pat very dry.",
        tip: "This step removes excess moisture and prevents a watery lasagna. Do not skip the salting and drying.",
      },
      {
        step: 2,
        instruction:
          "Brown the ground beef in a skillet over medium-high heat. Add garlic, cook 30 seconds. Stir in marinara sauce and Italian seasoning. Simmer 5 minutes.",
      },
      {
        step: 3,
        instruction:
          "Mix ricotta, egg, half the Parmesan, remaining salt, and pepper in a bowl.",
      },
      {
        step: 4,
        instruction:
          "Layer in a 9x13 dish: thin layer of meat sauce, zucchini slices, ricotta mixture, mozzarella. Repeat 3 times, ending with sauce, mozzarella, and remaining Parmesan on top.",
      },
      {
        step: 5,
        instruction:
          "Cover with foil and bake 25 minutes. Remove foil and bake 20 more minutes until bubbly and golden. Rest 15 minutes before slicing. Garnish with basil.",
      },
    ],
    nutrition: { calories: 340, protein: 28, carbs: 14, fat: 20, fiber: 3 },
    tags: ["healthy", "high-protein", "low-carb", "gluten-free"],
    youtubeVideoId: null,
    relatedSlugs: ["stuffed-zucchini", "homemade-lasagna", "turkey-meatballs"],
    datePublished: "2026-04-13",
    dateModified: "2026-04-13",
  },
];
