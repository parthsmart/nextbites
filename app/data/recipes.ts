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
  },
];
