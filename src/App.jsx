import React, { useState } from "react";
import {
  Activity,
  AudioLines,
  BookOpen,
  Braces,
  Check,
  CircleDot,
  CircuitBoard,
  Download,
  FileText,
  Github,
  Headset,
  Layers3,
  Linkedin,
  MessagesSquare,
  Mic,
  ScanLine,
  SlidersHorizontal,
  SquareTerminal,
  TicketCheck,
  Users,
} from "lucide-react";

const github = "https://github.com/MoeezSajjad";
const linkedin = "https://www.linkedin.com/in/moeez-sajjad-hashmi-a05ab0253";
const projectUrl = github + "/Smart-Meetings-Notes-Generator";
const appUrl = "https://moeezsajjad.github.io/Smart-Meetings-Notes-Generator/";
const demoUrl = appUrl + "#/sample";

const experience = [
  [
    "Tangent Technologies",
    "Customer Support / Technical Support",
    "Jun 2026 – Present",
    "I work across support channels, including email and chat. I document what the customer reports, update the ticket and keep the people involved informed when a case needs escalation.",
  ],
  [
    "Touchstone Communications",
    "Outbound Sales Representative",
    "Feb 2026 – Jun 2026",
    "I made outbound calls for a solar campaign, talked through customer questions and passed interested, qualified prospects to the client team.",
  ],
  [
    "Tribe Consulting",
    "Customer Support Executive",
    "Feb 2024 – Nov 2025",
    "On the Papa Johns USA campaign, I took inbound calls, processed orders and helped customers work through order issues.",
  ],
  [
    "Additional experience",
    "Customer Service Representative / Sales Closer",
    "",
    "I explained services, answered customer questions and supported sales conversations.",
  ],
];

const focus = [
  [
    Headset,
    "Technical support",
    "Customer issues, ticket documentation and follow-through.",
  ],
  [
    Users,
    "CRM operations",
    "A career interest built on customer communication and case follow-ups.",
  ],
  [
    CircuitBoard,
    "AI automation",
    "Exploring how transcripts become useful notes and action items.",
  ],
];

