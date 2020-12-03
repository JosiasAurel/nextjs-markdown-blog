(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_mercury"],{

/***/ "./node_modules/highlight.js/lib/languages/mercury.js":
/*!************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/mercury.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Mercury
Author: mucaho <mkucko@gmail.com>
Description: Mercury is a logic/functional programming language which combines the clarity and expressiveness of declarative programming with advanced static analysis and error detection features.
Website: https://www.mercurylang.org
*/

function mercury(hljs) {
  var KEYWORDS = {
    keyword:
      'module use_module import_module include_module end_module initialise ' +
      'mutable initialize finalize finalise interface implementation pred ' +
      'mode func type inst solver any_pred any_func is semidet det nondet ' +
      'multi erroneous failure cc_nondet cc_multi typeclass instance where ' +
      'pragma promise external trace atomic or_else require_complete_switch ' +
      'require_det require_semidet require_multi require_nondet ' +
      'require_cc_multi require_cc_nondet require_erroneous require_failure',
    meta:
      // pragma
      'inline no_inline type_spec source_file fact_table obsolete memo ' +
      'loop_check minimal_model terminates does_not_terminate ' +
      'check_termination promise_equivalent_clauses ' +
      // preprocessor
      'foreign_proc foreign_decl foreign_code foreign_type ' +
      'foreign_import_module foreign_export_enum foreign_export ' +
      'foreign_enum may_call_mercury will_not_call_mercury thread_safe ' +
      'not_thread_safe maybe_thread_safe promise_pure promise_semipure ' +
      'tabled_for_io local untrailed trailed attach_to_io_state ' +
      'can_pass_as_mercury_type stable will_not_throw_exception ' +
      'may_modify_trail will_not_modify_trail may_duplicate ' +
      'may_not_duplicate affects_liveness does_not_affect_liveness ' +
      'doesnt_affect_liveness no_sharing unknown_sharing sharing',
    built_in:
      'some all not if then else true fail false try catch catch_any ' +
      'semidet_true semidet_false semidet_fail impure_true impure semipure'
  };

  var COMMENT = hljs.COMMENT('%', '$');

  var NUMCODE = {
    className: 'number',
    begin: "0'.\\|0[box][0-9a-fA-F]*"
  };

  var ATOM = hljs.inherit(hljs.APOS_STRING_MODE, {relevance: 0});
  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {relevance: 0});
  var STRING_FMT = {
    className: 'subst',
    begin: '\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]',
    relevance: 0
  };
  STRING.contains = STRING.contains.slice(); // we need our own copy of contains
  STRING.contains.push(STRING_FMT);

  var IMPLICATION = {
    className: 'built_in',
    variants: [
      {begin: '<=>'},
      {begin: '<=', relevance: 0},
      {begin: '=>', relevance: 0},
      {begin: '/\\\\'},
      {begin: '\\\\/'}
    ]
  };

  var HEAD_BODY_CONJUNCTION = {
    className: 'built_in',
    variants: [
      {begin: ':-\\|-->'},
      {begin: '=', relevance: 0}
    ]
  };

  return {
    name: 'Mercury',
    aliases: ['m', 'moo'],
    keywords: KEYWORDS,
    contains: [
      IMPLICATION,
      HEAD_BODY_CONJUNCTION,
      COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMCODE,
      hljs.NUMBER_MODE,
      ATOM,
      STRING,
      {begin: /:-/}, // relevance booster
      {begin: /\.$/} // relevance booster
    ]
  };
}

