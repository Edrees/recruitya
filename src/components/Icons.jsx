const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const ArrowRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth="2.2" {...base}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const Check = ({ size = 22, strokeWidth = 2 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={strokeWidth} {...base}><path d="M20 6 9 17l-5-5" /></svg>
);
export const Person = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" strokeWidth="1.4" {...base}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" /></svg>
);
export const ImageIcon = () => (
  <svg width="56" height="56" viewBox="0 0 24 24" strokeWidth="1.4" {...base}><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="9" cy="11" r="2" /><path d="M21 17l-5-5-8 7" /></svg>
);
export const Target = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" {...base}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /></svg>
);
export const Cross = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" {...base}><path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="9" /></svg>
);
export const Trend = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" {...base}><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></svg>
);
export const Pin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" {...base}><path d="M12 21s-7-6.3-7-12a7 7 0 0 1 14 0c0 5.7-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></svg>
);
export const Clock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" {...base}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);
export const Close = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.2" {...base}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Quote = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.8" {...base}><path d="M10 7H6a2 2 0 0 0-2 2v3h5v5H4" /><path d="M20 7h-4a2 2 0 0 0-2 2v3h5v5h-5" /></svg>
);
