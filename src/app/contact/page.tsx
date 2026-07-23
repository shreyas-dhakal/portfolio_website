import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return <div className="signal-page"><header className="signal-page-header"><div><p className="signal-page-kicker"><span>07</span> / OPEN CHANNEL</p><h1 className="signal-page-title">Let&apos;s make<br /><em>something.</em></h1></div><p className="signal-page-intro">Have a problem worth solving, a strange idea, or just want to compare notes? Send a signal. I&apos;ll get back to you.</p></header><div className="contact-layout"><aside className="signal-panel contact-aside"><span className="panel-label">[ CONTACT PROTOCOL ]</span><h2>Good work<br />starts with a<br /><em>conversation.</em></h2><p>Available for selected AI, machine learning, computer vision, and web projects.</p></aside><section className="signal-panel contact-form-panel"><ContactForm /></section></div></div>;
}
