// Sends the contact form to a form service.
//
// GitHub Pages only serves static files, so the form posts to an external
// service that forwards the message by email. It is set up for Formspree
// (https://formspree.io), but any service that accepts a JSON POST works.
//
// Set the endpoint in .env.local (local) or as a repository variable
// VITE_CONTACT_ENDPOINT (GitHub Actions), e.g. https://formspree.io/f/abcdwxyz
//
// Without an endpoint the form runs in demo mode: it validates, waits briefly
// and shows the success message, but nothing is sent.

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

export const isDemoMode = !ENDPOINT;

export async function submitContact(data) {
  if (isDemoMode) {
    await new Promise((r) => setTimeout(r, 600));
    return { ok: true, demo: true };
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      ...data,
      _subject: `RecruitYa website: bericht van ${data.name} (${data.role})`,
    }),
  });

  if (!res.ok) {
    let message = 'Versturen is niet gelukt.';
    try {
      const body = await res.json();
      if (body?.errors?.length) message = body.errors.map((e) => e.message).join(' ');
    } catch {
      /* ignore */
    }
    throw new Error(message);
  }
  return { ok: true };
}
