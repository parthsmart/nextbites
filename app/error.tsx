"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="status-page">
      <div className="status-card">
        <p className="eyebrow">A little kitchen mishap</p>
        <h1>Something went wrong.</h1>
        <p>Our recipe box hit a snag. Give it another try and we&apos;ll get things moving.</p>
        <button className="button button--primary" onClick={() => reset()} type="button">
          Try again <span>↻</span>
        </button>
      </div>
    </main>
  );
}
