
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const COOKIE_KEY = 'doggus_cookie_choice';
const banner = document.querySelector('[data-cookie-banner]');
const openCookieControls = document.querySelectorAll('[data-open-cookie], [data-cookie-settings]');
const cookieButtons = document.querySelectorAll('[data-cookie-action]');
function showCookieBanner() { if (banner) banner.hidden = false; }
function hideCookieBanner() { if (banner) banner.hidden = true; }
function setCookieChoice(value) { localStorage.setItem(COOKIE_KEY, value); hideCookieBanner(); }
if (banner) {
  const savedChoice = localStorage.getItem(COOKIE_KEY);
  if (!savedChoice) showCookieBanner();
  openCookieControls.forEach(link => {
    link.addEventListener('click', (event) => { event.preventDefault(); showCookieBanner(); });
  });
  cookieButtons.forEach(button => {
    button.addEventListener('click', () => setCookieChoice(button.dataset.cookieAction || 'decline'));
  });
}
