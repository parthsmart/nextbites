import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites | Recipes for real life",
  description: "Simple, delicious recipes for however today feels.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <nav className="site-nav">
          <Link className="brand" href="/">
            <span className="brand__mark">N</span>
            <span>next<span className="brand__accent">bites</span></span>
          </Link>
          <div className="nav-links">
            <a className="nav-link nav-link--active" href="#recipes">Recipes</a>
            <a className="nav-link" href="#collections">Collections</a>
            <a className="nav-link" href="#about">About</a>
          </div>
          <button className="nav-search" aria-label="Search recipes" type="button">⌕</button>
        </nav>
        {children}
        <footer className="site-footer">
          <span className="brand"><span className="brand__mark">N</span><span>next<span className="brand__accent">bites</span></span></span>
          <span>Made for hungry people.</span>
        </footer>
      </body>
    </html>
  );
}
