import { useEffect, useRef, useState } from 'react';

const links = [
  ['#vacatures', 'Vacatures'],
  ['#professionals', 'Voor professionals'],
  ['#organisaties', 'Voor organisaties'],
  ['#werkwijze', 'Werkwijze'],
  ['#over', 'Over mij'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="logo" aria-label="RecruitYa home">
          <span className="logo-mark">R</span>
          <span className="logo-text">Recruit<span>Ya</span></span>
        </a>
        <button
          ref={toggleRef}
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
        <nav
          id="site-nav"
          className={`site-nav${open ? ' open' : ''}`}
          aria-label="Hoofdmenu"
          onClick={(e) => e.target.closest('a') && setOpen(false)}
        >
          {links.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
          <a href="#contact" className="btn btn-dark nav-cta">Plan een kennismaking</a>
        </nav>
      </div>
    </header>
  );
}
