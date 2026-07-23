const groups = {
  "PROGRAMMING LANGUAGES": ["Python", "HTML5", "PHP", "JavaScript", "C", "C++", "R"],
  "FRAMEWORKS / LIBRARIES": ["NumPy", "Pandas", "TensorFlow", "PyTorch", "Scikit-Learn", "Laravel", "Tailwind CSS"],
  "TOOLS / TECHNOLOGIES": ["LangChain", "OpenAI", "Jupyter", "GitHub", "VS Code", "Docker", "MySQL"],
};

export default function SkillsPage() {
  return <div className="signal-page"><header className="signal-page-header"><div><p className="signal-page-kicker"><span>06</span> / CAPABILITY MAP</p><h1 className="signal-page-title">The current<br /><em>stack.</em></h1></div><p className="signal-page-intro">Tools are only useful when they help you think clearly. This is the working set I use to move from a rough idea to a running system.</p></header><div className="skills-layout">{Object.entries(groups).map(([title, items], index) => <section className="signal-panel skill-panel" key={title}><span className="panel-label">0{index + 1} / LAYER</span><h2>{title}</h2><div className="skill-list">{items.map(item => <span className="skill-chip" key={item}><b style={{color:"#b7ff00"}}>+</b>{item}</span>)}</div><span className="layer-count">{String(items.length).padStart(2,"0")} ACTIVE NODES</span></section>)}</div></div>;
}
