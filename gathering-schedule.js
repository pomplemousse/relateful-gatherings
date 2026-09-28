/* ============================================================
   Computes the next gathering date so it never goes stale.
   Gatherings run every other Tuesday, anchored to the very
   first one: Tuesday, September 15, 2026. Change ANCHOR below
   if the schedule ever moves to a different day or cadence —
   everything else derives from it.

   Usage: put the literal token {{NEXT_GATHERING}} anywhere in
   a page's text (or in a questions.js field), and it gets
   swapped for something like "Tuesday, October 13" once this
   script runs. Static HTML gets filled automatically on load;
   content that's rendered later by other scripts (like the
   question-library cards) needs those scripts to call
   RelatefulSchedule.fillPlaceholders(root) themselves after
   they render — see library.js for the example.
   ============================================================ */
(function (window, document) {
  var ANCHOR = new Date(2026, 8, 15); // Sept 15, 2026 — the first gathering
  var CYCLE_DAYS = 14; // every OTHER Tuesday, not every Tuesday
  var MS_PER_DAY = 24 * 60 * 60 * 1000;
  var TOKEN = '{{NEXT_GATHERING}}';

  function startOfDay(d) {
    var x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
  }

  // Returns a Date for the next gathering on/after `from` (defaults to today).
  function nextGatheringDate(from) {
    var anchor = startOfDay(ANCHOR);
    from = startOfDay(from || new Date());
    if (from <= anchor) return anchor;

    var daysSince = Math.round((from - anchor) / MS_PER_DAY);
    var cyclesElapsed = Math.floor(daysSince / CYCLE_DAYS);
    var candidate = new Date(anchor.getTime() + cyclesElapsed * CYCLE_DAYS * MS_PER_DAY);
    if (candidate < from) {
      candidate = new Date(candidate.getTime() + CYCLE_DAYS * MS_PER_DAY);
    }
    return candidate;
  }

  // "Tuesday, October 13"
  function formatLong(date) {
    return date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
  }

  // Walks text nodes under `root` and swaps the token for the real date.
  // Text nodes only (not innerHTML) so it never disturbs existing elements,
  // attached event listeners, or markup.
  function fillPlaceholders(root) {
    root = root || document.body;
    if (!root) return;
    var label = formatLong(nextGatheringDate());
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.indexOf(TOKEN) !== -1) {
        node.nodeValue = node.nodeValue.split(TOKEN).join(label);
      }
    }
  }

  window.RelatefulSchedule = {
    nextGatheringDate: nextGatheringDate,
    formatLong: formatLong,
    fillPlaceholders: fillPlaceholders
  };

  // Fills in whatever's already on the page at the point this script runs.
  // Content added later by other scripts (e.g. the question library
  // re-rendering cards) needs to call fillPlaceholders itself afterward.
  fillPlaceholders(document.body);
})(window, document);
