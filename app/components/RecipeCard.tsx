import Link from "next/link";
import type { Recipe } from "../data/recipes";

type RecipeCardProps = {
  recipe: Recipe;
  featured?: boolean;
};

export function RecipeCard({ recipe, featured = false }: RecipeCardProps) {
  return (
    <Link href={`/recipe/${recipe.id}`} className={`recipe-card-link ${featured ? "recipe-card-link--featured" : ""}`}>
      <article className={`recipe-card ${featured ? "recipe-card--featured" : ""}`}>
        <div className="recipe-card__image-wrap">
          <img src={recipe.image} alt={recipe.title} className="recipe-card__image" />
          <span className="recipe-card__category">{recipe.category}</span>
          <span className="recipe-card__save" aria-label={`Save ${recipe.title}`}>♡</span>
        </div>
        <div className="recipe-card__body">
          <div className="recipe-card__meta">
            <span>{recipe.prepTime} prep</span>
            <span aria-hidden="true">·</span>
            <span>{recipe.cookTime} cook</span>
          </div>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <div className="recipe-card__footer">
            <div className="recipe-card__tags">
              {recipe.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <span className="recipe-card__difficulty">{recipe.difficulty}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
