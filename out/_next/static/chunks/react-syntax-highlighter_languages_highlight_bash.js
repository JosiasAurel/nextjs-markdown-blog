(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_bash"],{

/***/ "./node_modules/highlight.js/lib/languages/bash.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/bash.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Bash
Author: vah <vahtenberg@gmail.com>
Contributrors: Benjamin Pannell <contact@sierrasoftworks.com>
Website: https://www.gnu.org/software/bash/
Category: common
*/

/** @type LanguageFn */
function bash(hljs) {
  const VAR = {};
  const BRACED_VAR = {
    begin: /\$\{/,
    end:/\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [ VAR ]
      } // default values
    ]
  };
  Object.assign(VAR,{
    className: 'variable',
    variants: [
      {begin: /\$[\w\d#@][\w\d_]*/},
      BRACED_VAR
    ]
  });

  const SUBST = {
    className: 'subst',
    begin: /\$\(/, end: /\)/,
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  const HERE_DOC = {
    begin: /<<-?\s*(?=\w+)/,
    starts: {
      contains: [
        hljs.END_SAME_AS_BEGIN({
          begin: /(\w+)/,
          end: /(\w+)/,
          className: 'string'
        })
      ]
    }
  };
  const QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      SUBST
    ]
  };
  SUBST.contains.push(QUOTE_STRING);
  const ESCAPED_QUOTE = {
    className: '',
    begin: /\\"/

  };
  const APOS_STRING = {
    className: 'string',
    begin: /'/, end: /'/
  };
  const ARITHMETIC = {
    begin: /\$\(\(/,
    end: /\)\)/,
    contains: [
      { begin: /\d+#[0-9a-f]+/, className: "number" },
      hljs.NUMBER_MODE,
      VAR
    ]
  };
  const SH_LIKE_SHELLS = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh",
  ];
  const KNOWN_SHEBANG = hljs.SHEBANG({
    binary: `(${SH_LIKE_SHELLS.join("|")})`,
    relevance: 10
  });
  const FUNCTION = {
    className: 'function',
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: true,
    contains: [hljs.inherit(hljs.TITLE_MODE, {begin: /\w[\w\d_]*/})],
    relevance: 0
  };

  return {
    name: 'Bash',
    aliases: ['sh', 'zsh'],
    keywords: {
      $pattern: /\b[a-z._-]+\b/,
      keyword:
        'if then else elif fi for while in do done case esac function',
      literal:
        'true false',
      built_in:
        // Shell built-ins
        // http://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        'break cd continue eval exec exit export getopts hash pwd readonly return shift test times ' +
        'trap umask unset ' +
        // Bash built-ins
        'alias bind builtin caller command declare echo enable help let local logout mapfile printf ' +
        'read readarray source type typeset ulimit unalias ' +
        // Shell modifiers
        'set shopt ' +
        // Zsh built-ins
        'autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles ' +
        'compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate ' +
        'fc fg float functions getcap getln history integer jobs kill limit log noglob popd print ' +
        'pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit ' +
        'unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof ' +
        'zpty zregexparse zsocket zstyle ztcp'
    },
    contains: [
      KNOWN_SHEBANG, // to catch known shells and boost relevancy
      hljs.SHEBANG(), // to catch unknown shells but still highlight the shebang
      FUNCTION,
      ARITHMETIC,
      hljs.HASH_COMMENT_MODE,
      HERE_DOC,
      QUOTE_STRING,
      ESCAPED_QUOTE,
      APOS_STRING,
      VAR
    ]
  };
}

module.exports = bash;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Jhc2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNEJBQTRCO0FBQ25DO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sOENBQThDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsOENBQThDLG9CQUFvQjtBQUNsRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2Jhc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IEJhc2hcbkF1dGhvcjogdmFoIDx2YWh0ZW5iZXJnQGdtYWlsLmNvbT5cbkNvbnRyaWJ1dHJvcnM6IEJlbmphbWluIFBhbm5lbGwgPGNvbnRhY3RAc2llcnJhc29mdHdvcmtzLmNvbT5cbldlYnNpdGU6IGh0dHBzOi8vd3d3LmdudS5vcmcvc29mdHdhcmUvYmFzaC9cbkNhdGVnb3J5OiBjb21tb25cbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBiYXNoKGhsanMpIHtcbiAgY29uc3QgVkFSID0ge307XG4gIGNvbnN0IEJSQUNFRF9WQVIgPSB7XG4gICAgYmVnaW46IC9cXCRcXHsvLFxuICAgIGVuZDovXFx9LyxcbiAgICBjb250YWluczogW1xuICAgICAgXCJzZWxmXCIsXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvOi0vLFxuICAgICAgICBjb250YWluczogWyBWQVIgXVxuICAgICAgfSAvLyBkZWZhdWx0IHZhbHVlc1xuICAgIF1cbiAgfTtcbiAgT2JqZWN0LmFzc2lnbihWQVIse1xuICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge2JlZ2luOiAvXFwkW1xcd1xcZCNAXVtcXHdcXGRfXSovfSxcbiAgICAgIEJSQUNFRF9WQVJcbiAgICBdXG4gIH0pO1xuXG4gIGNvbnN0IFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogL1xcJFxcKC8sIGVuZDogL1xcKS8sXG4gICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gIH07XG4gIGNvbnN0IEhFUkVfRE9DID0ge1xuICAgIGJlZ2luOiAvPDwtP1xccyooPz1cXHcrKS8sXG4gICAgc3RhcnRzOiB7XG4gICAgICBjb250YWluczogW1xuICAgICAgICBobGpzLkVORF9TQU1FX0FTX0JFR0lOKHtcbiAgICAgICAgICBiZWdpbjogLyhcXHcrKS8sXG4gICAgICAgICAgZW5kOiAvKFxcdyspLyxcbiAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnXG4gICAgICAgIH0pXG4gICAgICBdXG4gICAgfVxuICB9O1xuICBjb25zdCBRVU9URV9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogL1wiLywgZW5kOiAvXCIvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICBWQVIsXG4gICAgICBTVUJTVFxuICAgIF1cbiAgfTtcbiAgU1VCU1QuY29udGFpbnMucHVzaChRVU9URV9TVFJJTkcpO1xuICBjb25zdCBFU0NBUEVEX1FVT1RFID0ge1xuICAgIGNsYXNzTmFtZTogJycsXG4gICAgYmVnaW46IC9cXFxcXCIvXG5cbiAgfTtcbiAgY29uc3QgQVBPU19TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogLycvLCBlbmQ6IC8nL1xuICB9O1xuICBjb25zdCBBUklUSE1FVElDID0ge1xuICAgIGJlZ2luOiAvXFwkXFwoXFwoLyxcbiAgICBlbmQ6IC9cXClcXCkvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7IGJlZ2luOiAvXFxkKyNbMC05YS1mXSsvLCBjbGFzc05hbWU6IFwibnVtYmVyXCIgfSxcbiAgICAgIGhsanMuTlVNQkVSX01PREUsXG4gICAgICBWQVJcbiAgICBdXG4gIH07XG4gIGNvbnN0IFNIX0xJS0VfU0hFTExTID0gW1xuICAgIFwiZmlzaFwiLFxuICAgIFwiYmFzaFwiLFxuICAgIFwienNoXCIsXG4gICAgXCJzaFwiLFxuICAgIFwiY3NoXCIsXG4gICAgXCJrc2hcIixcbiAgICBcInRjc2hcIixcbiAgICBcImRhc2hcIixcbiAgICBcInNjc2hcIixcbiAgXTtcbiAgY29uc3QgS05PV05fU0hFQkFORyA9IGhsanMuU0hFQkFORyh7XG4gICAgYmluYXJ5OiBgKCR7U0hfTElLRV9TSEVMTFMuam9pbihcInxcIil9KWAsXG4gICAgcmVsZXZhbmNlOiAxMFxuICB9KTtcbiAgY29uc3QgRlVOQ1RJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIGJlZ2luOiAvXFx3W1xcd1xcZF9dKlxccypcXChcXHMqXFwpXFxzKlxcey8sXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgY29udGFpbnM6IFtobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7YmVnaW46IC9cXHdbXFx3XFxkX10qL30pXSxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdCYXNoJyxcbiAgICBhbGlhc2VzOiBbJ3NoJywgJ3pzaCddLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAkcGF0dGVybjogL1xcYlthLXouXy1dK1xcYi8sXG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnaWYgdGhlbiBlbHNlIGVsaWYgZmkgZm9yIHdoaWxlIGluIGRvIGRvbmUgY2FzZSBlc2FjIGZ1bmN0aW9uJyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICd0cnVlIGZhbHNlJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAvLyBTaGVsbCBidWlsdC1pbnNcbiAgICAgICAgLy8gaHR0cDovL3d3dy5nbnUub3JnL3NvZnR3YXJlL2Jhc2gvbWFudWFsL2h0bWxfbm9kZS9TaGVsbC1CdWlsdGluLUNvbW1hbmRzLmh0bWxcbiAgICAgICAgJ2JyZWFrIGNkIGNvbnRpbnVlIGV2YWwgZXhlYyBleGl0IGV4cG9ydCBnZXRvcHRzIGhhc2ggcHdkIHJlYWRvbmx5IHJldHVybiBzaGlmdCB0ZXN0IHRpbWVzICcgK1xuICAgICAgICAndHJhcCB1bWFzayB1bnNldCAnICtcbiAgICAgICAgLy8gQmFzaCBidWlsdC1pbnNcbiAgICAgICAgJ2FsaWFzIGJpbmQgYnVpbHRpbiBjYWxsZXIgY29tbWFuZCBkZWNsYXJlIGVjaG8gZW5hYmxlIGhlbHAgbGV0IGxvY2FsIGxvZ291dCBtYXBmaWxlIHByaW50ZiAnICtcbiAgICAgICAgJ3JlYWQgcmVhZGFycmF5IHNvdXJjZSB0eXBlIHR5cGVzZXQgdWxpbWl0IHVuYWxpYXMgJyArXG4gICAgICAgIC8vIFNoZWxsIG1vZGlmaWVyc1xuICAgICAgICAnc2V0IHNob3B0ICcgK1xuICAgICAgICAvLyBac2ggYnVpbHQtaW5zXG4gICAgICAgICdhdXRvbG9hZCBiZyBiaW5ka2V5IGJ5ZSBjYXAgY2hkaXIgY2xvbmUgY29tcGFyZ3VtZW50cyBjb21wY2FsbCBjb21wY3RsIGNvbXBkZXNjcmliZSBjb21wZmlsZXMgJyArXG4gICAgICAgICdjb21wZ3JvdXBzIGNvbXBxdW90ZSBjb21wdGFncyBjb21wdHJ5IGNvbXB2YWx1ZXMgZGlycyBkaXNhYmxlIGRpc293biBlY2hvdGMgZWNob3RpIGVtdWxhdGUgJyArXG4gICAgICAgICdmYyBmZyBmbG9hdCBmdW5jdGlvbnMgZ2V0Y2FwIGdldGxuIGhpc3RvcnkgaW50ZWdlciBqb2JzIGtpbGwgbGltaXQgbG9nIG5vZ2xvYiBwb3BkIHByaW50ICcgK1xuICAgICAgICAncHVzaGQgcHVzaGxuIHJlaGFzaCBzY2hlZCBzZXRjYXAgc2V0b3B0IHN0YXQgc3VzcGVuZCB0dHljdGwgdW5mdW5jdGlvbiB1bmhhc2ggdW5saW1pdCAnICtcbiAgICAgICAgJ3Vuc2V0b3B0IHZhcmVkIHdhaXQgd2hlbmNlIHdoZXJlIHdoaWNoIHpjb21waWxlIHpmb3JtYXQgemZ0cCB6bGUgem1vZGxvYWQgenBhcnNlb3B0cyB6cHJvZiAnICtcbiAgICAgICAgJ3pwdHkgenJlZ2V4cGFyc2UgenNvY2tldCB6c3R5bGUgenRjcCdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBLTk9XTl9TSEVCQU5HLCAvLyB0byBjYXRjaCBrbm93biBzaGVsbHMgYW5kIGJvb3N0IHJlbGV2YW5jeVxuICAgICAgaGxqcy5TSEVCQU5HKCksIC8vIHRvIGNhdGNoIHVua25vd24gc2hlbGxzIGJ1dCBzdGlsbCBoaWdobGlnaHQgdGhlIHNoZWJhbmdcbiAgICAgIEZVTkNUSU9OLFxuICAgICAgQVJJVEhNRVRJQyxcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICBIRVJFX0RPQyxcbiAgICAgIFFVT1RFX1NUUklORyxcbiAgICAgIEVTQ0FQRURfUVVPVEUsXG4gICAgICBBUE9TX1NUUklORyxcbiAgICAgIFZBUlxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==