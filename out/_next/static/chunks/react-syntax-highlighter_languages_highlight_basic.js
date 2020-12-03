(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_basic"],{

/***/ "./node_modules/highlight.js/lib/languages/basic.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/basic.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: BASIC
Author: Raphaël Assénat <raph@raphnet.net>
Description: Based on the BASIC reference from the Tandy 1000 guide
Website: https://en.wikipedia.org/wiki/Tandy_1000
*/

/** @type LanguageFn */
function basic(hljs) {
  return {
    name: 'BASIC',
    case_insensitive: true,
    illegal: '^\.',
    // Support explicitly typed variables that end with $%! or #.
    keywords: {
        $pattern: '[a-zA-Z][a-zA-Z0-9_\$\%\!\#]*',
        keyword:
          'ABS ASC AND ATN AUTO|0 BEEP BLOAD|10 BSAVE|10 CALL CALLS CDBL CHAIN CHDIR CHR$|10 CINT CIRCLE ' +
          'CLEAR CLOSE CLS COLOR COM COMMON CONT COS CSNG CSRLIN CVD CVI CVS DATA DATE$ ' +
          'DEFDBL DEFINT DEFSNG DEFSTR DEF|0 SEG USR DELETE DIM DRAW EDIT END ENVIRON ENVIRON$ ' +
          'EOF EQV ERASE ERDEV ERDEV$ ERL ERR ERROR EXP FIELD FILES FIX FOR|0 FRE GET GOSUB|10 GOTO ' +
          'HEX$ IF THEN ELSE|0 INKEY$ INP INPUT INPUT# INPUT$ INSTR IMP INT IOCTL IOCTL$ KEY ON ' +
          'OFF LIST KILL LEFT$ LEN LET LINE LLIST LOAD LOC LOCATE LOF LOG LPRINT USING LSET ' +
          'MERGE MID$ MKDIR MKD$ MKI$ MKS$ MOD NAME NEW NEXT NOISE NOT OCT$ ON OR PEN PLAY STRIG OPEN OPTION ' +
          'BASE OUT PAINT PALETTE PCOPY PEEK PMAP POINT POKE POS PRINT PRINT] PSET PRESET ' +
          'PUT RANDOMIZE READ REM RENUM RESET|0 RESTORE RESUME RETURN|0 RIGHT$ RMDIR RND RSET ' +
          'RUN SAVE SCREEN SGN SHELL SIN SOUND SPACE$ SPC SQR STEP STICK STOP STR$ STRING$ SWAP ' +
          'SYSTEM TAB TAN TIME$ TIMER TROFF TRON TO USR VAL VARPTR VARPTR$ VIEW WAIT WHILE ' +
          'WEND WIDTH WINDOW WRITE XOR'
    },
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.COMMENT('REM', '$', {relevance: 10}),
      hljs.COMMENT('\'', '$', {relevance: 0}),
      {
        // Match line numbers
        className: 'symbol',
        begin: '^[0-9]+\ ',
        relevance: 10
      },
      {
        // Match typed numeric constants (1000, 12.34!, 1.2e5, 1.5#, 1.2D2)
        className: 'number',
        begin: '\\b([0-9]+[0-9edED\.]*[#\!]?)',
        relevance: 0
      },
      {
        // Match hexadecimal numbers (&Hxxxx)
        className: 'number',
        begin: '(\&[hH][0-9a-fA-F]{1,4})'
      },
      {
        // Match octal numbers (&Oxxxxxx)
        className: 'number',
        begin: '(\&[oO][0-7]{1,6})'
      }
    ]
  };
}

