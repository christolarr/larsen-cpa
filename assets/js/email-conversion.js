/* Google Ads conversion: a click on any email (mailto:) link on the site.

   EMAIL_CONVERSION_LABEL is the label of the Google Ads conversion action
   "Email link click" in account 184-117-9990 (conversion ID AW-18481052703),
   read from that action's Tag setup (the part after the slash in send_to).
   While it is empty, this file sends nothing.

   One listener on the document covers every email link, including the one
   the contact form shows if a submission fails. The page is not held up:
   the hit goes out as a beacon and the mail app opens as normal. */
(function () {
  var EMAIL_CONVERSION_LABEL = '';
  if (!EMAIL_CONVERSION_LABEL) return;

  document.addEventListener('click', function (ev) {
    var t = ev.target;
    var link = t && t.closest ? t.closest('a[href^="mailto:"]') : null;
    if (!link || typeof window.gtag !== 'function') return;
    window.gtag('event', 'conversion', {
      send_to: 'AW-18481052703/' + EMAIL_CONVERSION_LABEL,
      transport_type: 'beacon'
    });
  }, true);
})();