function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <AudioLines size={25} strokeWidth={2.8} />
    </span>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="shell flex flex-wrap items-center justify-between gap-4">
        <a className="brand flex items-center gap-3" href="#main">
          <Mark />
          Moeez Sajjad<span className="brand-period">.</span>
        </a>
        <nav
          className="flex flex-wrap items-center"
          aria-label="Main navigation"
        >
          <a href="#work">Project</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a className="nav-contact" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="intro">
          <div className="eyebrow">
            <Headset size={16} /> Customer &amp; technical support
          </div>
          <h1>
            Moeez Sajjad
            <br />
            <span>Hashmi.</span>
          </h1>
          <p>
            I help customers get answers and make sure the next person handling
            a ticket knows the whole story. At Tangent Technologies, that means
            documenting issues, coordinating escalations and following up.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a className="button primary" href="#work">
              <SquareTerminal size={17} />
              Explore my work
            </a>
            <a
              className="button secondary"
              href="./moeez-sajjad-cv.pdf"
              download
            >
              <Download size={17} />
              Download CV
            </a>
          </div>
        </div>
        <figure
          className="schematic"
          aria-label="Wireframe illustration of a support headset"
        >
          <div className="frame-label">
            <ScanLine size={15} /> Hardware schematic
          </div>
          <div className="scope" aria-hidden="true">
            <i />
            <i />
          </div>
          <img
            className="headset"
            src="./headset.webp"
            alt=""
            fetchPriority="high"
          />
          <figcaption>
            <span>
              <span className="little-line" />
              Support headset
            </span>
            <AudioLines size={24} />
          </figcaption>
        </figure>
      </section>
      <div className="focus-grid">
        {focus.map(([Icon, title, copy]) => (
          <article key={title}>
            <Icon size={22} />
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

function NotePreview() {
  const [showNotes, setShowNotes] = useState(false);
  return (
    <div className="preview">
      <div className="preview-header">
        <AudioLines size={18} />
        Meeting workspace<span>Example</span>
      </div>
      <div className="preview-body">
        <div className="audio-title">
          <span className="icon-box">
            <Mic size={19} />
          </span>
          <div>
            <strong>Support handover</strong>
            <small>Illustrative meeting excerpt</small>
          </div>
        </div>
        <div className="wave" aria-hidden="true">
          {Array.from({ length: 59 }, (_, i) => (
            <i
              key={i}
              style={{
                height:
                  14 +
                  80 * Math.abs(Math.sin(i * 1.9) * Math.cos(i * 0.16)) +
                  "%",
              }}
            />
          ))}
        </div>
        <div className="toggle" role="group" aria-label="Example view">
          {["Transcript", "Generated notes"].map((label, i) => (
            <button
              type="button"
              key={label}
              aria-pressed={showNotes === Boolean(i)}
              onClick={() => setShowNotes(Boolean(i))}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="sample" aria-live="polite">
          {showNotes ? (
            <>
              <strong>
                <Check size={16} /> Follow-up task
              </strong>
              <p>
                Review the ticket history and contact the customer with an
                update.
              </p>
            </>
          ) : (
            <>
              <strong>
                <MessagesSquare size={16} /> Transcript excerpt
              </strong>
              <p>
                “Let’s check the ticket history first. Once we know what’s been
                tried, we can follow up with the customer.”
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Project() {
  return (
    <section id="work" className="section">
      <div className="eyebrow">
        <Layers3 size={16} /> Selected project
      </div>
      <div className="project-grid">
        <div>
          <span className="status">
            <CircleDot size={13} />
            Live demo available
          </span>
          <h2 className="display">
            Smart Meetings
            <br />
            Notes Generator
          </h2>
          <p>
            After a meeting, I want to know what was decided and who needs to
            follow up. That’s the idea behind my final-year project.
          </p>
          <p>
            The app takes a recording, transcribes it with Whisper and uses a
            language model to pull out a summary, key points and action items.
          </p>
          <ul className="tags" aria-label="Project technologies">
            {["React", "Tailwind CSS", "Node.js", "Express", "Firebase", "Groq"].map(
              (x) => (
                <li key={x}>{x}</li>
              ),
            )}
          </ul>
          <p>Explore a fictional meeting without signing in. Live recording uploads are limited to authorized accounts.</p>
          <div className="flex flex-wrap gap-3">
            <a className="button primary" href={demoUrl}>View public demo</a>
            <a className="button secondary" href={appUrl}>Launch application</a>
            <a className="text-link" href={projectUrl}>
              <Github size={17} />
              View project source
            </a>
          </div>
        </div>
        <NotePreview />
      </div>
    </section>
  );
}

function Background() {
  return (
    <>
      <section className="section experience-grid" id="experience">
        <div>
          <div className="eyebrow">
            <TicketCheck size={16} /> Professional background
          </div>
          <h2 className="display">Experience</h2>
        </div>
        <div className="timeline">
          {experience.map(([company, role, date, copy]) => (
            <article key={company}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3>{company}</h3>
                {date && <span className="date">{date}</span>}
              </div>
              <h4>{role}</h4>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section skill-grid" id="skills">
        <div>
          <div className="eyebrow">
            <SlidersHorizontal size={16} /> Toolkit
          </div>
          <h2 className="display">Skills</h2>
          <h3>
            <MessagesSquare size={17} />
            Customer operations
          </h3>
          <p>
            Inbound calls, email and chat support, order processing, ticket
            updates, escalations, follow-ups and objection handling.
          </p>
          <h3>
            <Braces size={17} />
            Technical foundations
          </h3>
          <p>
            HTML, CSS, JavaScript, React and Tailwind CSS. I’m also developing
            my knowledge of databases, prompt engineering, language models and
            chatbots.
          </p>
        </div>
        <div>
          <div className="eyebrow">
            <BookOpen size={16} /> Academic background
          </div>
          <h2 className="display">Education</h2>
          <h3>Web Development &amp; Design</h3>
          <p>Associate Degree Program · Hamdard University, Islamabad</p>
          <p>
            Coursework covered front-end development, databases, programming
            fundamentals, object-oriented programming and data structures.
          </p>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Header />
      <main id="main" className="shell">
        <Hero />
        <Project />
        <Background />
        <section className="contact section" id="contact">
          <div>
            <div className="eyebrow">
              <Activity size={16} /> Contact
            </div>
            <h2 className="display">Get in touch.</h2>
            <p>
              I’m looking for international technical support, CRM and
              entry-level AI automation roles. You can reach me on LinkedIn.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="button primary" href={linkedin}>
              <Linkedin size={17} />
              LinkedIn
            </a>
            <a className="button secondary" href={github}>
              <Github size={17} />
              GitHub
            </a>
          </div>
        </section>
      </main>
      <footer className="shell flex items-center justify-between">
        <span>Moeez Sajjad Hashmi</span>
        <a href="#main">Back to top</a>
      </footer>
    </>
  );
}
