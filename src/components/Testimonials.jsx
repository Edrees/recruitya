import { Quote } from './Icons.jsx';

const testimonials = [
  {
    quote: '[Quote van een geplaatste kandidaat over de begeleiding en het resultaat.]',
    name: '[Naam]',
    role: '[Functie, organisatie]',
  },
  {
    quote: '[Quote van een opdrachtgever over de samenwerking en de kwaliteit van de match.]',
    name: '[Naam]',
    role: '[HR-manager, organisatie]',
  },
];

export default function Testimonials() {
  return (
    <section className="section mint">
      <div className="wrap">
        <h2>Ervaringsverhalen</h2>
        <div className="grid-2">
          {testimonials.map((t) => (
            <figure key={t.quote} className="quote reveal">
              <Quote />
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="avatar" />
                <span><strong>{t.name}</strong><br /><small>{t.role}</small></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
