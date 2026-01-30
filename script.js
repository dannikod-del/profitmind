// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple lead capture (no backend yet)
// Saves email to localStorage + shows a success message.
// Next step we can connect Formspree or a real backend.
const form = document.getElementById("leadForm");
const msg = document.getElementById("formMsg");
const emailInput = document.getElementById("email");

function validEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = (emailInput.value || "").trim();

  if (!validEmail(email)) {
    msg.textContent = "Please enter a valid email.";
    return;
  }

  // Store locally (demo). For production we’ll send to a form endpoint.
  const leads = JSON.parse(localStorage.getItem("profitmind_leads") || "[]");
  leads.push({ email, ts: new Date().toISOString() });
  localStorage.setItem("profitmind_leads", JSON.stringify(leads));

  msg.textContent = "✅ Thanks! You’re on the early access list. We’ll email you soon.";
  emailInput.value = "";
});