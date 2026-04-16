
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('in-view');
  });
}, { threshold: 0.14 });
reveals.forEach(el => observer.observe(el));

const cookieBanner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
const cookieReject = document.getElementById('cookieReject');
const cookiePrefs = document.getElementById('cookiePrefs');

const hideBanner = () => {
  if (cookieBanner) cookieBanner.style.display = 'none';
};

if (localStorage.getItem('doggus_cookie_choice')) hideBanner();

[cookieAccept, cookieReject, cookiePrefs].forEach(btn => {
  if (!btn) return;
  btn.addEventListener('click', () => {
    localStorage.setItem('doggus_cookie_choice', btn.id);
    hideBanner();
  });
});
