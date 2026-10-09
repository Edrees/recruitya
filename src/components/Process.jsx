const steps = [
  ['Kennismaking', 'Een open gesprek over wat je zoekt, wie je bent en wat er écht nodig is.'],
  ['Zoeken', 'Gericht zoeken in mijn netwerk en daarbuiten, met een scherp profiel als kompas.'],
  ['Match', 'Alleen kandidaten en kansen die ik zelf zou aanraden. Ik begeleid elk gesprek.'],
  ['Nazorg', 'Ook na de start blijf ik betrokken, zodat de match een blijvertje wordt.'],
];

export default function Process() {
  return (
    <section id="werkwijze" className="section dark">
      <div className="wrap">
        <h2>Zo werk ik</h2>
        <ol className="steps">
          {steps.map(([title, text], i) => (
            <li key={title} className="reveal">
              <span>Stap {i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
