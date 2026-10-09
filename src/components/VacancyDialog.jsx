import { useEffect, useRef } from 'react';
import { Close } from './Icons.jsx';

export default function VacancyDialog({ vacancy, onClose, onApply }) {
  const ref = useRef(null);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (vacancy && !dlg.open) dlg.showModal?.();
    if (!vacancy && dlg.open) dlg.close?.();
  }, [vacancy]);

  return (
    <dialog
      ref={ref}
      className="vac-dialog"
      aria-labelledby="vac-d-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {vacancy && (
        <>
          <button className="dialog-close" aria-label="Sluiten" onClick={onClose}><Close /></button>
          <p className="eyebrow">{vacancy.region} · {vacancy.type} · {vacancy.hours}</p>
          <h2 id="vac-d-title">{vacancy.title}</h2>
          <p>{vacancy.description}</p>
          <h3>Wat je meebrengt</h3>
          <ul className="checks">
            {vacancy.requirements.map((r) => <li key={r}>{r}</li>)}
          </ul>
          <button type="button" className="btn btn-accent" onClick={() => onApply(vacancy)}>
            Reageer op deze vacature
          </button>
        </>
      )}
    </dialog>
  );
}
