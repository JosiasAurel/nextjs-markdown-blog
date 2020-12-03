(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_vbnet"],{

/***/ "./node_modules/highlight.js/lib/languages/vbnet.js":
/*!**********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/vbnet.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Visual Basic .NET
Description: Visual Basic .NET (VB.NET) is a multi-paradigm, object-oriented programming language, implemented on the .NET Framework.
Author: Poren Chiang <ren.chiang@gmail.com>
Website: https://docs.microsoft.com/en-us/dotnet/visual-basic/getting-started/
*/

function vbnet(hljs) {
  return {
    name: 'Visual Basic .NET',
    aliases: ['vb'],
    case_insensitive: true,
    keywords: {
      keyword:
        'addhandler addressof alias and andalso aggregate ansi as async assembly auto await binary by byref byval ' + /* a-b */
        'call case catch class compare const continue custom declare default delegate dim distinct do ' + /* c-d */
        'each equals else elseif end enum erase error event exit explicit finally for friend from function ' + /* e-f */
        'get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue iterator ' + /* g-i */
        'join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass ' + /* j-m */
        'nameof namespace narrowing new next not notinheritable notoverridable ' + /* n */
        'of off on operator option optional or order orelse overloads overridable overrides ' + /* o */
        'paramarray partial preserve private property protected public ' + /* p */
        'raiseevent readonly redim rem removehandler resume return ' + /* r */
        'select set shadows shared skip static step stop structure strict sub synclock ' + /* s */
        'take text then throw to try unicode until using when where while widening with withevents writeonly xor yield', /* t-y */
      built_in:
        'boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype ' +  /* b-c */
        'date decimal directcast double gettype getxmlnamespace iif integer long object ' + /* d-o */
        'sbyte short single string trycast typeof uinteger ulong ushort', /* s-u */
      literal:
        'true false nothing'
    },
    illegal: '//|{|}|endif|gosub|variant|wend|^\\$ ', /* reserved deprecated keywords */
    contains: [
      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '""'}]}),
      hljs.COMMENT(
        '\'',
        '$',
        {
          returnBegin: true,
          contains: [
            {
              className: 'doctag',
              begin: '\'\'\'|<!--|-->',
              contains: [hljs.PHRASAL_WORDS_MODE]
            },
            {
              className: 'doctag',
              begin: '</?', end: '>',
              contains: [hljs.PHRASAL_WORDS_MODE]
            }
          ]
        }
      ),
      hljs.C_NUMBER_MODE,
      {
        className: 'meta',
        begin: '#', end: '$',
        keywords: {'meta-keyword': 'if else elseif end region externalsource'}
      }
    ]
  };
}

