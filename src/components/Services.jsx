const services = [
  {
    title: 'Werving & selectie',
    text: 'Van functieprofiel tot getekend contract. Ik zoek, screen en selecteer kandidaten die passen bij de rol en het team.',
  },
  {
    title: 'Interim recruitment',
    text: 'Tijdelijk extra capaciteit in je HR- of recruitmentteam. Ik schuif aan, neem vacatures over en zet processen neer.',
  },
  {
    title: 'Loopbaanadvies',
    text: 'Voor professionals die hun volgende stap willen scherpstellen: richting, cv, sollicitatie en onderhandeling.',
  },
];

export default function Services() {
  return (
    <section id="diensten" className="section">
      <div className="wrap">
        <div className="section-head">
          <h2>Wat ik doe</h2>
          <p>Drie diensten, één doel: matches die op papier kloppen én in de praktijk werken.</p>
        </div>
        <div className="grid-3">
          {services.map((s, i) => (
            <article key={s.title} className="card reveal">
              <span className="card-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
