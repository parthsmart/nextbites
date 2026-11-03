import { RecipeCard } from "./components/RecipeCard";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Good food, no fuss</p>
          <h1>Small bites.<br /><em>Big comfort.</em></h1>
          <p className="hero__description">
            Recipes for real life — weeknight wins, lazy Sunday projects, and every delicious moment in between.
          </p>
          <a className="button button--primary" href="#recipes">Explore recipes <span>→</span></a>
        </div>
        <div className="hero__art" aria-label="A colorful bowl of fresh food" role="img">
          <div className="hero__circle hero__circle--one" />
          <div className="hero__circle hero__circle--two" />
          <div className="hero__plate">
            <div className="hero__food hero__food--greens" />
            <div className="hero__food hero__food--tomato" />
            <div className="hero__food hero__food--egg" />
            <div className="hero__food hero__food--avocado" />
          </div>
          <span className="hero__note hero__note--top">fresh &amp; easy</span>
          <span className="hero__note hero__note--bottom">made with joy ✦</span>
        </div>
      </section>

      <section className="recipes-section" id="recipes">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Pick your mood</p>
            <h2>What are you craving?</h2>
          </div>
          <a className="text-link" href="#recipes">View all recipes <span>↗</span></a>
        </div>
        <div className="filter-row">
          {["All recipes", "Quick & easy", "Healthy", "Comfort food"].map((filter, index) => (
            <button className={`filter-pill ${index === 0 ? "filter-pill--active" : ""}`} key={filter} type="button">
              {filter}
            </button>
          ))}
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe, index) => <RecipeCard key={recipe.id} recipe={recipe} featured={index === 0} />)}
        </div>
      </section>
    </main>
  );
}