module.exports = basic;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2Jhc2ljLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsZ0NBQWdDLGNBQWM7QUFDOUMsK0JBQStCLGFBQWE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxJQUFJO0FBQ3ZDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsSUFBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2Jhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBCQVNJQ1xuQXV0aG9yOiBSYXBoYcOrbCBBc3PDqW5hdCA8cmFwaEByYXBobmV0Lm5ldD5cbkRlc2NyaXB0aW9uOiBCYXNlZCBvbiB0aGUgQkFTSUMgcmVmZXJlbmNlIGZyb20gdGhlIFRhbmR5IDEwMDAgZ3VpZGVcbldlYnNpdGU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1RhbmR5XzEwMDBcbiovXG5cbi8qKiBAdHlwZSBMYW5ndWFnZUZuICovXG5mdW5jdGlvbiBiYXNpYyhobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0JBU0lDJyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGlsbGVnYWw6ICdeXFwuJyxcbiAgICAvLyBTdXBwb3J0IGV4cGxpY2l0bHkgdHlwZWQgdmFyaWFibGVzIHRoYXQgZW5kIHdpdGggJCUhIG9yICMuXG4gICAga2V5d29yZHM6IHtcbiAgICAgICAgJHBhdHRlcm46ICdbYS16QS1aXVthLXpBLVowLTlfXFwkXFwlXFwhXFwjXSonLFxuICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICdBQlMgQVNDIEFORCBBVE4gQVVUT3wwIEJFRVAgQkxPQUR8MTAgQlNBVkV8MTAgQ0FMTCBDQUxMUyBDREJMIENIQUlOIENIRElSIENIUiR8MTAgQ0lOVCBDSVJDTEUgJyArXG4gICAgICAgICAgJ0NMRUFSIENMT1NFIENMUyBDT0xPUiBDT00gQ09NTU9OIENPTlQgQ09TIENTTkcgQ1NSTElOIENWRCBDVkkgQ1ZTIERBVEEgREFURSQgJyArXG4gICAgICAgICAgJ0RFRkRCTCBERUZJTlQgREVGU05HIERFRlNUUiBERUZ8MCBTRUcgVVNSIERFTEVURSBESU0gRFJBVyBFRElUIEVORCBFTlZJUk9OIEVOVklST04kICcgK1xuICAgICAgICAgICdFT0YgRVFWIEVSQVNFIEVSREVWIEVSREVWJCBFUkwgRVJSIEVSUk9SIEVYUCBGSUVMRCBGSUxFUyBGSVggRk9SfDAgRlJFIEdFVCBHT1NVQnwxMCBHT1RPICcgK1xuICAgICAgICAgICdIRVgkIElGIFRIRU4gRUxTRXwwIElOS0VZJCBJTlAgSU5QVVQgSU5QVVQjIElOUFVUJCBJTlNUUiBJTVAgSU5UIElPQ1RMIElPQ1RMJCBLRVkgT04gJyArXG4gICAgICAgICAgJ09GRiBMSVNUIEtJTEwgTEVGVCQgTEVOIExFVCBMSU5FIExMSVNUIExPQUQgTE9DIExPQ0FURSBMT0YgTE9HIExQUklOVCBVU0lORyBMU0VUICcgK1xuICAgICAgICAgICdNRVJHRSBNSUQkIE1LRElSIE1LRCQgTUtJJCBNS1MkIE1PRCBOQU1FIE5FVyBORVhUIE5PSVNFIE5PVCBPQ1QkIE9OIE9SIFBFTiBQTEFZIFNUUklHIE9QRU4gT1BUSU9OICcgK1xuICAgICAgICAgICdCQVNFIE9VVCBQQUlOVCBQQUxFVFRFIFBDT1BZIFBFRUsgUE1BUCBQT0lOVCBQT0tFIFBPUyBQUklOVCBQUklOVF0gUFNFVCBQUkVTRVQgJyArXG4gICAgICAgICAgJ1BVVCBSQU5ET01JWkUgUkVBRCBSRU0gUkVOVU0gUkVTRVR8MCBSRVNUT1JFIFJFU1VNRSBSRVRVUk58MCBSSUdIVCQgUk1ESVIgUk5EIFJTRVQgJyArXG4gICAgICAgICAgJ1JVTiBTQVZFIFNDUkVFTiBTR04gU0hFTEwgU0lOIFNPVU5EIFNQQUNFJCBTUEMgU1FSIFNURVAgU1RJQ0sgU1RPUCBTVFIkIFNUUklORyQgU1dBUCAnICtcbiAgICAgICAgICAnU1lTVEVNIFRBQiBUQU4gVElNRSQgVElNRVIgVFJPRkYgVFJPTiBUTyBVU1IgVkFMIFZBUlBUUiBWQVJQVFIkIFZJRVcgV0FJVCBXSElMRSAnICtcbiAgICAgICAgICAnV0VORCBXSURUSCBXSU5ET1cgV1JJVEUgWE9SJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkNPTU1FTlQoJ1JFTScsICckJywge3JlbGV2YW5jZTogMTB9KSxcbiAgICAgIGhsanMuQ09NTUVOVCgnXFwnJywgJyQnLCB7cmVsZXZhbmNlOiAwfSksXG4gICAgICB7XG4gICAgICAgIC8vIE1hdGNoIGxpbmUgbnVtYmVyc1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogJ15bMC05XStcXCAnLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBNYXRjaCB0eXBlZCBudW1lcmljIGNvbnN0YW50cyAoMTAwMCwgMTIuMzQhLCAxLjJlNSwgMS41IywgMS4yRDIpXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoWzAtOV0rWzAtOWVkRURcXC5dKlsjXFwhXT8pJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBNYXRjaCBoZXhhZGVjaW1hbCBudW1iZXJzICgmSHh4eHgpXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAnKFxcJltoSF1bMC05YS1mQS1GXXsxLDR9KSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIE1hdGNoIG9jdGFsIG51bWJlcnMgKCZPeHh4eHh4KVxuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogJyhcXCZbb09dWzAtN117MSw2fSknXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2ljO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==