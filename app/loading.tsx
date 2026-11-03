export default function Loading() {
  return (
    <main className="status-page">
      <div className="status-card">
        <span className="status-spinner" aria-hidden="true" />
        <p className="eyebrow">One moment</p>
        <h1>Setting the table...</h1>
        <p>We&apos;re fetching something delicious.</p>
      </div>
    </main>
  );
}
