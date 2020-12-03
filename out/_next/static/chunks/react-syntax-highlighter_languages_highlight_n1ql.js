(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_n1ql"],{

/***/ "./node_modules/highlight.js/lib/languages/n1ql.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/n1ql.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 Language: N1QL
 Author: Andres Täht <andres.taht@gmail.com>
 Contributors: Rene Saarsoo <nene@triin.net>
 Description: Couchbase query language
 Website: https://www.couchbase.com/products/n1ql
 */

function n1ql(hljs) {
  return {
    name: 'N1QL',
    case_insensitive: true,
    contains: [
      {
        beginKeywords:
          'build create index delete drop explain infer|10 insert merge prepare select update upsert|10',
        end: /;/, endsWithParent: true,
        keywords: {
          // Taken from http://developer.couchbase.com/documentation/server/current/n1ql/n1ql-language-reference/reservedwords.html
          keyword:
            'all alter analyze and any array as asc begin between binary boolean break bucket build by call ' +
            'case cast cluster collate collection commit connect continue correlate cover create database ' +
            'dataset datastore declare decrement delete derived desc describe distinct do drop each element ' +
            'else end every except exclude execute exists explain fetch first flatten for force from ' +
            'function grant group gsi having if ignore ilike in include increment index infer inline inner ' +
            'insert intersect into is join key keys keyspace known last left let letting like limit lsm map ' +
            'mapping matched materialized merge minus namespace nest not number object offset on ' +
            'option or order outer over parse partition password path pool prepare primary private privilege ' +
            'procedure public raw realm reduce rename return returning revoke right role rollback satisfies ' +
            'schema select self semi set show some start statistics string system then to transaction trigger ' +
            'truncate under union unique unknown unnest unset update upsert use user using validate value ' +
            'valued values via view when where while with within work xor',
          // Taken from http://developer.couchbase.com/documentation/server/4.5/n1ql/n1ql-language-reference/literals.html
          literal:
            'true false null missing|5',
          // Taken from http://developer.couchbase.com/documentation/server/4.5/n1ql/n1ql-language-reference/functions.html
          built_in:
            'array_agg array_append array_concat array_contains array_count array_distinct array_ifnull array_length ' +
            'array_max array_min array_position array_prepend array_put array_range array_remove array_repeat array_replace ' +
            'array_reverse array_sort array_sum avg count max min sum greatest least ifmissing ifmissingornull ifnull ' +
            'missingif nullif ifinf ifnan ifnanorinf naninf neginfif posinfif clock_millis clock_str date_add_millis ' +
            'date_add_str date_diff_millis date_diff_str date_part_millis date_part_str date_trunc_millis date_trunc_str ' +
            'duration_to_str millis str_to_millis millis_to_str millis_to_utc millis_to_zone_name now_millis now_str ' +
            'str_to_duration str_to_utc str_to_zone_name decode_json encode_json encoded_size poly_length base64 base64_encode ' +
            'base64_decode meta uuid abs acos asin atan atan2 ceil cos degrees e exp ln log floor pi power radians random ' +
            'round sign sin sqrt tan trunc object_length object_names object_pairs object_inner_pairs object_values ' +
            'object_inner_values object_add object_put object_remove object_unwrap regexp_contains regexp_like regexp_position ' +
            'regexp_replace contains initcap length lower ltrim position repeat replace rtrim split substr title trim upper ' +
            'isarray isatom isboolean isnumber isobject isstring type toarray toatom toboolean tonumber toobject tostring'
        },
        contains: [
          {
            className: 'string',
            begin: '\'', end: '\'',
            contains: [hljs.BACKSLASH_ESCAPE],
            relevance: 0
          },
          {
            className: 'string',
            begin: '"', end: '"',
            contains: [hljs.BACKSLASH_ESCAPE],
            relevance: 0
          },
          {
            className: 'symbol',
            begin: '`', end: '`',
            contains: [hljs.BACKSLASH_ESCAPE],
            relevance: 2
          },
          hljs.C_NUMBER_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };
}

module.exports = n1ql;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL24xcWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfbjFxbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gTGFuZ3VhZ2U6IE4xUUxcbiBBdXRob3I6IEFuZHJlcyBUw6RodCA8YW5kcmVzLnRhaHRAZ21haWwuY29tPlxuIENvbnRyaWJ1dG9yczogUmVuZSBTYWFyc29vIDxuZW5lQHRyaWluLm5ldD5cbiBEZXNjcmlwdGlvbjogQ291Y2hiYXNlIHF1ZXJ5IGxhbmd1YWdlXG4gV2Vic2l0ZTogaHR0cHM6Ly93d3cuY291Y2hiYXNlLmNvbS9wcm9kdWN0cy9uMXFsXG4gKi9cblxuZnVuY3Rpb24gbjFxbChobGpzKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ04xUUwnLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczpcbiAgICAgICAgICAnYnVpbGQgY3JlYXRlIGluZGV4IGRlbGV0ZSBkcm9wIGV4cGxhaW4gaW5mZXJ8MTAgaW5zZXJ0IG1lcmdlIHByZXBhcmUgc2VsZWN0IHVwZGF0ZSB1cHNlcnR8MTAnLFxuICAgICAgICBlbmQ6IC87LywgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgLy8gVGFrZW4gZnJvbSBodHRwOi8vZGV2ZWxvcGVyLmNvdWNoYmFzZS5jb20vZG9jdW1lbnRhdGlvbi9zZXJ2ZXIvY3VycmVudC9uMXFsL24xcWwtbGFuZ3VhZ2UtcmVmZXJlbmNlL3Jlc2VydmVkd29yZHMuaHRtbFxuICAgICAgICAgIGtleXdvcmQ6XG4gICAgICAgICAgICAnYWxsIGFsdGVyIGFuYWx5emUgYW5kIGFueSBhcnJheSBhcyBhc2MgYmVnaW4gYmV0d2VlbiBiaW5hcnkgYm9vbGVhbiBicmVhayBidWNrZXQgYnVpbGQgYnkgY2FsbCAnICtcbiAgICAgICAgICAgICdjYXNlIGNhc3QgY2x1c3RlciBjb2xsYXRlIGNvbGxlY3Rpb24gY29tbWl0IGNvbm5lY3QgY29udGludWUgY29ycmVsYXRlIGNvdmVyIGNyZWF0ZSBkYXRhYmFzZSAnICtcbiAgICAgICAgICAgICdkYXRhc2V0IGRhdGFzdG9yZSBkZWNsYXJlIGRlY3JlbWVudCBkZWxldGUgZGVyaXZlZCBkZXNjIGRlc2NyaWJlIGRpc3RpbmN0IGRvIGRyb3AgZWFjaCBlbGVtZW50ICcgK1xuICAgICAgICAgICAgJ2Vsc2UgZW5kIGV2ZXJ5IGV4Y2VwdCBleGNsdWRlIGV4ZWN1dGUgZXhpc3RzIGV4cGxhaW4gZmV0Y2ggZmlyc3QgZmxhdHRlbiBmb3IgZm9yY2UgZnJvbSAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBncmFudCBncm91cCBnc2kgaGF2aW5nIGlmIGlnbm9yZSBpbGlrZSBpbiBpbmNsdWRlIGluY3JlbWVudCBpbmRleCBpbmZlciBpbmxpbmUgaW5uZXIgJyArXG4gICAgICAgICAgICAnaW5zZXJ0IGludGVyc2VjdCBpbnRvIGlzIGpvaW4ga2V5IGtleXMga2V5c3BhY2Uga25vd24gbGFzdCBsZWZ0IGxldCBsZXR0aW5nIGxpa2UgbGltaXQgbHNtIG1hcCAnICtcbiAgICAgICAgICAgICdtYXBwaW5nIG1hdGNoZWQgbWF0ZXJpYWxpemVkIG1lcmdlIG1pbnVzIG5hbWVzcGFjZSBuZXN0IG5vdCBudW1iZXIgb2JqZWN0IG9mZnNldCBvbiAnICtcbiAgICAgICAgICAgICdvcHRpb24gb3Igb3JkZXIgb3V0ZXIgb3ZlciBwYXJzZSBwYXJ0aXRpb24gcGFzc3dvcmQgcGF0aCBwb29sIHByZXBhcmUgcHJpbWFyeSBwcml2YXRlIHByaXZpbGVnZSAnICtcbiAgICAgICAgICAgICdwcm9jZWR1cmUgcHVibGljIHJhdyByZWFsbSByZWR1Y2UgcmVuYW1lIHJldHVybiByZXR1cm5pbmcgcmV2b2tlIHJpZ2h0IHJvbGUgcm9sbGJhY2sgc2F0aXNmaWVzICcgK1xuICAgICAgICAgICAgJ3NjaGVtYSBzZWxlY3Qgc2VsZiBzZW1pIHNldCBzaG93IHNvbWUgc3RhcnQgc3RhdGlzdGljcyBzdHJpbmcgc3lzdGVtIHRoZW4gdG8gdHJhbnNhY3Rpb24gdHJpZ2dlciAnICtcbiAgICAgICAgICAgICd0cnVuY2F0ZSB1bmRlciB1bmlvbiB1bmlxdWUgdW5rbm93biB1bm5lc3QgdW5zZXQgdXBkYXRlIHVwc2VydCB1c2UgdXNlciB1c2luZyB2YWxpZGF0ZSB2YWx1ZSAnICtcbiAgICAgICAgICAgICd2YWx1ZWQgdmFsdWVzIHZpYSB2aWV3IHdoZW4gd2hlcmUgd2hpbGUgd2l0aCB3aXRoaW4gd29yayB4b3InLFxuICAgICAgICAgIC8vIFRha2VuIGZyb20gaHR0cDovL2RldmVsb3Blci5jb3VjaGJhc2UuY29tL2RvY3VtZW50YXRpb24vc2VydmVyLzQuNS9uMXFsL24xcWwtbGFuZ3VhZ2UtcmVmZXJlbmNlL2xpdGVyYWxzLmh0bWxcbiAgICAgICAgICBsaXRlcmFsOlxuICAgICAgICAgICAgJ3RydWUgZmFsc2UgbnVsbCBtaXNzaW5nfDUnLFxuICAgICAgICAgIC8vIFRha2VuIGZyb20gaHR0cDovL2RldmVsb3Blci5jb3VjaGJhc2UuY29tL2RvY3VtZW50YXRpb24vc2VydmVyLzQuNS9uMXFsL24xcWwtbGFuZ3VhZ2UtcmVmZXJlbmNlL2Z1bmN0aW9ucy5odG1sXG4gICAgICAgICAgYnVpbHRfaW46XG4gICAgICAgICAgICAnYXJyYXlfYWdnIGFycmF5X2FwcGVuZCBhcnJheV9jb25jYXQgYXJyYXlfY29udGFpbnMgYXJyYXlfY291bnQgYXJyYXlfZGlzdGluY3QgYXJyYXlfaWZudWxsIGFycmF5X2xlbmd0aCAnICtcbiAgICAgICAgICAgICdhcnJheV9tYXggYXJyYXlfbWluIGFycmF5X3Bvc2l0aW9uIGFycmF5X3ByZXBlbmQgYXJyYXlfcHV0IGFycmF5X3JhbmdlIGFycmF5X3JlbW92ZSBhcnJheV9yZXBlYXQgYXJyYXlfcmVwbGFjZSAnICtcbiAgICAgICAgICAgICdhcnJheV9yZXZlcnNlIGFycmF5X3NvcnQgYXJyYXlfc3VtIGF2ZyBjb3VudCBtYXggbWluIHN1bSBncmVhdGVzdCBsZWFzdCBpZm1pc3NpbmcgaWZtaXNzaW5nb3JudWxsIGlmbnVsbCAnICtcbiAgICAgICAgICAgICdtaXNzaW5naWYgbnVsbGlmIGlmaW5mIGlmbmFuIGlmbmFub3JpbmYgbmFuaW5mIG5lZ2luZmlmIHBvc2luZmlmIGNsb2NrX21pbGxpcyBjbG9ja19zdHIgZGF0ZV9hZGRfbWlsbGlzICcgK1xuICAgICAgICAgICAgJ2RhdGVfYWRkX3N0ciBkYXRlX2RpZmZfbWlsbGlzIGRhdGVfZGlmZl9zdHIgZGF0ZV9wYXJ0X21pbGxpcyBkYXRlX3BhcnRfc3RyIGRhdGVfdHJ1bmNfbWlsbGlzIGRhdGVfdHJ1bmNfc3RyICcgK1xuICAgICAgICAgICAgJ2R1cmF0aW9uX3RvX3N0ciBtaWxsaXMgc3RyX3RvX21pbGxpcyBtaWxsaXNfdG9fc3RyIG1pbGxpc190b191dGMgbWlsbGlzX3RvX3pvbmVfbmFtZSBub3dfbWlsbGlzIG5vd19zdHIgJyArXG4gICAgICAgICAgICAnc3RyX3RvX2R1cmF0aW9uIHN0cl90b191dGMgc3RyX3RvX3pvbmVfbmFtZSBkZWNvZGVfanNvbiBlbmNvZGVfanNvbiBlbmNvZGVkX3NpemUgcG9seV9sZW5ndGggYmFzZTY0IGJhc2U2NF9lbmNvZGUgJyArXG4gICAgICAgICAgICAnYmFzZTY0X2RlY29kZSBtZXRhIHV1aWQgYWJzIGFjb3MgYXNpbiBhdGFuIGF0YW4yIGNlaWwgY29zIGRlZ3JlZXMgZSBleHAgbG4gbG9nIGZsb29yIHBpIHBvd2VyIHJhZGlhbnMgcmFuZG9tICcgK1xuICAgICAgICAgICAgJ3JvdW5kIHNpZ24gc2luIHNxcnQgdGFuIHRydW5jIG9iamVjdF9sZW5ndGggb2JqZWN0X25hbWVzIG9iamVjdF9wYWlycyBvYmplY3RfaW5uZXJfcGFpcnMgb2JqZWN0X3ZhbHVlcyAnICtcbiAgICAgICAgICAgICdvYmplY3RfaW5uZXJfdmFsdWVzIG9iamVjdF9hZGQgb2JqZWN0X3B1dCBvYmplY3RfcmVtb3ZlIG9iamVjdF91bndyYXAgcmVnZXhwX2NvbnRhaW5zIHJlZ2V4cF9saWtlIHJlZ2V4cF9wb3NpdGlvbiAnICtcbiAgICAgICAgICAgICdyZWdleHBfcmVwbGFjZSBjb250YWlucyBpbml0Y2FwIGxlbmd0aCBsb3dlciBsdHJpbSBwb3NpdGlvbiByZXBlYXQgcmVwbGFjZSBydHJpbSBzcGxpdCBzdWJzdHIgdGl0bGUgdHJpbSB1cHBlciAnICtcbiAgICAgICAgICAgICdpc2FycmF5IGlzYXRvbSBpc2Jvb2xlYW4gaXNudW1iZXIgaXNvYmplY3QgaXNzdHJpbmcgdHlwZSB0b2FycmF5IHRvYXRvbSB0b2Jvb2xlYW4gdG9udW1iZXIgdG9vYmplY3QgdG9zdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFwnJywgZW5kOiAnXFwnJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXCInLCBlbmQ6ICdcIicsXG4gICAgICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV0sXG4gICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgICAgICBiZWdpbjogJ2AnLCBlbmQ6ICdgJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbjFxbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=