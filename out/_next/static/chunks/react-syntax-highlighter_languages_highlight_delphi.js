(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_delphi"],{

/***/ "./node_modules/highlight.js/lib/languages/delphi.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/delphi.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Delphi
Website: https://www.embarcadero.com/products/delphi
*/

/** @type LanguageFn */
function delphi(hljs) {
  var KEYWORDS =
    'exports register file shl array record property for mod while set ally label uses raise not ' +
    'stored class safecall var interface or private static exit index inherited to else stdcall ' +
    'override shr asm far resourcestring finalization packed virtual out and protected library do ' +
    'xorwrite goto near function end div overload object unit begin string on inline repeat until ' +
    'destructor write message program with read initialization except default nil if case cdecl in ' +
    'downto threadvar of try pascal const external constructor type public then implementation ' +
    'finally published procedure absolute reintroduce operator as is abstract alias assembler ' +
    'bitpacked break continue cppdecl cvar enumerator experimental platform deprecated ' +
    'unimplemented dynamic export far16 forward generic helper implements interrupt iochecks ' +
    'local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat ' +
    'specialize strict unaligned varargs ';
  var COMMENT_MODES = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.COMMENT(/\{/, /\}/, {relevance: 0}),
    hljs.COMMENT(/\(\*/, /\*\)/, {relevance: 10})
  ];
  var DIRECTIVE = {
    className: 'meta',
    variants: [
      {begin: /\{\$/, end: /\}/},
      {begin: /\(\*\$/, end: /\*\)/}
    ]
  };
  var STRING = {
    className: 'string',
    begin: /'/, end: /'/,
    contains: [{begin: /''/}]
  };
  var NUMBER = {
    className: 'number',
    relevance: 0,
    // Source: https://www.freepascal.org/docs-html/ref/refse6.html
    variants: [
      {
        // Hexadecimal notation, e.g., $7F.
        begin: '\\$[0-9A-Fa-f]+',
      },
      {
        // Octal notation, e.g., &42.
        begin: '&[0-7]+',
      },
      {
        // Binary notation, e.g., %1010.
        begin: '%[01]+',
      }
    ]
  };
  var CHAR_STRING = {
    className: 'string', begin: /(#\d+)+/
  };
  var CLASS = {
    begin: hljs.IDENT_RE + '\\s*=\\s*class\\s*\\(', returnBegin: true,
    contains: [
      hljs.TITLE_MODE
    ]
  };
  var FUNCTION = {
    className: 'function',
    beginKeywords: 'function constructor destructor procedure', end: /[:;]/,
    keywords: 'function constructor|10 destructor|10 procedure|10',
    contains: [
      hljs.TITLE_MODE,
      {
        className: 'params',
        begin: /\(/, end: /\)/,
        keywords: KEYWORDS,
        contains: [STRING, CHAR_STRING, DIRECTIVE].concat(COMMENT_MODES)
      },
      DIRECTIVE
    ].concat(COMMENT_MODES)
  };
  return {
    name: 'Delphi',
    aliases: ['dpr', 'dfm', 'pas', 'pascal', 'freepascal', 'lazarus', 'lpr', 'lfm'],
    case_insensitive: true,
    keywords: KEYWORDS,
    illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
    contains: [
      STRING, CHAR_STRING,
      hljs.NUMBER_MODE,
      NUMBER,
      CLASS,
      FUNCTION,
      DIRECTIVE
    ].concat(COMMENT_MODES)
  };
}

module.exports = delphi;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2RlbHBoaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixNQUFNLElBQUksYUFBYTtBQUMzQyxrQ0FBa0MsY0FBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sVUFBVSxhQUFhLEVBQUU7QUFDaEMsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2RlbHBoaS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogRGVscGhpXG5XZWJzaXRlOiBodHRwczovL3d3dy5lbWJhcmNhZGVyby5jb20vcHJvZHVjdHMvZGVscGhpXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gZGVscGhpKGhsanMpIHtcbiAgdmFyIEtFWVdPUkRTID1cbiAgICAnZXhwb3J0cyByZWdpc3RlciBmaWxlIHNobCBhcnJheSByZWNvcmQgcHJvcGVydHkgZm9yIG1vZCB3aGlsZSBzZXQgYWxseSBsYWJlbCB1c2VzIHJhaXNlIG5vdCAnICtcbiAgICAnc3RvcmVkIGNsYXNzIHNhZmVjYWxsIHZhciBpbnRlcmZhY2Ugb3IgcHJpdmF0ZSBzdGF0aWMgZXhpdCBpbmRleCBpbmhlcml0ZWQgdG8gZWxzZSBzdGRjYWxsICcgK1xuICAgICdvdmVycmlkZSBzaHIgYXNtIGZhciByZXNvdXJjZXN0cmluZyBmaW5hbGl6YXRpb24gcGFja2VkIHZpcnR1YWwgb3V0IGFuZCBwcm90ZWN0ZWQgbGlicmFyeSBkbyAnICtcbiAgICAneG9yd3JpdGUgZ290byBuZWFyIGZ1bmN0aW9uIGVuZCBkaXYgb3ZlcmxvYWQgb2JqZWN0IHVuaXQgYmVnaW4gc3RyaW5nIG9uIGlubGluZSByZXBlYXQgdW50aWwgJyArXG4gICAgJ2Rlc3RydWN0b3Igd3JpdGUgbWVzc2FnZSBwcm9ncmFtIHdpdGggcmVhZCBpbml0aWFsaXphdGlvbiBleGNlcHQgZGVmYXVsdCBuaWwgaWYgY2FzZSBjZGVjbCBpbiAnICtcbiAgICAnZG93bnRvIHRocmVhZHZhciBvZiB0cnkgcGFzY2FsIGNvbnN0IGV4dGVybmFsIGNvbnN0cnVjdG9yIHR5cGUgcHVibGljIHRoZW4gaW1wbGVtZW50YXRpb24gJyArXG4gICAgJ2ZpbmFsbHkgcHVibGlzaGVkIHByb2NlZHVyZSBhYnNvbHV0ZSByZWludHJvZHVjZSBvcGVyYXRvciBhcyBpcyBhYnN0cmFjdCBhbGlhcyBhc3NlbWJsZXIgJyArXG4gICAgJ2JpdHBhY2tlZCBicmVhayBjb250aW51ZSBjcHBkZWNsIGN2YXIgZW51bWVyYXRvciBleHBlcmltZW50YWwgcGxhdGZvcm0gZGVwcmVjYXRlZCAnICtcbiAgICAndW5pbXBsZW1lbnRlZCBkeW5hbWljIGV4cG9ydCBmYXIxNiBmb3J3YXJkIGdlbmVyaWMgaGVscGVyIGltcGxlbWVudHMgaW50ZXJydXB0IGlvY2hlY2tzICcgK1xuICAgICdsb2NhbCBuYW1lIG5vZGVmYXVsdCBub3JldHVybiBub3N0YWNrZnJhbWUgb2xkZnBjY2FsbCBvdGhlcndpc2Ugc2F2ZXJlZ2lzdGVycyBzb2Z0ZmxvYXQgJyArXG4gICAgJ3NwZWNpYWxpemUgc3RyaWN0IHVuYWxpZ25lZCB2YXJhcmdzICc7XG4gIHZhciBDT01NRU5UX01PREVTID0gW1xuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNPTU1FTlQoL1xcey8sIC9cXH0vLCB7cmVsZXZhbmNlOiAwfSksXG4gICAgaGxqcy5DT01NRU5UKC9cXChcXCovLCAvXFwqXFwpLywge3JlbGV2YW5jZTogMTB9KVxuICBdO1xuICB2YXIgRElSRUNUSVZFID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46IC9cXHtcXCQvLCBlbmQ6IC9cXH0vfSxcbiAgICAgIHtiZWdpbjogL1xcKFxcKlxcJC8sIGVuZDogL1xcKlxcKS99XG4gICAgXVxuICB9O1xuICB2YXIgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC8nLywgZW5kOiAvJy8sXG4gICAgY29udGFpbnM6IFt7YmVnaW46IC8nJy99XVxuICB9O1xuICB2YXIgTlVNQkVSID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIC8vIFNvdXJjZTogaHR0cHM6Ly93d3cuZnJlZXBhc2NhbC5vcmcvZG9jcy1odG1sL3JlZi9yZWZzZTYuaHRtbFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIC8vIEhleGFkZWNpbWFsIG5vdGF0aW9uLCBlLmcuLCAkN0YuXG4gICAgICAgIGJlZ2luOiAnXFxcXCRbMC05QS1GYS1mXSsnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gT2N0YWwgbm90YXRpb24sIGUuZy4sICY0Mi5cbiAgICAgICAgYmVnaW46ICcmWzAtN10rJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIEJpbmFyeSBub3RhdGlvbiwgZS5nLiwgJTEwMTAuXG4gICAgICAgIGJlZ2luOiAnJVswMV0rJyxcbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIHZhciBDSEFSX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLCBiZWdpbjogLygjXFxkKykrL1xuICB9O1xuICB2YXIgQ0xBU1MgPSB7XG4gICAgYmVnaW46IGhsanMuSURFTlRfUkUgKyAnXFxcXHMqPVxcXFxzKmNsYXNzXFxcXHMqXFxcXCgnLCByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5USVRMRV9NT0RFXG4gICAgXVxuICB9O1xuICB2YXIgRlVOQ1RJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbiBjb25zdHJ1Y3RvciBkZXN0cnVjdG9yIHByb2NlZHVyZScsIGVuZDogL1s6O10vLFxuICAgIGtleXdvcmRzOiAnZnVuY3Rpb24gY29uc3RydWN0b3J8MTAgZGVzdHJ1Y3RvcnwxMCBwcm9jZWR1cmV8MTAnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLlRJVExFX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyxcbiAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgICAgICBjb250YWluczogW1NUUklORywgQ0hBUl9TVFJJTkcsIERJUkVDVElWRV0uY29uY2F0KENPTU1FTlRfTU9ERVMpXG4gICAgICB9LFxuICAgICAgRElSRUNUSVZFXG4gICAgXS5jb25jYXQoQ09NTUVOVF9NT0RFUylcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnRGVscGhpJyxcbiAgICBhbGlhc2VzOiBbJ2RwcicsICdkZm0nLCAncGFzJywgJ3Bhc2NhbCcsICdmcmVlcGFzY2FsJywgJ2xhemFydXMnLCAnbHByJywgJ2xmbSddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGlsbGVnYWw6IC9cInxcXCRbRy1aZy16XXxcXC9cXCp8PFxcL3xcXHwvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBTVFJJTkcsIENIQVJfU1RSSU5HLFxuICAgICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICAgIE5VTUJFUixcbiAgICAgIENMQVNTLFxuICAgICAgRlVOQ1RJT04sXG4gICAgICBESVJFQ1RJVkVcbiAgICBdLmNvbmNhdChDT01NRU5UX01PREVTKVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbHBoaTtcbiJdLCJzb3VyY2VSb290IjoiIn0=