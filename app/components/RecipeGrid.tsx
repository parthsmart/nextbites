"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import { RecipeCard } from "./RecipeCard";

type RecipeGridProps = {
  recipes: Recipe[];
};

export function RecipeGrid({ recipes }: RecipeGridProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const visibleRecipes = recipes.filter((recipe) =>
    `${recipe.title} ${recipe.category} ${recipe.tags.join(" ")}`
      .toLowerCase()
      .includes(normalizedQuery),
  );

  return (
    <>
      <div className="search-box">
        <span className="search-box__icon" aria-hidden="true">⌕</span>
        <input
          aria-label="Search recipes"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search recipes or cuisines..."
        />
        {query && (
          <button type="button" className="search-box__clear" onClick={() => setQuery("")} aria-label="Clear search">
            ×
          </button>
        )}
      </div>
      {visibleRecipes.length === 0 ? (
        <p className="empty-state">No recipes match “{query}”. Try another search.</p>
      ) : (
        <div className="recipe-grid">
          {visibleRecipes.map((recipe, index) => (
            <RecipeCard key={recipe.id} recipe={recipe} featured={index === 0 && !query} />
          ))}
        </div>
      )}
    </>
  );
}