module.exports = mercury;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21lcmN1cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtELGFBQWE7QUFDL0QscURBQXFELGFBQWE7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGFBQWE7QUFDcEIsT0FBTywwQkFBMEI7QUFDakMsT0FBTywwQkFBMEI7QUFDakMsT0FBTyxlQUFlO0FBQ3RCLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxZQUFZO0FBQ25CLE9BQU8sYUFBYTtBQUNwQjtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9tZXJjdXJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBNZXJjdXJ5XG5BdXRob3I6IG11Y2FobyA8bWt1Y2tvQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBNZXJjdXJ5IGlzIGEgbG9naWMvZnVuY3Rpb25hbCBwcm9ncmFtbWluZyBsYW5ndWFnZSB3aGljaCBjb21iaW5lcyB0aGUgY2xhcml0eSBhbmQgZXhwcmVzc2l2ZW5lc3Mgb2YgZGVjbGFyYXRpdmUgcHJvZ3JhbW1pbmcgd2l0aCBhZHZhbmNlZCBzdGF0aWMgYW5hbHlzaXMgYW5kIGVycm9yIGRldGVjdGlvbiBmZWF0dXJlcy5cbldlYnNpdGU6IGh0dHBzOi8vd3d3Lm1lcmN1cnlsYW5nLm9yZ1xuKi9cblxuZnVuY3Rpb24gbWVyY3VyeShobGpzKSB7XG4gIHZhciBLRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOlxuICAgICAgJ21vZHVsZSB1c2VfbW9kdWxlIGltcG9ydF9tb2R1bGUgaW5jbHVkZV9tb2R1bGUgZW5kX21vZHVsZSBpbml0aWFsaXNlICcgK1xuICAgICAgJ211dGFibGUgaW5pdGlhbGl6ZSBmaW5hbGl6ZSBmaW5hbGlzZSBpbnRlcmZhY2UgaW1wbGVtZW50YXRpb24gcHJlZCAnICtcbiAgICAgICdtb2RlIGZ1bmMgdHlwZSBpbnN0IHNvbHZlciBhbnlfcHJlZCBhbnlfZnVuYyBpcyBzZW1pZGV0IGRldCBub25kZXQgJyArXG4gICAgICAnbXVsdGkgZXJyb25lb3VzIGZhaWx1cmUgY2Nfbm9uZGV0IGNjX211bHRpIHR5cGVjbGFzcyBpbnN0YW5jZSB3aGVyZSAnICtcbiAgICAgICdwcmFnbWEgcHJvbWlzZSBleHRlcm5hbCB0cmFjZSBhdG9taWMgb3JfZWxzZSByZXF1aXJlX2NvbXBsZXRlX3N3aXRjaCAnICtcbiAgICAgICdyZXF1aXJlX2RldCByZXF1aXJlX3NlbWlkZXQgcmVxdWlyZV9tdWx0aSByZXF1aXJlX25vbmRldCAnICtcbiAgICAgICdyZXF1aXJlX2NjX211bHRpIHJlcXVpcmVfY2Nfbm9uZGV0IHJlcXVpcmVfZXJyb25lb3VzIHJlcXVpcmVfZmFpbHVyZScsXG4gICAgbWV0YTpcbiAgICAgIC8vIHByYWdtYVxuICAgICAgJ2lubGluZSBub19pbmxpbmUgdHlwZV9zcGVjIHNvdXJjZV9maWxlIGZhY3RfdGFibGUgb2Jzb2xldGUgbWVtbyAnICtcbiAgICAgICdsb29wX2NoZWNrIG1pbmltYWxfbW9kZWwgdGVybWluYXRlcyBkb2VzX25vdF90ZXJtaW5hdGUgJyArXG4gICAgICAnY2hlY2tfdGVybWluYXRpb24gcHJvbWlzZV9lcXVpdmFsZW50X2NsYXVzZXMgJyArXG4gICAgICAvLyBwcmVwcm9jZXNzb3JcbiAgICAgICdmb3JlaWduX3Byb2MgZm9yZWlnbl9kZWNsIGZvcmVpZ25fY29kZSBmb3JlaWduX3R5cGUgJyArXG4gICAgICAnZm9yZWlnbl9pbXBvcnRfbW9kdWxlIGZvcmVpZ25fZXhwb3J0X2VudW0gZm9yZWlnbl9leHBvcnQgJyArXG4gICAgICAnZm9yZWlnbl9lbnVtIG1heV9jYWxsX21lcmN1cnkgd2lsbF9ub3RfY2FsbF9tZXJjdXJ5IHRocmVhZF9zYWZlICcgK1xuICAgICAgJ25vdF90aHJlYWRfc2FmZSBtYXliZV90aHJlYWRfc2FmZSBwcm9taXNlX3B1cmUgcHJvbWlzZV9zZW1pcHVyZSAnICtcbiAgICAgICd0YWJsZWRfZm9yX2lvIGxvY2FsIHVudHJhaWxlZCB0cmFpbGVkIGF0dGFjaF90b19pb19zdGF0ZSAnICtcbiAgICAgICdjYW5fcGFzc19hc19tZXJjdXJ5X3R5cGUgc3RhYmxlIHdpbGxfbm90X3Rocm93X2V4Y2VwdGlvbiAnICtcbiAgICAgICdtYXlfbW9kaWZ5X3RyYWlsIHdpbGxfbm90X21vZGlmeV90cmFpbCBtYXlfZHVwbGljYXRlICcgK1xuICAgICAgJ21heV9ub3RfZHVwbGljYXRlIGFmZmVjdHNfbGl2ZW5lc3MgZG9lc19ub3RfYWZmZWN0X2xpdmVuZXNzICcgK1xuICAgICAgJ2RvZXNudF9hZmZlY3RfbGl2ZW5lc3Mgbm9fc2hhcmluZyB1bmtub3duX3NoYXJpbmcgc2hhcmluZycsXG4gICAgYnVpbHRfaW46XG4gICAgICAnc29tZSBhbGwgbm90IGlmIHRoZW4gZWxzZSB0cnVlIGZhaWwgZmFsc2UgdHJ5IGNhdGNoIGNhdGNoX2FueSAnICtcbiAgICAgICdzZW1pZGV0X3RydWUgc2VtaWRldF9mYWxzZSBzZW1pZGV0X2ZhaWwgaW1wdXJlX3RydWUgaW1wdXJlIHNlbWlwdXJlJ1xuICB9O1xuXG4gIHZhciBDT01NRU5UID0gaGxqcy5DT01NRU5UKCclJywgJyQnKTtcblxuICB2YXIgTlVNQ09ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGJlZ2luOiBcIjAnLlxcXFx8MFtib3hdWzAtOWEtZkEtRl0qXCJcbiAgfTtcblxuICB2YXIgQVRPTSA9IGhsanMuaW5oZXJpdChobGpzLkFQT1NfU1RSSU5HX01PREUsIHtyZWxldmFuY2U6IDB9KTtcbiAgdmFyIFNUUklORyA9IGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7cmVsZXZhbmNlOiAwfSk7XG4gIHZhciBTVFJJTkdfRk1UID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogJ1xcXFxcXFxcW2FiZm5ydHZdXFxcXHxcXFxcXFxcXHhbMC05YS1mQS1GXSpcXFxcXFxcXFxcXFx8JVstKyMgKi4wLTldKltkaW94WHVjc2ZlRWdHcF0nLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICBTVFJJTkcuY29udGFpbnMgPSBTVFJJTkcuY29udGFpbnMuc2xpY2UoKTsgLy8gd2UgbmVlZCBvdXIgb3duIGNvcHkgb2YgY29udGFpbnNcbiAgU1RSSU5HLmNvbnRhaW5zLnB1c2goU1RSSU5HX0ZNVCk7XG5cbiAgdmFyIElNUExJQ0FUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge2JlZ2luOiAnPD0+J30sXG4gICAgICB7YmVnaW46ICc8PScsIHJlbGV2YW5jZTogMH0sXG4gICAgICB7YmVnaW46ICc9PicsIHJlbGV2YW5jZTogMH0sXG4gICAgICB7YmVnaW46ICcvXFxcXFxcXFwnfSxcbiAgICAgIHtiZWdpbjogJ1xcXFxcXFxcLyd9XG4gICAgXVxuICB9O1xuXG4gIHZhciBIRUFEX0JPRFlfQ09OSlVOQ1RJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnYnVpbHRfaW4nLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46ICc6LVxcXFx8LS0+J30sXG4gICAgICB7YmVnaW46ICc9JywgcmVsZXZhbmNlOiAwfVxuICAgIF1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6ICdNZXJjdXJ5JyxcbiAgICBhbGlhc2VzOiBbJ20nLCAnbW9vJ10sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBJTVBMSUNBVElPTixcbiAgICAgIEhFQURfQk9EWV9DT05KVU5DVElPTixcbiAgICAgIENPTU1FTlQsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgTlVNQ09ERSxcbiAgICAgIGhsanMuTlVNQkVSX01PREUsXG4gICAgICBBVE9NLFxuICAgICAgU1RSSU5HLFxuICAgICAge2JlZ2luOiAvOi0vfSwgLy8gcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICAgIHtiZWdpbjogL1xcLiQvfSAvLyByZWxldmFuY2UgYm9vc3RlclxuICAgIF1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZXJjdXJ5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==