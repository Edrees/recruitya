export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="logo-text light">Recruit<span>Ya</span></span>
            <p>Zelfstandig senior recruiter. Persoonlijk, eerlijk en gericht op matches die blijven.</p>
          </div>
          <div className="footer-col">
            <strong>Snelle links</strong>
            <a href="#vacatures">Vacatures</a>
            <a href="#professionals">Voor professionals</a>
            <a href="#organisaties">Voor organisaties</a>
            <a href="#over">Over mij</a>
          </div>
          <div className="footer-col">
            <strong>Contact</strong>
            <span>[e-mailadres]</span>
            <span>[telefoonnummer]</span>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} RecruitYa · KvK [nummer]</span>
          <span>Privacy · Cookies</span>
        </div>
      </div>
    </footer>
  );
}
