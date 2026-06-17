export function SectionTitle({ eyebrow, title }) {
  return (
    <div className="section-title">
      <p className="section-title__eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}
