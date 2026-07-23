const entries = [
  ["02.2026 — NOW", "Master of Artificial Intelligence and Machine Learning", "Adelaide University, Australia", "Advanced study in AI and ML, building the research foundation for a career in intelligent systems."],
  ["11.2019 — 07.2024", "Bachelor of Computer Engineering", "Khwopa College of Engineering / Tribhuvan University, Nepal", "A broad engineering foundation across hardware, software, systems, and the fundamentals that make computers useful."],
];

export default function EducationPage() {
  return <div className="signal-page"><header className="signal-page-header"><div><p className="signal-page-kicker"><span>03</span> / TRANSMISSION LOG</p><h1 className="signal-page-title">Where the<br /><em>signal</em> started.</h1></div><p className="signal-page-intro">The education layer behind the experiments: engineering fundamentals, machine learning theory, and an ongoing curiosity for what comes next.</p></header><div className="timeline">{entries.map(([date, title, school, description]) => <article className="timeline-item" key={title}><div className="timeline-date">{date}</div><div className="timeline-content"><h2>{title}</h2><p style={{color:"#b7ff00", marginBottom:".75rem"}}>{school}</p><p>{description}</p></div></article>)}</div></div>;
}
