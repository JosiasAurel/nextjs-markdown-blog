(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_armasm"],{

/***/ "./node_modules/highlight.js/lib/languages/armasm.js":
/*!***********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/armasm.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: ARM Assembly
Author: Dan Panzarella <alsoelp@gmail.com>
Description: ARM Assembly including Thumb and Thumb2 instructions
Category: assembler
*/

/** @type LanguageFn */
function armasm(hljs) {
    //local labels: %?[FB]?[AT]?\d{1,2}\w+

  const COMMENT = {
    variants: [
      hljs.COMMENT('^[ \\t]*(?=#)', '$', {relevance: 0, excludeBegin: true }),
      hljs.COMMENT('[;@]', '$', {relevance: 0}),
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
    ]
  };

  return {
    name: 'ARM Assembly',
    case_insensitive: true,
    aliases: ['arm'],
    keywords: {
      $pattern: '\\.?' + hljs.IDENT_RE,
      meta:
        //GNU preprocs
        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg '+
        //ARM directives
        'ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ',
      built_in:
        'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 '+ //standard registers
        'pc lr sp ip sl sb fp '+ //typical regs plus backward compatibility
        'a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 '+ //more regs and fp
        'p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 '+ //coprocessor regs
        'c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 '+ //more coproc
        'q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 '+ //advanced SIMD NEON regs

        //program status registers
        'cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf '+
        'spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf '+

        //NEON and VFP registers
        's0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 '+
        's16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 '+
        'd0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 '+
        'd16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 ' +

        '{PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @'
    },
    contains: [
      {
        className: 'keyword',
        begin: '\\b('+     //mnemonics
            'adc|'+
            '(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|'+
            'and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|'+
            'bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|'+
            'setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|'+
            'ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|'+
            'mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|'+
            'mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|'+
            'mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|'+
            'rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|'+
            'stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|'+
            '[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|'+
            'wfe|wfi|yield'+
        ')'+
        '(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?'+ //condition codes
        '[sptrx]?' +                                             //legal postfixes
        '(?=\\s)'                                                // followed by space
      },
      COMMENT,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        begin: '\'',
        end: '[^\\\\]\'',
        relevance: 0
      },
      {
        className: 'title',
        begin: '\\|', end: '\\|',
        illegal: '\\n',
        relevance: 0
      },
      {
        className: 'number',
        variants: [
            {begin: '[#$=]?0x[0-9a-f]+'}, //hex
            {begin: '[#$=]?0b[01]+'},     //bin
            {begin: '[#$=]\\d+'},        //literal
            {begin: '\\b\\d+'}           //bare number
        ],
        relevance: 0
      },
      {
        className: 'symbol',
        variants: [
            {begin: '^[ \\t]*[a-z_\\.\\$][a-z0-9_\\.\\$]+:'}, //GNU ARM syntax
            {begin: '^[a-z_\\.\\$][a-z0-9_\\.\\$]+'}, //ARM syntax
            {begin: '[=#]\\w+' }  //label reference
        ],
        relevance: 0
      }
    ]
  };
}

