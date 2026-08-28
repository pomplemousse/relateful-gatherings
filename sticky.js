/* Shared sticky-CTA behaviour for every public page.
   The bar appears once the hero has scrolled out of view, and hides
   again over any section that already carries the same call to action
   (the RSVP box on /gatherings), so the two never stack up. */
(function () {
  var bar = document.getElementById('stickybar');
  if (!bar) return;

  var hero = document.getElementById('top');

  if (hero) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        bar.classList.toggle('show', !entry.isIntersecting);
      });
    }, { threshold: 0 }).observe(hero);
  } else {
    /* Pages with no hero band (the question library) have nothing to scroll
       past, so fall back to a plain scroll threshold. */
    var show = function () { bar.classList.toggle('show', window.scrollY > 420); };
    window.addEventListener('scroll', show, { passive: true });
    show();
    return;
  }

  var rsvp = document.getElementById('rsvp');
  if (!rsvp) return;

  new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        bar.classList.remove('show');
      } else if (window.scrollY > hero.offsetHeight) {
        bar.classList.add('show');
      }
    });
  }, { threshold: 0.6 }).observe(rsvp);
})();
