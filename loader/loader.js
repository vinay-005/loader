function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'light' ? 'dark' : 'light');
}

function copyCode(id) {
  const codes = {
    1: `<div class="loader1">...</div>`, // Use full HTML+CSS as shown earlier if needed
    2: `<div class="loader2"></div>`,
    3: `<div class="loader3"><span></span><span></span><span></span></div>`,
    4: `<div class="loader4"></div>`,
    5: `<div class="loader5"></div>`,
    6: `<div class="loader6"></div>`,
    7: `<div class="loader7"></div>`,
    8: `<div class="loader8"></div>`
};

  const codeToCopy = codes[id];
  if (!codeToCopy) return;

  navigator.clipboard.writeText(codeToCopy).then(() => {
    const tooltip = document.getElementById(`tooltip${id}`);
    if (tooltip) {
      tooltip.classList.add('show');
      setTimeout(() => tooltip.classList.remove('show'), 1500);
    }
  }).catch(err => {
    console.error('Failed to copy code:', err);
    alert('Clipboard copy failed. Try using a secure connection (https://).');
  });
}
