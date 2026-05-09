import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Car,
  ClipboardCheck,
  Clock3,
  Construction,
  Cpu,
  FileText,
  Gauge,
  HardHat,
  Loader,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  ThermometerSun,
  Truck,
  Wrench,
  Zap
} from 'lucide-react';
import './styles.css';

const WHATSAPP_NUMBER = '971501234567';
const WHATSAPP_TEXT = encodeURIComponent(
  'Hello, I need expert hydraulic diagnostics for heavy equipment in UAE.\n\nMachine:\nBrand / model:\nLocation:\nProblem:\nIs the machine working or stopped?\nWas it repaired before?\nPhotos/videos:'
);
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`;

const navItems = ['Services', 'Problems We Solve', 'Equipment', 'How It Works', 'Pricing', 'Cases', 'Contact'];

const problemCards = [
  { icon: Gauge, title: 'Hydraulic power loss' },
  { icon: SlidersHorizontal, title: 'Slow or weak functions' },
  { icon: ThermometerSun, title: 'Hydraulic overheating' },
  { icon: Zap, title: 'Pump noise or pressure loss' },
  { icon: Clock3, title: 'Machine stops after warm-up' },
  { icon: Wrench, title: 'Failed previous repair' }
];

const clientTypes = [
  { icon: Building2, title: 'Construction companies', text: 'Emergency diagnostics and repair planning for excavators, loaders, cranes and site equipment.' },
  { icon: Truck, title: 'Equipment rental companies', text: 'Reduce downtime, avoid wrong repairs and keep your rental fleet working.' },
  { icon: Loader, title: 'Industrial & logistics companies', text: 'Hydraulic troubleshooting for forklifts, port equipment and industrial hydraulic systems.' },
  { icon: Wrench, title: 'Hydraulic workshops', text: 'External field diagnostics partner for complex cases and on-site inspections.' }
];

const equipment = [
  'Excavators', 'Wheel loaders', 'HDD drilling rigs', 'Cranes', 'Forklifts', 'Hydraulic pumps', 'Valves', 'Cylinders',
  'Hydraulic motors', 'Power packs', 'Electro-hydraulic controls', 'Industrial hydraulic systems'
];

const steps = [
  { icon: MessageCircle, title: 'Send Machine Details' },
  { icon: Truck, title: 'Site Visit' },
  { icon: Gauge, title: 'Expert Diagnostics' },
  { icon: FileText, title: 'Defect Report' },
  { icon: ClipboardCheck, title: 'Repair Plan & Quotation' }
];

const cases = [
  {
    title: 'Excavator — Power Loss',
    text: 'Low power on boom and arm. Hydraulic behavior checked, fault area identified.',
    result: 'Downtime reduced by 3 days'
  },
  {
    title: 'Wheel Loader — Slow Functions',
    text: 'Slow lift and tilt. Pilot pressure and hydraulic circuit tested on site.',
    result: 'Downtime reduced by 2 days'
  },
  {
    title: 'HDD Rig — Overheating',
    text: 'High oil temperature and unstable functions. Cooling and bypass issue isolated.',
    result: 'Downtime reduced by 4 days'
  }
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="ACA Hydraulic UAE">
      <span>ACA</span>
      <small>Hydraulic UAE</small>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className={open ? 'nav nav-open' : 'nav'}>
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setOpen(false)}>{item}</a>
          ))}
        </nav>
        <a className="btn btn-primary header-cta" href="#contact">Request Expert Diagnostics <ArrowRight size={16} /></a>
        <button className="menu-btn" onClick={() => setOpen((v) => !v)} aria-label="Open menu">☰</button>
      </div>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="skyline" />
      <div className="machine machine-boom" />
      <div className="machine machine-body" />
      <div className="technician">
        <div className="helmet" />
        <div className="jacket">ACA</div>
        <div className="tablet" />
      </div>
      <div className="hud-card">
        <span>System Pressure</span>
        <strong>312</strong>
        <small>bar</small>
        <div className="chart"><i /><i /><i /><i /><i /><i /></div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow"><HardHat size={16} /> Premium UAE Field Service</div>
          <h1>Expert On-Site <span>Hydraulic Diagnostics</span> for Heavy Equipment in UAE</h1>
          <p className="hero-subtitle">We help construction, rental and industrial companies find the real cause of hydraulic failures, reduce downtime and avoid unnecessary parts replacement.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp Us Now</a>
            <a className="btn btn-outline" href="#contact">Request Expert Diagnostics</a>
          </div>
          <div className="price-alert"><Phone size={18} /> <strong>Diagnostics from $1000.</strong> Travel charged separately.</div>
          <div className="trust-row">
            <div><MapPin size={20} /> On-site diagnostics</div>
            <div><FileText size={20} /> Defect report</div>
            <div><Cpu size={20} /> Pumps, valves & cylinders</div>
            <div><ShieldCheck size={20} /> Emergency breakdown support</div>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="section" id="problems-we-solve">
      <div className="container">
        <div className="section-head">
          <span>Problems We Solve</span>
          <h2>Hydraulic Problems We Diagnose</h2>
          <p>Many failures are not solved by replacing filters, oil, sensors or random parts. We focus on finding the real cause before repair.</p>
        </div>
        <div className="cards six">
          {problemCards.map(({ icon: Icon, title }) => (
            <article className="mini-card" key={title}>
              <Icon size={34} />
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Customers() {
  return (
    <section className="section compact" id="services">
      <div className="container">
        <div className="section-head">
          <span>Services</span>
          <h2>Built for Companies Where Downtime Costs Money</h2>
        </div>
        <div className="cards four">
          {clientTypes.map(({ icon: Icon, title, text }, index) => (
            <article className={`photo-card photo-${index + 1}`} key={title}>
              <div className="card-overlay" />
              <Icon size={34} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Equipment() {
  return (
    <section className="section compact" id="equipment">
      <div className="container">
        <div className="section-head">
          <span>Equipment</span>
          <h2>Heavy Equipment and Hydraulic Systems</h2>
        </div>
        <div className="equipment-grid">
          {equipment.map((item) => <div key={item}><Construction size={24} /> {item}</div>)}
        </div>
      </div>
    </section>
  );
}

function FailedRepairs() {
  return (
    <section className="section compact">
      <div className="container">
        <div className="failed-banner">
          <ShieldCheck size={54} />
          <div>
            <h2>When Other Mechanics Failed</h2>
            <p>We do not guess. We diagnose before replacing expensive parts.</p>
          </div>
          <div className="metal-shape" />
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section compact" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <span>How It Works</span>
          <h2>Clear Diagnostic Process</h2>
        </div>
        <div className="process-grid">
          {steps.map(({ icon: Icon, title }, index) => (
            <div className="process-step" key={title}>
              <b>{index + 1}</b>
              <Icon size={28} />
              <span>{title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section compact" id="pricing">
      <div className="container">
        <div className="section-head">
          <span>Pricing</span>
          <h2>Premium Diagnostic Service</h2>
          <p>Transparent pricing for serious B2B cases. Diagnostics and travel are separate charges.</p>
        </div>
        <div className="pricing-grid">
          <article className="price-card">
            <Gauge size={44} />
            <h3>Initial Technical Inspection</h3>
            <small>from</small>
            <strong>$500</strong>
          </article>
          <article className="price-card popular">
            <div className="ribbon">Most Popular</div>
            <Cpu size={44} />
            <h3>Expert Hydraulic Diagnostics</h3>
            <small>from</small>
            <strong>$1000</strong>
          </article>
          <article className="price-card">
            <Zap size={44} />
            <h3>Emergency Breakdown Diagnostics</h3>
            <small>from</small>
            <strong>$1500</strong>
          </article>
        </div>
        <div className="pricing-notes">
          <div><Car size={22} /> <strong>Travel / Site Visit Fee</strong> — charged separately</div>
          <div><ShieldCheck size={22} /> Diagnostic fee and travel fee are separate charges.</div>
          <div><ClipboardCheck size={22} /> Repair works and parts quoted separately after diagnostics.</div>
        </div>
      </div>
    </section>
  );
}

function Cases() {
  return (
    <section className="section compact" id="cases">
      <div className="container">
        <div className="section-head">
          <span>Cases</span>
          <h2>Real Field Experience With Complex Failures</h2>
        </div>
        <div className="cards three">
          {cases.map((item, index) => (
            <article className="case-card" key={item.title}>
              <div className={`case-image case-${index + 1}`} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <strong>{item.result}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const cities = useMemo(() => ['Dubai', 'Sharjah', 'Ajman', 'Abu Dhabi', 'Jebel Ali', 'Al Quoz', 'Ras Al Khor', 'DIP', 'Other UAE'], []);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <span className="section-kicker">Contact</span>
          <h2>Request Expert Diagnostics</h2>
          <p>Send machine details, symptoms, photos/videos and location. Final diagnosis can only be confirmed after on-site inspection.</p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp Us Now</a>
            <a className="phone-link" href="tel:+971501234567"><Phone size={18} /> +971 50 123 4567</a>
          </div>
          <div className="fine-print"><BadgeCheck size={18} /> Diagnostics from $1000. Travel charged separately.</div>
        </div>
        <form className="lead-form" onSubmit={handleSubmit}>
          {sent && <div className="form-success">Thank you. Your request is prepared. Connect the form to your email, CRM or Google Sheet before launch.</div>}
          <div className="form-row">
            <input required placeholder="Full Name" />
            <input required placeholder="Company Name" />
          </div>
          <div className="form-row">
            <input required placeholder="Phone / WhatsApp" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div className="form-row">
            <select defaultValue="">
              <option value="" disabled>Equipment Type</option>
              <option>Excavator</option>
              <option>Wheel Loader</option>
              <option>HDD Drilling Rig</option>
              <option>Crane</option>
              <option>Forklift</option>
              <option>Other Heavy Equipment</option>
            </select>
            <select defaultValue="">
              <option value="" disabled>Location (City)</option>
              {cities.map((city) => <option key={city}>{city}</option>)}
            </select>
          </div>
          <textarea required placeholder="Describe the issue briefly. What happened? Was it repaired before? What parts were replaced?" rows="5" />
          <button className="btn btn-primary form-btn" type="submit">Request Expert Diagnostics <Send size={16} /></button>
          <small>Repair works and parts quoted separately after diagnostics. Travel / site visit fee is separate.</small>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Logo />
        <p>Expert hydraulic diagnostics, heavy equipment field service, excavator hydraulic troubleshooting, HDD drilling rig diagnostics, hydraulic pump and valve diagnostics.</p>
        <p>Dubai, Sharjah, Ajman, Abu Dhabi, Jebel Ali, Al Quoz, Ras Al Khor, Dubai Investment Park and all UAE.</p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return <a className="floating-wa" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={26} /></a>;
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Customers />
        <Equipment />
        <FailedRepairs />
        <Process />
        <Pricing />
        <Cases />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
