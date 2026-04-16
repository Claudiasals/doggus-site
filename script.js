
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.14 });

reveals.forEach(el => io.observe(el));

const banner = document.getElementById('cookieBanner');
const accept = document.getElementById('cookieAccept');
const reject = document.getElementById('cookieReject');
const prefs = document.getElementById('cookiePrefs');

const hideBanner = () => {
  if (banner) banner.style.display = 'none';
};

if (localStorage.getItem('doggus_cookie_choice')) hideBanner();

[accept, reject, prefs].forEach(btn => {
  if (!btn) return;
  btn.addEventListener('click', () => {
    localStorage.setItem('doggus_cookie_choice', btn.id);
    hideBanner();
  });
});
