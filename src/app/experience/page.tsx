const entries = [
  ["02.2025 — 08.2025", "AI Engineer", "xval.ai", "Researched methods for generating educational content with Generative AI and LLMs. Built RAG systems, vector databases, AI scripts, and text evaluation frameworks."],
  ["07.2024 — 12.2024", "Full Stack Web Developer", "Code Craft Web Solution", "Built and deployed a hospital website with PHP and Laravel, working across frontend, backend, server deployment, and client interaction."],
  ["05.2023 — 11.2023", "Machine Learning Intern", "SMTM Capital", "Researched, developed, and implemented machine learning models for technical analysis of financial data and collaborated on AI-powered trading strategies."],
];

export default function ExperiencePage() {
  return <div className="signal-page"><header className="signal-page-header"><div><p className="signal-page-kicker"><span>04</span> / FIELD RECORDS</p><h1 className="signal-page-title">Built in the<br /><em>real world.</em></h1></div><p className="signal-page-intro">A field log of shipping, researching, and learning in public. Every role added another layer to the way I approach systems.</p></header><div className="timeline">{entries.map(([date, title, company, description]) => <article className="timeline-item" key={title}><div className="timeline-date">{date}</div><div className="timeline-content"><h2>{title}</h2><p style={{color:"#b7ff00", marginBottom:".75rem"}}>{company}</p><p>{description}</p></div></article>)}</div></div>;
}
