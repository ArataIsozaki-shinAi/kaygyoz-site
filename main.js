// mobile menu toggle
var burger = document.getElementById('burger');
var mnav = document.getElementById('mnav');
if (burger && mnav) {
  burger.addEventListener('click', function () {
    mnav.style.display = (mnav.style.display === 'block') ? 'none' : 'block';
  });
  mnav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { mnav.style.display = 'none'; });
  });
}

// scroll reveal
var io = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

// contact form (no backend — show confirmation)
var form = document.getElementById('contactForm');
if (form) {
  // preselect inquiry type from ?type= query param
  try {
    var t = new URLSearchParams(window.location.search).get('type');
    var sel = document.getElementById('f-type');
    if (t && sel && sel.querySelector('option[value="' + t + '"]')) sel.value = t;
  } catch (err) { /* noop */ }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var done = document.getElementById('formDone');
    form.style.display = 'none';
    if (done) {
      done.classList.add('show');
      done.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });
}
