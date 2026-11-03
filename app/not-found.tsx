import Link from "next/link";

export default function NotFound() {
  return (
    <main className="status-page">
      <div className="status-card">
        <p className="status-code">404</p>
        <p className="eyebrow">Oops, empty plate</p>
        <h1>That recipe disappeared.</h1>
        <p>We couldn&apos;t find the bite you were looking for. Let&apos;s get you back to something tasty.</p>
        <Link className="button button--primary" href="/">Back to recipes <span>→</span></Link>
      </div>
    </main>
  );
}
