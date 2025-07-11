// script.js

// Smooth fade-in sections on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".section, .quality-section, .stats-section, .why-choose-us").forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

// Simple contact form handler (will POST to backend)
const form = document.querySelector("form");
form?.addEventListener("submit", async e => {
  e.preventDefault();
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (res.ok) alert("Message sent!"); else alert("Failed to send.");
    form.reset();
  } catch {
    alert("Network error.");
  }
});


