// Affiliate link click tracking
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href*="dpbolvw.net"], a[href*="kqzyfj.com"]').forEach(function(link) {
    link.addEventListener('click', function() {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'affiliate_click', {
          'link_url': this.href,
          'link_text': this.innerText,
          'page_location': window.location.href
        });
      }
    });
  });
});
