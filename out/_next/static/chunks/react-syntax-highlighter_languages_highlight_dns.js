(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_dns"],{

/***/ "./node_modules/highlight.js/lib/languages/dns.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/dns.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: DNS Zone
Author: Tim Schumacher <tim@datenknoten.me>
Category: config
Website: https://en.wikipedia.org/wiki/Zone_file
*/

/** @type LanguageFn */
function dns(hljs) {
  return {
    name: 'DNS Zone',
    aliases: ['bind', 'zone'],
    keywords: {
      keyword:
        'IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX ' +
        'LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT'
    },
    contains: [
      hljs.COMMENT(';', '$', {relevance: 0}),
      {
        className: 'meta',
        begin: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/
      },
      // IPv6
      {
        className: 'number',
        begin: '((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b'
      },
      // IPv4
      {
        className: 'number',
        begin: '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b'
      },
      hljs.inherit(hljs.NUMBER_MODE, {begin: /\b\d+[dhwm]?/})
    ]
  };
}

module.exports = dns;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Rucy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscUJBQXFCLFNBQVMsYUFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLElBQUksR0FBRyxFQUFFLGFBQWEsSUFBSSxtQkFBbUIsSUFBSSxHQUFHLEVBQUUsY0FBYyxJQUFJLGtGQUFrRixFQUFFLG9CQUFvQixJQUFJLEdBQUcsRUFBRSxnQkFBZ0IsSUFBSSxFQUFFLElBQUksb0ZBQW9GLEVBQUUsb0JBQW9CLElBQUksR0FBRyxFQUFFLGdCQUFnQixJQUFJLEVBQUUsSUFBSSxpQkFBaUIsSUFBSSxvRkFBb0YsRUFBRSxxQkFBcUIsSUFBSSxHQUFHLEVBQUUsZ0JBQWdCLElBQUksRUFBRSxJQUFJLGlCQUFpQixJQUFJLEVBQUUsSUFBSSxrRkFBa0YsRUFBRSxxQkFBcUIsSUFBSSxHQUFHLEVBQUUsZ0JBQWdCLElBQUksRUFBRSxJQUFJLGlCQUFpQixJQUFJLEVBQUUsSUFBSSxrRkFBa0YsRUFBRSxxQkFBcUIsSUFBSSxHQUFHLEVBQUUsZ0JBQWdCLElBQUksRUFBRSxJQUFJLGlCQUFpQixJQUFJLEVBQUUsSUFBSSxrRkFBa0YsRUFBRSx5QkFBeUIsSUFBSSxFQUFFLElBQUksaUJBQWlCLElBQUksRUFBRSxJQUFJLGtGQUFrRixFQUFFO0FBQ2puQyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLElBQUksT0FBTyxJQUFJLFVBQVUsSUFBSSxtQkFBbUIsSUFBSSxPQUFPLElBQUk7QUFDbkcsT0FBTztBQUNQLHNDQUFzQyxzQkFBc0I7QUFDNUQ7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfZG5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBETlMgWm9uZVxuQXV0aG9yOiBUaW0gU2NodW1hY2hlciA8dGltQGRhdGVua25vdGVuLm1lPlxuQ2F0ZWdvcnk6IGNvbmZpZ1xuV2Vic2l0ZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvWm9uZV9maWxlXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gZG5zKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRE5TIFpvbmUnLFxuICAgIGFsaWFzZXM6IFsnYmluZCcsICd6b25lJ10sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdJTiBBIEFBQUEgQUZTREIgQVBMIENBQSBDRE5TS0VZIENEUyBDRVJUIENOQU1FIERIQ0lEIERMViBETkFNRSBETlNLRVkgRFMgSElQIElQU0VDS0VZIEtFWSBLWCAnICtcbiAgICAgICAgJ0xPQyBNWCBOQVBUUiBOUyBOU0VDIE5TRUMzIE5TRUMzUEFSQU0gUFRSIFJSU0lHIFJQIFNJRyBTT0EgU1JWIFNTSEZQIFRBIFRLRVkgVExTQSBUU0lHIFRYVCdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJzsnLCAnJCcsIHtyZWxldmFuY2U6IDB9KSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAvXlxcJChUVEx8R0VORVJBVEV8SU5DTFVERXxPUklHSU4pXFxiL1xuICAgICAgfSxcbiAgICAgIC8vIElQdjZcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICcoKChbMC05QS1GYS1mXXsxLDR9Oil7N30oWzAtOUEtRmEtZl17MSw0fXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7Nn0oOlswLTlBLUZhLWZdezEsNH18KCgyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldP1xcXFxkKShcXFxcLigyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldP1xcXFxkKSl7M30pfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXs1fSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDJ9KXw6KCgyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldP1xcXFxkKShcXFxcLigyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldP1xcXFxkKSl7M30pfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXs0fSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDN9KXwoKDpbMC05QS1GYS1mXXsxLDR9KT86KCgyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldP1xcXFxkKShcXFxcLigyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldP1xcXFxkKSl7M30pKXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7M30oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw0fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCwyfTooKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKFxcXFwuKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKXszfSkpfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXsyfSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDV9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDN9OigoMjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XT9cXFxcZCkoXFxcXC4oMjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XT9cXFxcZCkpezN9KSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezF9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsNn0pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsNH06KCgyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldP1xcXFxkKShcXFxcLigyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldP1xcXFxkKSl7M30pKXw6KSl8KDooKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw3fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCw1fTooKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKFxcXFwuKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKXszfSkpfDopKSlcXFxcYidcbiAgICAgIH0sXG4gICAgICAvLyBJUHY0XG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAnKCgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXC4pezMsM30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFxcXGInXG4gICAgICB9LFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuTlVNQkVSX01PREUsIHtiZWdpbjogL1xcYlxcZCtbZGh3bV0/L30pXG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRucztcbiJdLCJzb3VyY2VSb290IjoiIn0=