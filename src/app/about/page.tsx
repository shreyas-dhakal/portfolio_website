import { Heart, ArrowUpRight } from "lucide-react";

const facts = [["LANGUAGE", "English / Nepali"], ["NATIONALITY", "Nepal"], ["LOCATION", "Adelaide, AU"]];
const hobbies = ["Coding", "Reading books", "Playing games", "Working out", "Listening to music"];

export default function AboutPage() {
  return <div className="signal-page">
    <header className="signal-page-header"><div><p className="signal-page-kicker"><span>02</span> / PROFILE</p><h1 className="signal-page-title">The human<br /><em>behind</em> the model.</h1></div><p className="signal-page-intro">A builder from Nepal, currently based in Adelaide. I like difficult problems, useful interfaces, and ideas that survive contact with reality.</p></header>
    <div className="about-layout">
      <section className="signal-panel about-story"><span className="panel-label">[ SYSTEM NOTE / 001 ]</span><p className="signal-copy" style={{marginTop:"2.5rem"}}>I am an AI Engineer passionate about research and <strong>AI-based products</strong>. My work lives at the intersection of machine learning, agents, and the web: translating complex systems into tools people can actually use.</p><p className="signal-copy">Currently focused on LLM applications, intelligent agents, and the practical implications of artificial intelligence in the real world.</p></section>
      <div className="data-stack">{facts.map(([label, value]) => <div className="signal-panel data-tile" key={label}><span className="data-label">{label}</span><span className="data-value"><b>+</b> {value}</span></div>)}<a className="signal-panel data-tile" href="/resume.pdf" target="_blank"><span className="data-label">DOCUMENT / CV</span><span className="data-value">Open resume <ArrowUpRight size={18} /></span></a></div>
    </div>
    <div className="signal-grid about-signal-grid"><div className="signal-card stat-card"><span className="card-number">[ OPERATING MODE ]</span><div className="stat-list"><div><span>01</span> Curiosity <b>ON</b></div><div><span>02</span> Empathy <b>ON</b></div><div><span>03</span> Shipping <b>ON</b></div></div></div><div className="signal-card quote-card"><span className="card-number">[ FIELD NOTE ]</span><p>“Make the complex<br />feel inevitable.”</p><span>— PERSONAL OPERATING SYSTEM</span></div></div>
    <div className="section-rule"><Heart size={14} /> Off-screen interests</div>
    <div className="hobby-grid">{hobbies.map((hobby, index) => <div className="hobby-item" key={hobby}><b>0{index + 1}</b>{hobby}</div>)}</div>
  </div>;
}