module.exports = vbnet;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3ZibmV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0JBQWtCLEVBQUU7QUFDcEI7QUFDQSw0Q0FBNEMsWUFBWSxZQUFZLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfdmJuZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuTGFuZ3VhZ2U6IFZpc3VhbCBCYXNpYyAuTkVUXG5EZXNjcmlwdGlvbjogVmlzdWFsIEJhc2ljIC5ORVQgKFZCLk5FVCkgaXMgYSBtdWx0aS1wYXJhZGlnbSwgb2JqZWN0LW9yaWVudGVkIHByb2dyYW1taW5nIGxhbmd1YWdlLCBpbXBsZW1lbnRlZCBvbiB0aGUgLk5FVCBGcmFtZXdvcmsuXG5BdXRob3I6IFBvcmVuIENoaWFuZyA8cmVuLmNoaWFuZ0BnbWFpbC5jb20+XG5XZWJzaXRlOiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9kb3RuZXQvdmlzdWFsLWJhc2ljL2dldHRpbmctc3RhcnRlZC9cbiovXG5cbmZ1bmN0aW9uIHZibmV0KGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnVmlzdWFsIEJhc2ljIC5ORVQnLFxuICAgIGFsaWFzZXM6IFsndmInXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnYWRkaGFuZGxlciBhZGRyZXNzb2YgYWxpYXMgYW5kIGFuZGFsc28gYWdncmVnYXRlIGFuc2kgYXMgYXN5bmMgYXNzZW1ibHkgYXV0byBhd2FpdCBiaW5hcnkgYnkgYnlyZWYgYnl2YWwgJyArIC8qIGEtYiAqL1xuICAgICAgICAnY2FsbCBjYXNlIGNhdGNoIGNsYXNzIGNvbXBhcmUgY29uc3QgY29udGludWUgY3VzdG9tIGRlY2xhcmUgZGVmYXVsdCBkZWxlZ2F0ZSBkaW0gZGlzdGluY3QgZG8gJyArIC8qIGMtZCAqL1xuICAgICAgICAnZWFjaCBlcXVhbHMgZWxzZSBlbHNlaWYgZW5kIGVudW0gZXJhc2UgZXJyb3IgZXZlbnQgZXhpdCBleHBsaWNpdCBmaW5hbGx5IGZvciBmcmllbmQgZnJvbSBmdW5jdGlvbiAnICsgLyogZS1mICovXG4gICAgICAgICdnZXQgZ2xvYmFsIGdvdG8gZ3JvdXAgaGFuZGxlcyBpZiBpbXBsZW1lbnRzIGltcG9ydHMgaW4gaW5oZXJpdHMgaW50ZXJmYWNlIGludG8gaXMgaXNmYWxzZSBpc25vdCBpc3RydWUgaXRlcmF0b3IgJyArIC8qIGctaSAqL1xuICAgICAgICAnam9pbiBrZXkgbGV0IGxpYiBsaWtlIGxvb3AgbWUgbWlkIG1vZCBtb2R1bGUgbXVzdGluaGVyaXQgbXVzdG92ZXJyaWRlIG15YmFzZSBteWNsYXNzICcgKyAvKiBqLW0gKi9cbiAgICAgICAgJ25hbWVvZiBuYW1lc3BhY2UgbmFycm93aW5nIG5ldyBuZXh0IG5vdCBub3Rpbmhlcml0YWJsZSBub3RvdmVycmlkYWJsZSAnICsgLyogbiAqL1xuICAgICAgICAnb2Ygb2ZmIG9uIG9wZXJhdG9yIG9wdGlvbiBvcHRpb25hbCBvciBvcmRlciBvcmVsc2Ugb3ZlcmxvYWRzIG92ZXJyaWRhYmxlIG92ZXJyaWRlcyAnICsgLyogbyAqL1xuICAgICAgICAncGFyYW1hcnJheSBwYXJ0aWFsIHByZXNlcnZlIHByaXZhdGUgcHJvcGVydHkgcHJvdGVjdGVkIHB1YmxpYyAnICsgLyogcCAqL1xuICAgICAgICAncmFpc2VldmVudCByZWFkb25seSByZWRpbSByZW0gcmVtb3ZlaGFuZGxlciByZXN1bWUgcmV0dXJuICcgKyAvKiByICovXG4gICAgICAgICdzZWxlY3Qgc2V0IHNoYWRvd3Mgc2hhcmVkIHNraXAgc3RhdGljIHN0ZXAgc3RvcCBzdHJ1Y3R1cmUgc3RyaWN0IHN1YiBzeW5jbG9jayAnICsgLyogcyAqL1xuICAgICAgICAndGFrZSB0ZXh0IHRoZW4gdGhyb3cgdG8gdHJ5IHVuaWNvZGUgdW50aWwgdXNpbmcgd2hlbiB3aGVyZSB3aGlsZSB3aWRlbmluZyB3aXRoIHdpdGhldmVudHMgd3JpdGVvbmx5IHhvciB5aWVsZCcsIC8qIHQteSAqL1xuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdib29sZWFuIGJ5dGUgY2Jvb2wgY2J5dGUgY2NoYXIgY2RhdGUgY2RlYyBjZGJsIGNoYXIgY2ludCBjbG5nIGNvYmogY3NieXRlIGNzaG9ydCBjc25nIGNzdHIgY3R5cGUgJyArICAvKiBiLWMgKi9cbiAgICAgICAgJ2RhdGUgZGVjaW1hbCBkaXJlY3RjYXN0IGRvdWJsZSBnZXR0eXBlIGdldHhtbG5hbWVzcGFjZSBpaWYgaW50ZWdlciBsb25nIG9iamVjdCAnICsgLyogZC1vICovXG4gICAgICAgICdzYnl0ZSBzaG9ydCBzaW5nbGUgc3RyaW5nIHRyeWNhc3QgdHlwZW9mIHVpbnRlZ2VyIHVsb25nIHVzaG9ydCcsIC8qIHMtdSAqL1xuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ3RydWUgZmFsc2Ugbm90aGluZydcbiAgICB9LFxuICAgIGlsbGVnYWw6ICcvL3x7fH18ZW5kaWZ8Z29zdWJ8dmFyaWFudHx3ZW5kfF5cXFxcJCAnLCAvKiByZXNlcnZlZCBkZXByZWNhdGVkIGtleXdvcmRzICovXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7Y29udGFpbnM6IFt7YmVnaW46ICdcIlwiJ31dfSksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICdcXCcnLFxuICAgICAgICAnJCcsXG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICBiZWdpbjogJ1xcJ1xcJ1xcJ3w8IS0tfC0tPicsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5QSFJBU0FMX1dPUkRTX01PREVdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgICAgICAgICBiZWdpbjogJzwvPycsIGVuZDogJz4nLFxuICAgICAgICAgICAgICBjb250YWluczogW2hsanMuUEhSQVNBTF9XT1JEU19NT0RFXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnIycsIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogeydtZXRhLWtleXdvcmQnOiAnaWYgZWxzZSBlbHNlaWYgZW5kIHJlZ2lvbiBleHRlcm5hbHNvdXJjZSd9XG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZibmV0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==