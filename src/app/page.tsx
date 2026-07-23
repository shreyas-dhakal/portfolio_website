

import SocialLinks from "@/components/SocialLinks";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit, GitBranch, Radio, Sparkles } from "lucide-react";

export const siteConfig = {
  name: "Shreyas Dhakal",
  description: "AI Engineer",
  ogImage: "",
  url: "https://shreyasdhakal.com.np",
}
export default function Home() {
  return (
    <div className="home-shell">
      <div className="home-kicker"><span className="pulse-dot" /> AVAILABLE FOR SELECT BUILDS <span className="kicker-line" /> 27.7172° N, 85.3240° E</div>

      <section className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> / INTRODUCTION</p>
          <h1>Shreyas<br /><em>Dhakal</em><span className="period">.</span></h1>
          <div className="role-line"><span className="role-mark">AI</span><span>Engineer building systems<br />that think in public.</span></div>
          <p className="hero-description">I turn messy problems into intelligent products. Currently exploring the edge between <strong>machine learning, computer vision,</strong> and the web.</p>
          <div className="hero-actions">
            <Link href="/projects" className="button-primary">Explore the lab <ArrowUpRight size={17} /></Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button-quiet">Resume <span>↗</span></a>
          </div>
          <div className="social-row"><SocialLinks /><span className="social-note">Say hello <span>→</span></span></div>
        </div>

        <div className="hero-visual">
          <div className="visual-topline"><span>SHREYAS.D / NODE_001</span><span className="live-label"><Radio size={12} /> LIVE SIGNAL</span></div>
          <div className="orbital-stage">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="core"><BrainCircuit size={72} strokeWidth={1.1} /><span>INTELLIGENCE<br />IN MOTION</span></div>
            <div className="orbit-label label-one">VISION<br /><b>98.4%</b></div>
            <div className="orbit-label label-two">LATENCY<br /><b>12ms</b></div>
            <div className="orbit-label label-three">BUILD<br /><b>ACTIVE</b></div>
          </div>
          <div className="visual-footer"><span>MODEL / HUMAN + MACHINE</span><span>SCROLL TO DECODE ↓</span></div>
        </div>
      </section>

      <section className="signal-grid">
        <div className="signal-card feature-card"><div className="card-number">[ 001 ]</div><div><Sparkles size={19} /><p>Featured build</p><h2>Smart Parking<br /><span>Management System</span></h2><span className="card-link">Computer vision / Python <ArrowUpRight size={15} /></span></div></div>
        <div className="signal-card stat-card"><div className="card-number">[ STACK ]</div><div className="stat-list"><div><span>01</span> Python <b>●</b></div><div><span>02</span> TensorFlow <b>●</b></div><div><span>03</span> Computer Vision <b>●</b></div><div><span>04</span> React / Next.js <b>●</b></div></div><Link href="/skills" className="card-link">View full stack <ArrowUpRight size={15} /></Link></div>
        <div className="signal-card quote-card"><GitBranch size={20} /><p>“The best interface<br />is a useful idea.”</p><span>— SYSTEM NOTE 04</span></div>
      </section>
      <footer className="home-footer"><span><span className="footer-square" /> EST. 2024 / KATHMANDU</span><span>© SHREYAS DHAKAL</span><Link href="/contact">Have a problem worth solving? <u>Let&apos;s talk</u> ↗</Link></footer>
    </div>
  );
}
