export default function TwoSides({ onContact }) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head center">
          <p className="eyebrow">Twee kanten van dezelfde match</p>
          <h2>Meer dan een match. Een stap vooruit.</h2>
        </div>
        <div className="grid-2">
          <div id="professionals" className="side side-light reveal">
            <h3>Voor professionals</h3>
            <p>
              Helderheid over wat bij je past en een recruiter die je eerlijk vertelt waar je staat.
              Geen massamails, wel persoonlijk contact.
            </p>
            <ul className="checks">
              <li>Werk dat écht bij je past</li>
              <li>Toegang tot niet-openbare vacatures</li>
              <li>Begeleiding tot en met je eerste werkdag</li>
            </ul>
            <a href="#vacatures" className="btn btn-dark">Bekijk vacatures</a>
          </div>
          <div id="organisaties" className="side side-dark reveal">
            <h3>Voor organisaties</h3>
            <p>Mensen die niet alleen geschikt zijn, maar ook blijven en groeien. Minder verloop, meer betrokkenheid.</p>
            <ul className="checks">
              <li>Duurzame, langdurige matches</li>
              <li>Een shortlist in plaats van een stapel cv's</li>
              <li>Transparant tarief, geen verrassingen</li>
            </ul>
            <a
              href="#contact"
              className="btn btn-sun"
              onClick={(e) => {
                e.preventDefault();
                onContact('werkgever');
              }}
            >
              Vacature uitbesteden
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
