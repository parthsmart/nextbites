export type Recipe = {
  id: string;
  title: string;
  description: string;
  category: string;
  prepTime: string;
  cookTime: string;
  difficulty: "Easy" | "Medium";
  image: string;
  accent: string;
  tags: string[];
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "lemon-herb-chicken",
    title: "Lemon Herb Chicken",
    description: "Juicy skillet chicken with bright lemon, garlic, and garden herbs.",
    category: "Dinner",
    prepTime: "10 min",
    cookTime: "25 min",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=85",
    accent: "#f5c46b",
    tags: ["High protein", "One pan"],
    ingredients: ["4 chicken breasts", "2 lemons", "3 garlic cloves", "Fresh rosemary", "Olive oil", "Sea salt and pepper"],
    steps: ["Season the chicken generously with salt, pepper, and rosemary.", "Sear in olive oil until golden on both sides.", "Add lemon slices and garlic, then cover and cook until tender.", "Rest for five minutes and serve with the pan juices."],
  },
  {
    id: "silky-tomato-pasta",
    title: "Silky Tomato Pasta",
    description: "A velvety tomato sauce, parmesan, and basil come together in one cozy bowl.",
    category: "Pasta",
    prepTime: "5 min",
    cookTime: "20 min",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=900&q=85",
    accent: "#ee8d72",
    tags: ["Vegetarian", "Comfort food"],
    ingredients: ["300g spaghetti", "1 can crushed tomatoes", "2 garlic cloves", "Parmesan", "Fresh basil", "Olive oil"],
    steps: ["Cook the pasta in well-salted water until just al dente.", "Soften the garlic in olive oil, then add the tomatoes.", "Simmer the sauce for 15 minutes and fold in parmesan.", "Toss with the pasta and finish with basil."],
  },
  {
    id: "green-goddess-bowl",
    title: "Green Goddess Bowl",
    description: "Crunchy greens, roasted vegetables, and creamy avocado dressing.",
    category: "Healthy",
    prepTime: "15 min",
    cookTime: "15 min",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    accent: "#a8c987",
    tags: ["Plant-based", "Fresh"],
    ingredients: ["Mixed greens", "1 sweet potato", "1 avocado", "Chickpeas", "Pumpkin seeds", "Green goddess dressing"],
    steps: ["Roast the cubed sweet potato until caramelized.", "Massage the greens with a pinch of salt.", "Layer greens, sweet potato, chickpeas, and avocado.", "Drizzle with dressing and scatter over pumpkin seeds."],
  },
  {
    id: "cinnamon-french-toast",
    title: "Cinnamon French Toast",
    description: "Golden brioche, warm cinnamon, and a drizzle of maple for slow mornings.",
    category: "Breakfast",
    prepTime: "8 min",
    cookTime: "12 min",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=85",
    accent: "#d8a56d",
    tags: ["Sweet", "Weekend"],
    ingredients: ["4 slices brioche", "2 eggs", "1/2 cup milk", "1 teaspoon cinnamon", "Maple syrup", "Butter"],
    steps: ["Whisk eggs, milk, and cinnamon in a shallow bowl.", "Soak each slice of brioche for a few seconds.", "Cook in butter until golden on both sides.", "Serve warm with maple syrup."],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
