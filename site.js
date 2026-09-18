// Keep navigation and content usable without JavaScript.
document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    link.closest("details").open = false;
  });
});

// Open evidence panels reached through a direct link.
function openLinkedEvidence() {
  const panel = document.getElementById(location.hash.slice(1));
  if (panel?.matches("details.evidence-item")) panel.open = true;
}
openLinkedEvidence();
window.addEventListener("hashchange", openLinkedEvidence);

document.querySelectorAll("[data-interest]").forEach((link) => {
  link.addEventListener("click", () => {
    const interest = document.getElementById("interest");
    if (interest) interest.value = link.dataset.interest;
  });
});

const draft = document.getElementById("email-draft");
const emailLink = document.querySelector(".email-actions a");
if (draft && emailLink) {
  const initialHref = emailLink.getAttribute("href");
  const prefix = initialHref.slice(0, initialHref.indexOf("&body=") + 6);
  draft.addEventListener("input", () => {
    emailLink.href = prefix + encodeURIComponent(draft.value);
  });
  const copyButton = document.getElementById("copy-email");
  const status = document.getElementById("copy-status");
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(draft.value);
      status.textContent = "Message copied. Paste it into your email app.";
    } catch {
      draft.focus();
      draft.select();
      status.textContent = "Text selected. Use your device’s Copy command.";
    }
  });
}

// Expand the evidence for printing, then restore the reader’s panels.
let printPanels = [];
window.addEventListener("beforeprint", () => {
  printPanels = [...document.querySelectorAll(".evidence-item")].map(
    (panel) => [panel, panel.open],
  );
  printPanels.forEach(([panel]) => {
    panel.open = true;
  });
});
window.addEventListener("afterprint", () => {
  printPanels.forEach(([panel, wasOpen]) => {
    panel.open = wasOpen;
  });
});
