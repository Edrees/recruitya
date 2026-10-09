// Vervang de placeholders door echte logo's, bijv. { name: 'Bedrijf', src: 'logos/bedrijf.svg' }
// (bestanden in public/logos/).
const logos = Array.from({ length: 6 }, (_, i) => ({ name: `[Logo ${i + 1}]`, src: null }));

export default function Logos() {
  return (
    <section className="logos-section">
      <div className="wrap">
        <h2 className="small-head">Organisaties die mij vertrouwen</h2>
        <ul className="logos">
          {logos.map((l) => (
            <li key={l.name}>
              {l.src ? <img src={`${import.meta.env.BASE_URL}${l.src}`} alt={l.name} /> : '[Logo]'}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
