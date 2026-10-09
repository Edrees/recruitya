import { ImageIcon } from './Icons.jsx';

export default function About() {
  return (
    <section id="over" className="section">
      <div className="wrap split">
        <div className="photo-placeholder square sand">
          <ImageIcon />
          <span>[Sfeerfoto: recruiter aan het werk]</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Over mij</p>
          <h2>Hoi, ik ben [Naam].</h2>
          <p>[Korte introductie: achtergrond, aantal jaren in recruitment, sectoren en type functies waarin je gespecialiseerd bent.]</p>
          <p>
            Met RecruitYa werk ik als zelfstandig recruiter. Dat betekent korte lijnen, eerlijk advies
            en één persoon die jouw vraag van begin tot eind kent.
          </p>
          <a href="#contact" className="text-link">Plan een kennismaking →</a>
        </div>
      </div>
    </section>
  );
}
