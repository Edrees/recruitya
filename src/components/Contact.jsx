import { useEffect, useRef, useState } from 'react';
import { Check } from './Icons.jsx';
import { isDemoMode, submitContact } from '../lib/submitContact.js';

const empty = { role: 'professional', name: '', company: '', email: '', phone: '', message: '', website: '' };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Vul je naam in.';
  if (v.role === 'werkgever' && !v.company.trim()) e.company = 'Vul je organisatie in.';
  if (!v.email.trim()) e.email = 'Vul je e-mailadres in.';
  else if (!emailRe.test(v.email.trim())) e.email = 'Dit e-mailadres lijkt niet te kloppen.';
  if (!v.message.trim()) e.message = 'Schrijf een kort bericht.';
  return e;
}

const order = ['name', 'company', 'email', 'message'];

export default function Contact({ prefill }) {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [serverError, setServerError] = useState('');
  const refs = useRef({});
  const successRef = useRef(null);

  // Apply prefill coming from buttons elsewhere on the page
  useEffect(() => {
    if (!prefill.key) return;
    setStatus('idle');
    setValues((v) => ({ ...v, role: prefill.role, message: prefill.message || v.message }));
  }, [prefill]);

  useEffect(() => {
    if (status === 'sent') successRef.current?.focus();
  }, [status]);

  const set = (field) => (e) => {
    const value = e.target.value;
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    const first = order.find((f) => errs[f]);
    if (first) {
      refs.current[first]?.focus();
      return;
    }
    // Honeypot: bots fill the hidden "website" field
    if (values.website) {
      setStatus('sent');
      return;
    }
    setStatus('sending');
    setServerError('');
    try {
      const { website, ...payload } = values;
      if (payload.role !== 'werkgever') delete payload.company;
      await submitContact(payload);
      setStatus('sent');
    } catch (err) {
      setServerError(err.message || 'Versturen is niet gelukt. Probeer het later opnieuw.');
      setStatus('error');
    }
  }

  function reset() {
    setValues(empty);
    setErrors({});
    setStatus('idle');
    setTimeout(() => refs.current.name?.focus(), 0);
  }

  const field = (name, label, props = {}, optional = false) => (
    <div className={`field${errors[name] ? ' invalid' : ''}`}>
      <label htmlFor={`cf-${name}`}>
        {label} {optional && <small>(optioneel)</small>}
      </label>
      {props.as === 'textarea' ? (
        <textarea
          id={`cf-${name}`}
          name={name}
          rows={4}
          ref={(el) => (refs.current[name] = el)}
          value={values[name]}
          onChange={set(name)}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `cf-${name}-err` : undefined}
        />
      ) : (
        <input
          id={`cf-${name}`}
          name={name}
          ref={(el) => (refs.current[name] = el)}
          value={values[name]}
          onChange={set(name)}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? `cf-${name}-err` : undefined}
          {...props}
        />
      )}
      {errors[name] && <span id={`cf-${name}-err`} className="error">{errors[name]}</span>}
    </div>
  );

  const firstName = values.name.trim().split(' ')[0];

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <div className="contact-card">
          <div className="contact-intro">
            <h2>Zet vandaag de eerste stap.</h2>
            <p>
              Op zoek naar werk dat bij je past, of naar iemand die jouw team versterkt? Plan
              vrijblijvend een kennismaking van 20 minuten.
            </p>
            <ul className="contact-lines">
              <li>[e-mailadres]</li>
              <li>[telefoonnummer]</li>
            </ul>
          </div>

          {status === 'sent' ? (
            <div className="form-success" ref={successRef} tabIndex={-1}>
              <span className="check-dot big"><Check size={28} strokeWidth={2.2} /></span>
              <h3>Bedankt{firstName ? `, ${firstName}` : ''}!</h3>
              <p>Je bericht is ontvangen. Ik neem binnen twee werkdagen contact met je op.</p>
              <button type="button" className="btn btn-outline-light" onClick={reset}>Nog een bericht sturen</button>
            </div>
          ) : (
            <form id="contact-form" className="contact-form" noValidate onSubmit={onSubmit}>
              <fieldset className="role-switch">
                <legend>Ik ben</legend>
                {[['professional', 'Professional'], ['werkgever', 'Werkgever']].map(([val, label]) => (
                  <label key={val}>
                    <input type="radio" name="role" value={val} checked={values.role === val} onChange={set('role')} />
                    {' '}{label}
                  </label>
                ))}
              </fieldset>

              {field('name', 'Naam', { type: 'text', autoComplete: 'name' })}
              {values.role === 'werkgever' && field('company', 'Organisatie', { type: 'text', autoComplete: 'organization' })}
              {field('email', 'E-mail', { type: 'email', autoComplete: 'email' })}
              {field('phone', 'Telefoon', { type: 'tel', autoComplete: 'tel' }, true)}
              {field('message', 'Bericht', { as: 'textarea' })}

              {/* Honeypot against spam bots – hidden from people */}
              <div className="hp" aria-hidden="true">
                <label htmlFor="cf-website">Website</label>
                <input id="cf-website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
              </div>

              {status === 'error' && <p className="form-error" role="alert">{serverError}</p>}

              <button type="submit" className="btn btn-dark btn-block" disabled={status === 'sending'}>
                {status === 'sending' ? 'Versturen…' : 'Verstuur bericht'}
              </button>
              {isDemoMode && <p className="form-note">Demo-modus: berichten worden nog niet verstuurd.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