module.exports = armasm;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FybWFzbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxJQUFJOztBQUV2QztBQUNBO0FBQ0EsMENBQTBDLGtDQUFrQztBQUM1RSxzQkFBc0IsV0FBVyxhQUFhO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTztBQUN2SyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxJQUFJO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixFQUFFO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxhQUFhLDJCQUEyQjtBQUN4QyxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLG1CQUFtQjtBQUNoQyxhQUFhLGlCQUFpQjtBQUM5QjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGFBQWEsK0NBQStDO0FBQzVELGFBQWEsdUNBQXVDO0FBQ3BELGFBQWEsbUJBQW1CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfaGlnaGxpZ2h0X2FybWFzbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5MYW5ndWFnZTogQVJNIEFzc2VtYmx5XG5BdXRob3I6IERhbiBQYW56YXJlbGxhIDxhbHNvZWxwQGdtYWlsLmNvbT5cbkRlc2NyaXB0aW9uOiBBUk0gQXNzZW1ibHkgaW5jbHVkaW5nIFRodW1iIGFuZCBUaHVtYjIgaW5zdHJ1Y3Rpb25zXG5DYXRlZ29yeTogYXNzZW1ibGVyXG4qL1xuXG4vKiogQHR5cGUgTGFuZ3VhZ2VGbiAqL1xuZnVuY3Rpb24gYXJtYXNtKGhsanMpIHtcbiAgICAvL2xvY2FsIGxhYmVsczogJT9bRkJdP1tBVF0/XFxkezEsMn1cXHcrXG5cbiAgY29uc3QgQ09NTUVOVCA9IHtcbiAgICB2YXJpYW50czogW1xuICAgICAgaGxqcy5DT01NRU5UKCdeWyBcXFxcdF0qKD89IyknLCAnJCcsIHtyZWxldmFuY2U6IDAsIGV4Y2x1ZGVCZWdpbjogdHJ1ZSB9KSxcbiAgICAgIGhsanMuQ09NTUVOVCgnWztAXScsICckJywge3JlbGV2YW5jZTogMH0pLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQVJNIEFzc2VtYmx5JyxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGFsaWFzZXM6IFsnYXJtJ10sXG4gICAga2V5d29yZHM6IHtcbiAgICAgICRwYXR0ZXJuOiAnXFxcXC4/JyArIGhsanMuSURFTlRfUkUsXG4gICAgICBtZXRhOlxuICAgICAgICAvL0dOVSBwcmVwcm9jc1xuICAgICAgICAnLjJieXRlIC40Ynl0ZSAuYWxpZ24gLmFzY2lpIC5hc2NpeiAuYmFsaWduIC5ieXRlIC5jb2RlIC5kYXRhIC5lbHNlIC5lbmQgLmVuZGlmIC5lbmRtIC5lbmRyIC5lcXUgLmVyciAuZXhpdG0gLmV4dGVybiAuZ2xvYmFsIC5od29yZCAuaWYgLmlmZGVmIC5pZm5kZWYgLmluY2x1ZGUgLmlycCAubG9uZyAubWFjcm8gLnJlcHQgLnJlcSAuc2VjdGlvbiAuc2V0IC5za2lwIC5zcGFjZSAudGV4dCAud29yZCAuYXJtIC50aHVtYiAuY29kZTE2IC5jb2RlMzIgLmZvcmNlX3RodW1iIC50aHVtYl9mdW5jIC5sdG9yZyAnK1xuICAgICAgICAvL0FSTSBkaXJlY3RpdmVzXG4gICAgICAgICdBTElBUyBBTElHTiBBUk0gQVJFQSBBU1NFUlQgQVRUUiBDTiBDT0RFIENPREUxNiBDT0RFMzIgQ09NTU9OIENQIERBVEEgRENCIERDRCBEQ0RVIERDRE8gRENGRCBEQ0ZEVSBEQ0kgRENRIERDUVUgRENXIERDV1UgRE4gRUxJRiBFTFNFIEVORCBFTkRGVU5DIEVORElGIEVORFAgRU5UUlkgRVFVIEVYUE9SVCBFWFBPUlRBUyBFWFRFUk4gRklFTEQgRklMTCBGVU5DVElPTiBHQkxBIEdCTEwgR0JMUyBHRVQgR0xPQkFMIElGIElNUE9SVCBJTkNCSU4gSU5DTFVERSBJTkZPIEtFRVAgTENMQSBMQ0xMIExDTFMgTFRPUkcgTUFDUk8gTUFQIE1FTkQgTUVYSVQgTk9GUCBPUFQgUFJFU0VSVkU4IFBST0MgUU4gUkVBRE9OTFkgUkVMT0MgUkVRVUlSRSBSRVFVSVJFOCBSTElTVCBGTiBST1VUIFNFVEEgU0VUTCBTRVRTIFNOIFNQQUNFIFNVQlQgVEhVTUIgVEhVTUJYIFRUTCBXSElMRSBXRU5EICcsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ3IwIHIxIHIyIHIzIHI0IHI1IHI2IHI3IHI4IHI5IHIxMCByMTEgcjEyIHIxMyByMTQgcjE1ICcrIC8vc3RhbmRhcmQgcmVnaXN0ZXJzXG4gICAgICAgICdwYyBsciBzcCBpcCBzbCBzYiBmcCAnKyAvL3R5cGljYWwgcmVncyBwbHVzIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICAgICAgJ2ExIGEyIGEzIGE0IHYxIHYyIHYzIHY0IHY1IHY2IHY3IHY4IGYwIGYxIGYyIGYzIGY0IGY1IGY2IGY3ICcrIC8vbW9yZSByZWdzIGFuZCBmcFxuICAgICAgICAncDAgcDEgcDIgcDMgcDQgcDUgcDYgcDcgcDggcDkgcDEwIHAxMSBwMTIgcDEzIHAxNCBwMTUgJysgLy9jb3Byb2Nlc3NvciByZWdzXG4gICAgICAgICdjMCBjMSBjMiBjMyBjNCBjNSBjNiBjNyBjOCBjOSBjMTAgYzExIGMxMiBjMTMgYzE0IGMxNSAnKyAvL21vcmUgY29wcm9jXG4gICAgICAgICdxMCBxMSBxMiBxMyBxNCBxNSBxNiBxNyBxOCBxOSBxMTAgcTExIHExMiBxMTMgcTE0IHExNSAnKyAvL2FkdmFuY2VkIFNJTUQgTkVPTiByZWdzXG5cbiAgICAgICAgLy9wcm9ncmFtIHN0YXR1cyByZWdpc3RlcnNcbiAgICAgICAgJ2Nwc3JfYyBjcHNyX3ggY3Bzcl9zIGNwc3JfZiBjcHNyX2N4IGNwc3JfY3hzIGNwc3JfeHMgY3Bzcl94c2YgY3Bzcl9zZiBjcHNyX2N4c2YgJytcbiAgICAgICAgJ3Nwc3JfYyBzcHNyX3ggc3Bzcl9zIHNwc3JfZiBzcHNyX2N4IHNwc3JfY3hzIHNwc3JfeHMgc3Bzcl94c2Ygc3Bzcl9zZiBzcHNyX2N4c2YgJytcblxuICAgICAgICAvL05FT04gYW5kIFZGUCByZWdpc3RlcnNcbiAgICAgICAgJ3MwIHMxIHMyIHMzIHM0IHM1IHM2IHM3IHM4IHM5IHMxMCBzMTEgczEyIHMxMyBzMTQgczE1ICcrXG4gICAgICAgICdzMTYgczE3IHMxOCBzMTkgczIwIHMyMSBzMjIgczIzIHMyNCBzMjUgczI2IHMyNyBzMjggczI5IHMzMCBzMzEgJytcbiAgICAgICAgJ2QwIGQxIGQyIGQzIGQ0IGQ1IGQ2IGQ3IGQ4IGQ5IGQxMCBkMTEgZDEyIGQxMyBkMTQgZDE1ICcrXG4gICAgICAgICdkMTYgZDE3IGQxOCBkMTkgZDIwIGQyMSBkMjIgZDIzIGQyNCBkMjUgZDI2IGQyNyBkMjggZDI5IGQzMCBkMzEgJyArXG5cbiAgICAgICAgJ3tQQ30ge1ZBUn0ge1RSVUV9IHtGQUxTRX0ge09QVH0ge0NPTkZJR30ge0VORElBTn0ge0NPREVTSVpFfSB7Q1BVfSB7RlBVfSB7QVJDSElURUNUVVJFfSB7UENTVE9SRU9GRlNFVH0ge0FSTUFTTV9WRVJTSU9OfSB7SU5URVJ9IHtST1BJfSB7UldQSX0ge1NXU1R9IHtOT1NXU1R9IC4gQCdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKCcrICAgICAvL21uZW1vbmljc1xuICAgICAgICAgICAgJ2FkY3wnK1xuICAgICAgICAgICAgJyhxZD98c2g/fHVbcWhdPyk/YWRkKDh8MTYpP3x1c2FkYT84fChxfHNoP3x1W3FoXT8pPyhhc3xzYSl4fCcrXG4gICAgICAgICAgICAnYW5kfGFkcmw/fHNiY3xyc1tiY118YXNyfGJbbHhdP3xibHh8YnhqfGNibj96fHRiW2JoXXxiaWN8JytcbiAgICAgICAgICAgICdiZmN8YmZpfFtzdV1iZnh8YmtwdHxjZHAyP3xjbHp8Y2xyZXh8Y21wfGNtbnxjcHNpW2VkXXxjcHN8JytcbiAgICAgICAgICAgICdzZXRlbmR8ZGJnfGRtYnxkc2J8ZW9yfGlzYnxpdFt0ZV17MCwzfXxsc2x8bHNyfHJvcnxycnh8JytcbiAgICAgICAgICAgICdsZG0oKFtpZF1bYWJdKXxmW2RzXSk/fGxkcigoc3xleCk/W2JoZF0pP3xtb3Z0P3xtdm58bXJhfG1hcnwnK1xuICAgICAgICAgICAgJ211bHxbdXNdbXVsbHxzbXVsW2J3dF1bYnRdfHNtdVthc11kfHNtbXVsfHNtbWxhfCcrXG4gICAgICAgICAgICAnbWxhfHVtbGFhbHxzbWxhbD8oW3didF1bYnRdfGQpfG1sc3xzbWxzbD9bZHNdfHNtY3xzdmN8c2V2fCcrXG4gICAgICAgICAgICAnbWlhKFtidF17Mn18cGgpP3xtcnI/YzI/fG1jcnIyP3xtcnN8bXNyfG9ycnxvcm58cGtoKHRifGJ0KXxyYml0fCcrXG4gICAgICAgICAgICAncmV2KDE2fHNoKT98c2VsfFtzdV1zYXQoMTYpP3xub3B8cG9wfHB1c2h8cmZlKFtpZF1bYWJdKT98JytcbiAgICAgICAgICAgICdzdG0oW2lkXVthYl0pP3xzdHIoZXgpP1tiaGRdP3wocWQ/KT9zdWJ8KHNoP3xxfHVbcWhdPyk/c3ViKDh8MTYpfCcrXG4gICAgICAgICAgICAnW3N1XXh0KGE/aHxhP2IoMTYpPyl8c3JzKFtpZF1bYWJdKT98c3dwYj98c3dpfHNtaXx0c3R8dGVxfCcrXG4gICAgICAgICAgICAnd2ZlfHdmaXx5aWVsZCcrXG4gICAgICAgICcpJytcbiAgICAgICAgJyhlcXxuZXxjc3xjY3xtaXxwbHx2c3x2Y3xoaXxsc3xnZXxsdHxndHxsZXxhbHxoc3xsbyk/JysgLy9jb25kaXRpb24gY29kZXNcbiAgICAgICAgJ1tzcHRyeF0/JyArICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9sZWdhbCBwb3N0Zml4ZXNcbiAgICAgICAgJyg/PVxcXFxzKScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb2xsb3dlZCBieSBzcGFjZVxuICAgICAgfSxcbiAgICAgIENPTU1FTlQsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1xcJycsXG4gICAgICAgIGVuZDogJ1teXFxcXFxcXFxdXFwnJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgIGJlZ2luOiAnXFxcXHwnLCBlbmQ6ICdcXFxcfCcsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtiZWdpbjogJ1sjJD1dPzB4WzAtOWEtZl0rJ30sIC8vaGV4XG4gICAgICAgICAgICB7YmVnaW46ICdbIyQ9XT8wYlswMV0rJ30sICAgICAvL2JpblxuICAgICAgICAgICAge2JlZ2luOiAnWyMkPV1cXFxcZCsnfSwgICAgICAgIC8vbGl0ZXJhbFxuICAgICAgICAgICAge2JlZ2luOiAnXFxcXGJcXFxcZCsnfSAgICAgICAgICAgLy9iYXJlIG51bWJlclxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7YmVnaW46ICdeWyBcXFxcdF0qW2Etel9cXFxcLlxcXFwkXVthLXowLTlfXFxcXC5cXFxcJF0rOid9LCAvL0dOVSBBUk0gc3ludGF4XG4gICAgICAgICAgICB7YmVnaW46ICdeW2Etel9cXFxcLlxcXFwkXVthLXowLTlfXFxcXC5cXFxcJF0rJ30sIC8vQVJNIHN5bnRheFxuICAgICAgICAgICAge2JlZ2luOiAnWz0jXVxcXFx3KycgfSAgLy9sYWJlbCByZWZlcmVuY2VcbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFybWFzbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=