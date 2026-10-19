const menuButton=document.getElementById('menu-button');const nav=document.getElementById('topnav');menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));document.getElementById('year').textContent=new Date().getFullYear();

// Show a legible organisation monogram if an externally hosted logo cannot load.
document.querySelectorAll(".company-logo img").forEach((img) => {
  const fallback = img.nextElementSibling;
  const showFallback = () => { img.hidden = true; fallback?.classList.add("show"); };
  img.addEventListener("error", showFallback);
  if (img.complete && img.naturalWidth === 0) showFallback();
});
