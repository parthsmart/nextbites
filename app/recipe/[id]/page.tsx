import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

type RecipePageProps = {
  params: {
    id: string;
  };
};

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export const dynamicParams = false;

export default function RecipePage({ params }: RecipePageProps) {
  const recipe = getRecipe(params.id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="detail-page">
      <Link href="/#recipes" className="back-link">← Back to recipes</Link>
      <div className="detail-hero">
        <div className="detail-hero__image-wrap">
          <img src={recipe.image} alt={recipe.title} className="detail-hero__image" />
          <span className="recipe-card__category">{recipe.category}</span>
        </div>
        <div className="detail-hero__copy">
          <p className="eyebrow">{recipe.category} · {recipe.difficulty}</p>
          <h1>{recipe.title}</h1>
          <p className="detail-hero__description">{recipe.description}</p>
          <div className="detail-meta">
            <span><strong>{recipe.prepTime}</strong> prep</span>
            <span><strong>{recipe.cookTime}</strong> cook</span>
          </div>
        </div>
      </div>
      <div className="detail-content">
        <section>
          <p className="eyebrow">What you need</p>
          <h2>Ingredients</h2>
          <ul className="ingredient-list">
            {recipe.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
          </ul>
        </section>
        <section>
          <p className="eyebrow">Let&apos;s get cooking</p>
          <h2>Method</h2>
          <ol className="steps-list">
            {recipe.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </section>
      </div>
    </main>
  );
}
