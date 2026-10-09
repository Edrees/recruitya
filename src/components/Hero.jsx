import { ArrowRight, Check, Cross, Person, Target, Trend } from './Icons.jsx';

const usps = [
  [Target, 'Eén vast aanspreekpunt, van intake tot start'],
  [Cross, 'Matches op vakmanschap én cultuur'],
  [Trend, 'Gericht op lange samenwerkingen'],
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap split">
        <div className="hero-copy">
          <p className="eyebrow">Freelance senior recruiter</p>
          <h1>De juiste mens op de juiste plek. Persoonlijk geregeld.</h1>
          <p className="lead">
            RecruitYa verbindt professionals en organisaties op meer dan een cv: op ervaring,
            drijfveren en wat iemand nodig heeft om te blijven en te groeien.
          </p>
          <div className="btn-row">
            <a href="#vacatures" className="btn btn-accent">Bekijk vacatures <ArrowRight /></a>
            <a href="#organisaties" className="btn btn-outline">Ik zoek talent</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-placeholder tall">
            <Person />
            <span>[Portretfoto recruiter]</span>
          </div>
          <div className="float-card">
            <span className="check-dot"><Check /></span>
            <span><strong>[X] jaar</strong> ervaring in werving &amp; selectie</span>
          </div>
        </div>
      </div>

      <div className="wrap">
        <ul className="usp-bar">
          {usps.map(([Icon, text]) => (
            <li key={text}>
              <span className="usp-icon"><Icon /></span>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
