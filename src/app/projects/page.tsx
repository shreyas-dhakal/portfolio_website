import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects: { title: string; description: string; tags: string[]; link: string }[] = [
  { title: "Smart Parking Management System", description: "Computer vision system for parking occupancy detection and number plate recognition.", tags: ["Python", "Computer Vision"], link: "https://github.com/shreyas-dhakal/smart_parking_management_system" },
  { title: "Reinforcement Learning NPC", description: "A multi-agent reinforcement learning model operating inside a simulated 3D environment.", tags: ["Unity", "TensorFlow", "RL"], link: "https://drive.google.com/file/d/1_-NQIMSCTxlxbsM5z25tGY6Fn5eaOhVF/view?usp=sharing" },
  { title: "Dirghayu Hospital", description: "A full-stack hospital website taken from conception through deployment.", tags: ["PHP", "Laravel", "MySQL"], link: "https://hospitaldirghayu.com/" },
  { title: "Baagchaal", description: "A classic Nepali board game implemented with the fundamentals of C programming.", tags: ["C", "Game Logic"], link: "https://drive.google.com/drive/folders/1vLILy0j6TXGFblW4qq4JU78qj0NKqHzE?usp=sharing" },
];

export default function ProjectsPage() {
  return <div className="signal-page"><header className="signal-page-header"><div><p className="signal-page-kicker"><span>05</span> / THE LAB</p><h1 className="signal-page-title">Things I<br /><em>made.</em></h1></div><p className="signal-page-intro">Small experiments and serious systems. A curated archive of the things I built to understand a problem better.</p></header><div className="project-grid">{projects.map((project, index) => <article className="signal-panel project-tile" key={project.title}><div><span className="panel-label">[ 00{index + 1} ]</span><h2>{project.title}</h2><p>{project.description}</p></div><div className="project-meta"><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><Link href={project.link} target="_blank" rel="noopener noreferrer">OPEN <ArrowUpRight size={15} /></Link></div></article>)}</div></div>;
}
