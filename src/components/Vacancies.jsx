import { useMemo, useState } from 'react';
import { vacancies } from '../data/vacancies.js';
import VacancyDialog from './VacancyDialog.jsx';
import { ArrowRight, Clock, Pin } from './Icons.jsx';

const uniqueSorted = (key) => [...new Set(vacancies.map((v) => v[key]))].sort();

export default function Vacancies({ onContact }) {
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('');
  const [type, setType] = useState('');
  const [selected, setSelected] = useState(null);

  const regions = useMemo(() => uniqueSorted('region'), []);
  const types = useMemo(() => uniqueSorted('type'), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return vacancies.filter((v) => {
      const text = `${v.title} ${v.description} ${v.region} ${v.type}`.toLowerCase();
      return (!q || text.includes(q)) && (!region || v.region === region) && (!type || v.type === type);
    });
  }, [query, region, type]);

  return (
    <section id="vacatures" className="section">
      <div className="wrap">
        <div className="section-head">
          <h2>Actuele vacatures</h2>
          <p><span id="vac-count">{results.length}</span> openstaande functies</p>
        </div>

        <form className="vac-filters" role="search" aria-label="Vacatures filteren" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <label htmlFor="vac-search">Zoeken</label>
            <input id="vac-search" type="search" placeholder="Functie of trefwoord" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="vac-region">Regio</label>
            <select id="vac-region" value={region} onChange={(e) => setRegion(e.target.value)}>
              <option value="">Alle regio's</option>
              {regions.map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div className="field">
            <label htmlFor="vac-type">Type</label>
            <select id="vac-type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">Alle types</option>
              {types.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </form>

        <ul className="vac-list" aria-live="polite">
          {results.map((v) => (
            <li key={v.id} className="vac-item">
              <button type="button" onClick={() => setSelected(v)}>
                <span className="vac-title">{v.title}</span>
                <span className="vac-meta"><Pin />{v.region}</span>
                <span className="vac-meta"><Clock />{v.type} · {v.hours}</span>
                <span className="vac-arrow"><ArrowRight /></span>
              </button>
            </li>
          ))}
        </ul>
        {results.length === 0 && <p className="vac-empty">Geen vacatures gevonden met deze filters.</p>}

        <div className="open-app">
          <span>Niet de juiste vacature gevonden? Veel functies vul ik in voordat ze online staan.</span>
          <a
            href="#contact"
            className="btn btn-dark"
            onClick={(e) => {
              e.preventDefault();
              onContact('professional', 'Open sollicitatie: ');
            }}
          >
            Open sollicitatie
          </a>
        </div>
      </div>

      <VacancyDialog
        vacancy={selected}
        onClose={() => setSelected(null)}
        onApply={(v) => {
          setSelected(null);
          onContact('professional', `Ik wil graag reageren op de vacature: ${v.title}`);
        }}
      />
    </section>
  );
}
