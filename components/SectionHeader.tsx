export default function SectionHeader({ kicker, title, text }: { kicker: string; title: string; text?: string }) {
  return (
    <div>
      <div className="section-kicker">{kicker}</div>
      <h2 className="section-title">{title}</h2>
      {text ? <p className="section-intro">{text}</p> : null}
    </div>
  );
}
