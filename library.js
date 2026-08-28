/* ============================================================
   Renders the question library on /what-is-relateful from the
   data in questions.js. Nothing about the layout is aware of
   any particular question, so the library grows by editing
   questions.js alone.

   URL behaviour:
     #the-practice   selects a topic
     #q-what-is-staying  selects that question's topic, opens
                         the card, and scrolls to it

   Note: questions.js still carries a `related` list per question. It is
   deliberately not rendered — the Related chips were removed from the card
   design. The data is kept so the feature can come back without rewriting it.
   ============================================================ */
(function () {
  var listEl  = document.getElementById('topic-list');
  var cardsEl = document.getElementById('cards');
  if (!listEl || !cardsEl || typeof TOPICS === 'undefined') return;

  var titleEl = document.getElementById('topic-title');
  var blurbEl = document.getElementById('topic-blurb');
  var countEl = document.getElementById('topic-count');
  var current = null;

  function byTopic(id) {
    return QUESTIONS.filter(function (q) { return q.topic === id; });
  }
  function find(id) {
    for (var i = 0; i < QUESTIONS.length; i++) if (QUESTIONS[i].id === id) return QUESTIONS[i];
    return null;
  }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ---------- topic buttons ---------- */
  TOPICS.forEach(function (t) {
    var b = document.createElement('button');
    b.className = 'topic-btn';
    b.type = 'button';
    b.setAttribute('role', 'tab');
    b.dataset.topic = t.id;
    b.innerHTML = '<span class="dot"></span>' + esc(t.label);
    b.addEventListener('click', function () { select(t.id, true); });
    listEl.appendChild(b);
  });

  /* ---------- one card ---------- */
  function card(q, n) {
    var el = document.createElement('article');
    el.className = 'qcard';
    el.id = 'q-' + q.id;

    var html = '<div class="body">' +
      '<span class="num" aria-hidden="true">' + (n < 10 ? '0' + n : n) + '</span>' +
      '<h3>' + esc(q.q) + '</h3>' +
      '<p class="short">' + esc(q.short) + '</p>';

    if (q.example) {
      html += '<div class="example"><span class="label">Example</span><p>' + esc(q.example) + '</p></div>';
    }
    html += '</div>';

    if (q.deep) {
      html += '<div class="deeper" hidden>' + q.deep + '</div>';
      html += '<button class="more" type="button" aria-expanded="false" aria-controls="q-' + q.id + '">' +
                '<span class="txt">Tell me more</span><span class="arrow" aria-hidden="true">→</span>' +
              '</button>';
    }

    el.innerHTML = html;

    var btn = el.querySelector('.more');
    if (btn) btn.addEventListener('click', function () { toggle(el, q); });
    return el;
  }

  function toggle(el, q, force) {
    var open = force === undefined ? !el.classList.contains('is-open') : force;
    el.classList.toggle('is-open', open);
    var panel = el.querySelector('.deeper');
    var btn = el.querySelector('.more');
    if (panel) panel.hidden = !open;
    if (btn) {
      btn.setAttribute('aria-expanded', String(open));
      btn.querySelector('.txt').textContent = open ? 'Show less' : 'Tell me more';
    }
  }

  /* ---------- render a topic ---------- */
  function select(topicId, pushHash) {
    var topic = null;
    TOPICS.forEach(function (t) { if (t.id === topicId) topic = t; });
    if (!topic) topic = TOPICS[0];
    current = topic.id;

    Array.prototype.forEach.call(listEl.children, function (b) {
      var on = b.dataset.topic === topic.id;
      b.setAttribute('aria-current', String(on));
      b.setAttribute('aria-selected', String(on));
    });

    var qs = byTopic(topic.id);
    titleEl.textContent = topic.label;
    blurbEl.textContent = topic.blurb;
    countEl.textContent = qs.length + (qs.length === 1 ? ' question' : ' questions');

    cardsEl.innerHTML = '';
    qs.forEach(function (q, i) { cardsEl.appendChild(card(q, i + 1)); });

    if (pushHash && history.replaceState) history.replaceState(null, '', '#' + topic.id);
  }

  function open(qid, scroll) {
    var q = find(qid);
    if (!q) return;
    if (q.topic !== current) select(q.topic, false);
    var el = document.getElementById('q-' + qid);
    if (!el) return;
    toggle(el, q, true);
    if (history.replaceState) history.replaceState(null, '', '#q-' + qid);
    if (scroll) {
      var y = el.getBoundingClientRect().top + window.pageYOffset - 92;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  /* ---------- boot from the URL ---------- */
  function fromHash(scroll) {
    var h = (location.hash || '').replace(/^#/, '');
    if (h.indexOf('q-') === 0 && find(h.slice(2))) {
      open(h.slice(2), scroll);
    } else {
      select(h || TOPICS[0].id, false);
    }
  }
  fromHash(false);
  window.addEventListener('hashchange', function () { fromHash(true); });
})();
