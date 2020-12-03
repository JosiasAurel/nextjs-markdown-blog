(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([["react-syntax-highlighter_languages_highlight_vim"],{

/***/ "./node_modules/highlight.js/lib/languages/vim.js":
/*!********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/vim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
Language: Vim Script
Author: Jun Yang <yangjvn@126.com>
Description: full keyword and built-in from http://vimdoc.sourceforge.net/htmldoc/
Website: https://www.vim.org
Category: scripting
*/

function vim(hljs) {
  return {
    name: 'Vim Script',
    keywords: {
      $pattern: /[!#@\w]+/,
      keyword:
        // express version except: ! & * < = > !! # @ @@
        'N|0 P|0 X|0 a|0 ab abc abo al am an|0 ar arga argd arge argdo argg argl argu as au aug aun b|0 bN ba bad bd be bel bf bl bm bn bo bp br brea breaka breakd breakl bro bufdo buffers bun bw c|0 cN cNf ca cabc caddb cad caddf cal cat cb cc ccl cd ce cex cf cfir cgetb cgete cg changes chd che checkt cl cla clo cm cmapc cme cn cnew cnf cno cnorea cnoreme co col colo com comc comp con conf cope '+
        'cp cpf cq cr cs cst cu cuna cunme cw delm deb debugg delc delf dif diffg diffo diffp diffpu diffs diffthis dig di dl dell dj dli do doautoa dp dr ds dsp e|0 ea ec echoe echoh echom echon el elsei em en endfo endf endt endw ene ex exe exi exu f|0 files filet fin fina fini fir fix fo foldc foldd folddoc foldo for fu go gr grepa gu gv ha helpf helpg helpt hi hid his ia iabc if ij il im imapc '+
        'ime ino inorea inoreme int is isp iu iuna iunme j|0 ju k|0 keepa kee keepj lN lNf l|0 lad laddb laddf la lan lat lb lc lch lcl lcs le lefta let lex lf lfir lgetb lgete lg lgr lgrepa lh ll lla lli lmak lm lmapc lne lnew lnf ln loadk lo loc lockv lol lope lp lpf lr ls lt lu lua luad luaf lv lvimgrepa lw m|0 ma mak map mapc marks mat me menut mes mk mks mksp mkv mkvie mod mz mzf nbc nb nbs new nm nmapc nme nn nnoreme noa no noh norea noreme norm nu nun nunme ol o|0 om omapc ome on ono onoreme opt ou ounme ow p|0 '+
        'profd prof pro promptr pc ped pe perld po popu pp pre prev ps pt ptN ptf ptj ptl ptn ptp ptr pts pu pw py3 python3 py3d py3f py pyd pyf quita qa rec red redi redr redraws reg res ret retu rew ri rightb rub rubyd rubyf rund ru rv sN san sa sal sav sb sbN sba sbf sbl sbm sbn sbp sbr scrip scripte scs se setf setg setl sf sfir sh sim sig sil sl sla sm smap smapc sme sn sni sno snor snoreme sor '+
        'so spelld spe spelli spellr spellu spellw sp spr sre st sta startg startr star stopi stj sts sun sunm sunme sus sv sw sy synti sync tN tabN tabc tabdo tabe tabf tabfir tabl tabm tabnew '+
        'tabn tabo tabp tabr tabs tab ta tags tc tcld tclf te tf th tj tl tm tn to tp tr try ts tu u|0 undoj undol una unh unl unlo unm unme uns up ve verb vert vim vimgrepa vi viu vie vm vmapc vme vne vn vnoreme vs vu vunme windo w|0 wN wa wh wi winc winp wn wp wq wqa ws wu wv x|0 xa xmapc xm xme xn xnoreme xu xunme y|0 z|0 ~ '+
        // full version
        'Next Print append abbreviate abclear aboveleft all amenu anoremenu args argadd argdelete argedit argglobal arglocal argument ascii autocmd augroup aunmenu buffer bNext ball badd bdelete behave belowright bfirst blast bmodified bnext botright bprevious brewind break breakadd breakdel breaklist browse bunload '+
        'bwipeout change cNext cNfile cabbrev cabclear caddbuffer caddexpr caddfile call catch cbuffer cclose center cexpr cfile cfirst cgetbuffer cgetexpr cgetfile chdir checkpath checktime clist clast close cmap cmapclear cmenu cnext cnewer cnfile cnoremap cnoreabbrev cnoremenu copy colder colorscheme command comclear compiler continue confirm copen cprevious cpfile cquit crewind cscope cstag cunmap '+
        'cunabbrev cunmenu cwindow delete delmarks debug debuggreedy delcommand delfunction diffupdate diffget diffoff diffpatch diffput diffsplit digraphs display deletel djump dlist doautocmd doautoall deletep drop dsearch dsplit edit earlier echo echoerr echohl echomsg else elseif emenu endif endfor '+
        'endfunction endtry endwhile enew execute exit exusage file filetype find finally finish first fixdel fold foldclose folddoopen folddoclosed foldopen function global goto grep grepadd gui gvim hardcopy help helpfind helpgrep helptags highlight hide history insert iabbrev iabclear ijump ilist imap '+
        'imapclear imenu inoremap inoreabbrev inoremenu intro isearch isplit iunmap iunabbrev iunmenu join jumps keepalt keepmarks keepjumps lNext lNfile list laddexpr laddbuffer laddfile last language later lbuffer lcd lchdir lclose lcscope left leftabove lexpr lfile lfirst lgetbuffer lgetexpr lgetfile lgrep lgrepadd lhelpgrep llast llist lmake lmap lmapclear lnext lnewer lnfile lnoremap loadkeymap loadview '+
        'lockmarks lockvar lolder lopen lprevious lpfile lrewind ltag lunmap luado luafile lvimgrep lvimgrepadd lwindow move mark make mapclear match menu menutranslate messages mkexrc mksession mkspell mkvimrc mkview mode mzscheme mzfile nbclose nbkey nbsart next nmap nmapclear nmenu nnoremap '+
        'nnoremenu noautocmd noremap nohlsearch noreabbrev noremenu normal number nunmap nunmenu oldfiles open omap omapclear omenu only onoremap onoremenu options ounmap ounmenu ownsyntax print profdel profile promptfind promptrepl pclose pedit perl perldo pop popup ppop preserve previous psearch ptag ptNext '+
        'ptfirst ptjump ptlast ptnext ptprevious ptrewind ptselect put pwd py3do py3file python pydo pyfile quit quitall qall read recover redo redir redraw redrawstatus registers resize retab return rewind right rightbelow ruby rubydo rubyfile rundo runtime rviminfo substitute sNext sandbox sargument sall saveas sbuffer sbNext sball sbfirst sblast sbmodified sbnext sbprevious sbrewind scriptnames scriptencoding '+
        'scscope set setfiletype setglobal setlocal sfind sfirst shell simalt sign silent sleep slast smagic smapclear smenu snext sniff snomagic snoremap snoremenu sort source spelldump spellgood spellinfo spellrepall spellundo spellwrong split sprevious srewind stop stag startgreplace startreplace '+
        'startinsert stopinsert stjump stselect sunhide sunmap sunmenu suspend sview swapname syntax syntime syncbind tNext tabNext tabclose tabedit tabfind tabfirst tablast tabmove tabnext tabonly tabprevious tabrewind tag tcl tcldo tclfile tearoff tfirst throw tjump tlast tmenu tnext topleft tprevious '+'trewind tselect tunmenu undo undojoin undolist unabbreviate unhide unlet unlockvar unmap unmenu unsilent update vglobal version verbose vertical vimgrep vimgrepadd visual viusage view vmap vmapclear vmenu vnew '+
        'vnoremap vnoremenu vsplit vunmap vunmenu write wNext wall while winsize wincmd winpos wnext wprevious wqall wsverb wundo wviminfo xit xall xmapclear xmap xmenu xnoremap xnoremenu xunmap xunmenu yank',
      built_in: //built in func
        'synIDtrans atan2 range matcharg did_filetype asin feedkeys xor argv ' +
        'complete_check add getwinposx getqflist getwinposy screencol ' +
        'clearmatches empty extend getcmdpos mzeval garbagecollect setreg ' +
        'ceil sqrt diff_hlID inputsecret get getfperm getpid filewritable ' +
        'shiftwidth max sinh isdirectory synID system inputrestore winline ' +
        'atan visualmode inputlist tabpagewinnr round getregtype mapcheck ' +
        'hasmapto histdel argidx findfile sha256 exists toupper getcmdline ' +
        'taglist string getmatches bufnr strftime winwidth bufexists ' +
        'strtrans tabpagebuflist setcmdpos remote_read printf setloclist ' +
        'getpos getline bufwinnr float2nr len getcmdtype diff_filler luaeval ' +
        'resolve libcallnr foldclosedend reverse filter has_key bufname ' +
        'str2float strlen setline getcharmod setbufvar index searchpos ' +
        'shellescape undofile foldclosed setqflist buflisted strchars str2nr ' +
        'virtcol floor remove undotree remote_expr winheight gettabwinvar ' +
        'reltime cursor tabpagenr finddir localtime acos getloclist search ' +
        'tanh matchend rename gettabvar strdisplaywidth type abs py3eval ' +
        'setwinvar tolower wildmenumode log10 spellsuggest bufloaded ' +
        'synconcealed nextnonblank server2client complete settabwinvar ' +
        'executable input wincol setmatches getftype hlID inputsave ' +
        'searchpair or screenrow line settabvar histadd deepcopy strpart ' +
        'remote_peek and eval getftime submatch screenchar winsaveview ' +
        'matchadd mkdir screenattr getfontname libcall reltimestr getfsize ' +
        'winnr invert pow getbufline byte2line soundfold repeat fnameescape ' +
        'tagfiles sin strwidth spellbadword trunc maparg log lispindent ' +
        'hostname setpos globpath remote_foreground getchar synIDattr ' +
        'fnamemodify cscope_connection stridx winbufnr indent min ' +
        'complete_add nr2char searchpairpos inputdialog values matchlist ' +
        'items hlexists strridx browsedir expand fmod pathshorten line2byte ' +
        'argc count getwinvar glob foldtextresult getreg foreground cosh ' +
        'matchdelete has char2nr simplify histget searchdecl iconv ' +
        'winrestcmd pumvisible writefile foldlevel haslocaldir keys cos ' +
        'matchstr foldtext histnr tan tempname getcwd byteidx getbufvar ' +
        'islocked escape eventhandler remote_send serverlist winrestview ' +
        'synstack pyeval prevnonblank readfile cindent filereadable changenr ' +
        'exp'
    },
    illegal: /;/,
    contains: [
      hljs.NUMBER_MODE,
      {
        className: 'string',
        begin: '\'', end: '\'',
        illegal: '\\n'
      },

      /*
      A double quote can start either a string or a line comment. Strings are
      ended before the end of a line by another double quote and can contain
      escaped double-quotes and post-escaped line breaks.

      Also, any double quote at the beginning of a line is a comment but we
      don't handle that properly at the moment: any double quote inside will
      turn them into a string. Handling it properly will require a smarter
      parser.
      */
      {
        className: 'string',
        begin: /"(\\"|\n\\|[^"\n])*"/
      },
      hljs.COMMENT('"', '$'),

      {
        className: 'variable',
        begin: /[bwtglsav]:[\w\d_]*/
      },
      {
        className: 'function',
        beginKeywords: 'function function!', end: '$',
        relevance: 0,
        contains: [
          hljs.TITLE_MODE,
          {
            className: 'params',
            begin: '\\(', end: '\\)'
          }
        ]
      },
      {
        className: 'symbol',
        begin: /<[\w-]+>/
      }
    ]
  };
}

module.exports = vim;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3ZpbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19oaWdobGlnaHRfdmltLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkxhbmd1YWdlOiBWaW0gU2NyaXB0XG5BdXRob3I6IEp1biBZYW5nIDx5YW5nanZuQDEyNi5jb20+XG5EZXNjcmlwdGlvbjogZnVsbCBrZXl3b3JkIGFuZCBidWlsdC1pbiBmcm9tIGh0dHA6Ly92aW1kb2Muc291cmNlZm9yZ2UubmV0L2h0bWxkb2MvXG5XZWJzaXRlOiBodHRwczovL3d3dy52aW0ub3JnXG5DYXRlZ29yeTogc2NyaXB0aW5nXG4qL1xuXG5mdW5jdGlvbiB2aW0oaGxqcykge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdWaW0gU2NyaXB0JyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAgJHBhdHRlcm46IC9bISNAXFx3XSsvLFxuICAgICAga2V5d29yZDpcbiAgICAgICAgLy8gZXhwcmVzcyB2ZXJzaW9uIGV4Y2VwdDogISAmICogPCA9ID4gISEgIyBAIEBAXG4gICAgICAgICdOfDAgUHwwIFh8MCBhfDAgYWIgYWJjIGFibyBhbCBhbSBhbnwwIGFyIGFyZ2EgYXJnZCBhcmdlIGFyZ2RvIGFyZ2cgYXJnbCBhcmd1IGFzIGF1IGF1ZyBhdW4gYnwwIGJOIGJhIGJhZCBiZCBiZSBiZWwgYmYgYmwgYm0gYm4gYm8gYnAgYnIgYnJlYSBicmVha2EgYnJlYWtkIGJyZWFrbCBicm8gYnVmZG8gYnVmZmVycyBidW4gYncgY3wwIGNOIGNOZiBjYSBjYWJjIGNhZGRiIGNhZCBjYWRkZiBjYWwgY2F0IGNiIGNjIGNjbCBjZCBjZSBjZXggY2YgY2ZpciBjZ2V0YiBjZ2V0ZSBjZyBjaGFuZ2VzIGNoZCBjaGUgY2hlY2t0IGNsIGNsYSBjbG8gY20gY21hcGMgY21lIGNuIGNuZXcgY25mIGNubyBjbm9yZWEgY25vcmVtZSBjbyBjb2wgY29sbyBjb20gY29tYyBjb21wIGNvbiBjb25mIGNvcGUgJytcbiAgICAgICAgJ2NwIGNwZiBjcSBjciBjcyBjc3QgY3UgY3VuYSBjdW5tZSBjdyBkZWxtIGRlYiBkZWJ1Z2cgZGVsYyBkZWxmIGRpZiBkaWZmZyBkaWZmbyBkaWZmcCBkaWZmcHUgZGlmZnMgZGlmZnRoaXMgZGlnIGRpIGRsIGRlbGwgZGogZGxpIGRvIGRvYXV0b2EgZHAgZHIgZHMgZHNwIGV8MCBlYSBlYyBlY2hvZSBlY2hvaCBlY2hvbSBlY2hvbiBlbCBlbHNlaSBlbSBlbiBlbmRmbyBlbmRmIGVuZHQgZW5kdyBlbmUgZXggZXhlIGV4aSBleHUgZnwwIGZpbGVzIGZpbGV0IGZpbiBmaW5hIGZpbmkgZmlyIGZpeCBmbyBmb2xkYyBmb2xkZCBmb2xkZG9jIGZvbGRvIGZvciBmdSBnbyBnciBncmVwYSBndSBndiBoYSBoZWxwZiBoZWxwZyBoZWxwdCBoaSBoaWQgaGlzIGlhIGlhYmMgaWYgaWogaWwgaW0gaW1hcGMgJytcbiAgICAgICAgJ2ltZSBpbm8gaW5vcmVhIGlub3JlbWUgaW50IGlzIGlzcCBpdSBpdW5hIGl1bm1lIGp8MCBqdSBrfDAga2VlcGEga2VlIGtlZXBqIGxOIGxOZiBsfDAgbGFkIGxhZGRiIGxhZGRmIGxhIGxhbiBsYXQgbGIgbGMgbGNoIGxjbCBsY3MgbGUgbGVmdGEgbGV0IGxleCBsZiBsZmlyIGxnZXRiIGxnZXRlIGxnIGxnciBsZ3JlcGEgbGggbGwgbGxhIGxsaSBsbWFrIGxtIGxtYXBjIGxuZSBsbmV3IGxuZiBsbiBsb2FkayBsbyBsb2MgbG9ja3YgbG9sIGxvcGUgbHAgbHBmIGxyIGxzIGx0IGx1IGx1YSBsdWFkIGx1YWYgbHYgbHZpbWdyZXBhIGx3IG18MCBtYSBtYWsgbWFwIG1hcGMgbWFya3MgbWF0IG1lIG1lbnV0IG1lcyBtayBta3MgbWtzcCBta3YgbWt2aWUgbW9kIG16IG16ZiBuYmMgbmIgbmJzIG5ldyBubSBubWFwYyBubWUgbm4gbm5vcmVtZSBub2Egbm8gbm9oIG5vcmVhIG5vcmVtZSBub3JtIG51IG51biBudW5tZSBvbCBvfDAgb20gb21hcGMgb21lIG9uIG9ubyBvbm9yZW1lIG9wdCBvdSBvdW5tZSBvdyBwfDAgJytcbiAgICAgICAgJ3Byb2ZkIHByb2YgcHJvIHByb21wdHIgcGMgcGVkIHBlIHBlcmxkIHBvIHBvcHUgcHAgcHJlIHByZXYgcHMgcHQgcHROIHB0ZiBwdGogcHRsIHB0biBwdHAgcHRyIHB0cyBwdSBwdyBweTMgcHl0aG9uMyBweTNkIHB5M2YgcHkgcHlkIHB5ZiBxdWl0YSBxYSByZWMgcmVkIHJlZGkgcmVkciByZWRyYXdzIHJlZyByZXMgcmV0IHJldHUgcmV3IHJpIHJpZ2h0YiBydWIgcnVieWQgcnVieWYgcnVuZCBydSBydiBzTiBzYW4gc2Egc2FsIHNhdiBzYiBzYk4gc2JhIHNiZiBzYmwgc2JtIHNibiBzYnAgc2JyIHNjcmlwIHNjcmlwdGUgc2NzIHNlIHNldGYgc2V0ZyBzZXRsIHNmIHNmaXIgc2ggc2ltIHNpZyBzaWwgc2wgc2xhIHNtIHNtYXAgc21hcGMgc21lIHNuIHNuaSBzbm8gc25vciBzbm9yZW1lIHNvciAnK1xuICAgICAgICAnc28gc3BlbGxkIHNwZSBzcGVsbGkgc3BlbGxyIHNwZWxsdSBzcGVsbHcgc3Agc3ByIHNyZSBzdCBzdGEgc3RhcnRnIHN0YXJ0ciBzdGFyIHN0b3BpIHN0aiBzdHMgc3VuIHN1bm0gc3VubWUgc3VzIHN2IHN3IHN5IHN5bnRpIHN5bmMgdE4gdGFiTiB0YWJjIHRhYmRvIHRhYmUgdGFiZiB0YWJmaXIgdGFibCB0YWJtIHRhYm5ldyAnK1xuICAgICAgICAndGFibiB0YWJvIHRhYnAgdGFiciB0YWJzIHRhYiB0YSB0YWdzIHRjIHRjbGQgdGNsZiB0ZSB0ZiB0aCB0aiB0bCB0bSB0biB0byB0cCB0ciB0cnkgdHMgdHUgdXwwIHVuZG9qIHVuZG9sIHVuYSB1bmggdW5sIHVubG8gdW5tIHVubWUgdW5zIHVwIHZlIHZlcmIgdmVydCB2aW0gdmltZ3JlcGEgdmkgdml1IHZpZSB2bSB2bWFwYyB2bWUgdm5lIHZuIHZub3JlbWUgdnMgdnUgdnVubWUgd2luZG8gd3wwIHdOIHdhIHdoIHdpIHdpbmMgd2lucCB3biB3cCB3cSB3cWEgd3Mgd3Ugd3YgeHwwIHhhIHhtYXBjIHhtIHhtZSB4biB4bm9yZW1lIHh1IHh1bm1lIHl8MCB6fDAgfiAnK1xuICAgICAgICAvLyBmdWxsIHZlcnNpb25cbiAgICAgICAgJ05leHQgUHJpbnQgYXBwZW5kIGFiYnJldmlhdGUgYWJjbGVhciBhYm92ZWxlZnQgYWxsIGFtZW51IGFub3JlbWVudSBhcmdzIGFyZ2FkZCBhcmdkZWxldGUgYXJnZWRpdCBhcmdnbG9iYWwgYXJnbG9jYWwgYXJndW1lbnQgYXNjaWkgYXV0b2NtZCBhdWdyb3VwIGF1bm1lbnUgYnVmZmVyIGJOZXh0IGJhbGwgYmFkZCBiZGVsZXRlIGJlaGF2ZSBiZWxvd3JpZ2h0IGJmaXJzdCBibGFzdCBibW9kaWZpZWQgYm5leHQgYm90cmlnaHQgYnByZXZpb3VzIGJyZXdpbmQgYnJlYWsgYnJlYWthZGQgYnJlYWtkZWwgYnJlYWtsaXN0IGJyb3dzZSBidW5sb2FkICcrXG4gICAgICAgICdid2lwZW91dCBjaGFuZ2UgY05leHQgY05maWxlIGNhYmJyZXYgY2FiY2xlYXIgY2FkZGJ1ZmZlciBjYWRkZXhwciBjYWRkZmlsZSBjYWxsIGNhdGNoIGNidWZmZXIgY2Nsb3NlIGNlbnRlciBjZXhwciBjZmlsZSBjZmlyc3QgY2dldGJ1ZmZlciBjZ2V0ZXhwciBjZ2V0ZmlsZSBjaGRpciBjaGVja3BhdGggY2hlY2t0aW1lIGNsaXN0IGNsYXN0IGNsb3NlIGNtYXAgY21hcGNsZWFyIGNtZW51IGNuZXh0IGNuZXdlciBjbmZpbGUgY25vcmVtYXAgY25vcmVhYmJyZXYgY25vcmVtZW51IGNvcHkgY29sZGVyIGNvbG9yc2NoZW1lIGNvbW1hbmQgY29tY2xlYXIgY29tcGlsZXIgY29udGludWUgY29uZmlybSBjb3BlbiBjcHJldmlvdXMgY3BmaWxlIGNxdWl0IGNyZXdpbmQgY3Njb3BlIGNzdGFnIGN1bm1hcCAnK1xuICAgICAgICAnY3VuYWJicmV2IGN1bm1lbnUgY3dpbmRvdyBkZWxldGUgZGVsbWFya3MgZGVidWcgZGVidWdncmVlZHkgZGVsY29tbWFuZCBkZWxmdW5jdGlvbiBkaWZmdXBkYXRlIGRpZmZnZXQgZGlmZm9mZiBkaWZmcGF0Y2ggZGlmZnB1dCBkaWZmc3BsaXQgZGlncmFwaHMgZGlzcGxheSBkZWxldGVsIGRqdW1wIGRsaXN0IGRvYXV0b2NtZCBkb2F1dG9hbGwgZGVsZXRlcCBkcm9wIGRzZWFyY2ggZHNwbGl0IGVkaXQgZWFybGllciBlY2hvIGVjaG9lcnIgZWNob2hsIGVjaG9tc2cgZWxzZSBlbHNlaWYgZW1lbnUgZW5kaWYgZW5kZm9yICcrXG4gICAgICAgICdlbmRmdW5jdGlvbiBlbmR0cnkgZW5kd2hpbGUgZW5ldyBleGVjdXRlIGV4aXQgZXh1c2FnZSBmaWxlIGZpbGV0eXBlIGZpbmQgZmluYWxseSBmaW5pc2ggZmlyc3QgZml4ZGVsIGZvbGQgZm9sZGNsb3NlIGZvbGRkb29wZW4gZm9sZGRvY2xvc2VkIGZvbGRvcGVuIGZ1bmN0aW9uIGdsb2JhbCBnb3RvIGdyZXAgZ3JlcGFkZCBndWkgZ3ZpbSBoYXJkY29weSBoZWxwIGhlbHBmaW5kIGhlbHBncmVwIGhlbHB0YWdzIGhpZ2hsaWdodCBoaWRlIGhpc3RvcnkgaW5zZXJ0IGlhYmJyZXYgaWFiY2xlYXIgaWp1bXAgaWxpc3QgaW1hcCAnK1xuICAgICAgICAnaW1hcGNsZWFyIGltZW51IGlub3JlbWFwIGlub3JlYWJicmV2IGlub3JlbWVudSBpbnRybyBpc2VhcmNoIGlzcGxpdCBpdW5tYXAgaXVuYWJicmV2IGl1bm1lbnUgam9pbiBqdW1wcyBrZWVwYWx0IGtlZXBtYXJrcyBrZWVwanVtcHMgbE5leHQgbE5maWxlIGxpc3QgbGFkZGV4cHIgbGFkZGJ1ZmZlciBsYWRkZmlsZSBsYXN0IGxhbmd1YWdlIGxhdGVyIGxidWZmZXIgbGNkIGxjaGRpciBsY2xvc2UgbGNzY29wZSBsZWZ0IGxlZnRhYm92ZSBsZXhwciBsZmlsZSBsZmlyc3QgbGdldGJ1ZmZlciBsZ2V0ZXhwciBsZ2V0ZmlsZSBsZ3JlcCBsZ3JlcGFkZCBsaGVscGdyZXAgbGxhc3QgbGxpc3QgbG1ha2UgbG1hcCBsbWFwY2xlYXIgbG5leHQgbG5ld2VyIGxuZmlsZSBsbm9yZW1hcCBsb2Fka2V5bWFwIGxvYWR2aWV3ICcrXG4gICAgICAgICdsb2NrbWFya3MgbG9ja3ZhciBsb2xkZXIgbG9wZW4gbHByZXZpb3VzIGxwZmlsZSBscmV3aW5kIGx0YWcgbHVubWFwIGx1YWRvIGx1YWZpbGUgbHZpbWdyZXAgbHZpbWdyZXBhZGQgbHdpbmRvdyBtb3ZlIG1hcmsgbWFrZSBtYXBjbGVhciBtYXRjaCBtZW51IG1lbnV0cmFuc2xhdGUgbWVzc2FnZXMgbWtleHJjIG1rc2Vzc2lvbiBta3NwZWxsIG1rdmltcmMgbWt2aWV3IG1vZGUgbXpzY2hlbWUgbXpmaWxlIG5iY2xvc2UgbmJrZXkgbmJzYXJ0IG5leHQgbm1hcCBubWFwY2xlYXIgbm1lbnUgbm5vcmVtYXAgJytcbiAgICAgICAgJ25ub3JlbWVudSBub2F1dG9jbWQgbm9yZW1hcCBub2hsc2VhcmNoIG5vcmVhYmJyZXYgbm9yZW1lbnUgbm9ybWFsIG51bWJlciBudW5tYXAgbnVubWVudSBvbGRmaWxlcyBvcGVuIG9tYXAgb21hcGNsZWFyIG9tZW51IG9ubHkgb25vcmVtYXAgb25vcmVtZW51IG9wdGlvbnMgb3VubWFwIG91bm1lbnUgb3duc3ludGF4IHByaW50IHByb2ZkZWwgcHJvZmlsZSBwcm9tcHRmaW5kIHByb21wdHJlcGwgcGNsb3NlIHBlZGl0IHBlcmwgcGVybGRvIHBvcCBwb3B1cCBwcG9wIHByZXNlcnZlIHByZXZpb3VzIHBzZWFyY2ggcHRhZyBwdE5leHQgJytcbiAgICAgICAgJ3B0Zmlyc3QgcHRqdW1wIHB0bGFzdCBwdG5leHQgcHRwcmV2aW91cyBwdHJld2luZCBwdHNlbGVjdCBwdXQgcHdkIHB5M2RvIHB5M2ZpbGUgcHl0aG9uIHB5ZG8gcHlmaWxlIHF1aXQgcXVpdGFsbCBxYWxsIHJlYWQgcmVjb3ZlciByZWRvIHJlZGlyIHJlZHJhdyByZWRyYXdzdGF0dXMgcmVnaXN0ZXJzIHJlc2l6ZSByZXRhYiByZXR1cm4gcmV3aW5kIHJpZ2h0IHJpZ2h0YmVsb3cgcnVieSBydWJ5ZG8gcnVieWZpbGUgcnVuZG8gcnVudGltZSBydmltaW5mbyBzdWJzdGl0dXRlIHNOZXh0IHNhbmRib3ggc2FyZ3VtZW50IHNhbGwgc2F2ZWFzIHNidWZmZXIgc2JOZXh0IHNiYWxsIHNiZmlyc3Qgc2JsYXN0IHNibW9kaWZpZWQgc2JuZXh0IHNicHJldmlvdXMgc2JyZXdpbmQgc2NyaXB0bmFtZXMgc2NyaXB0ZW5jb2RpbmcgJytcbiAgICAgICAgJ3Njc2NvcGUgc2V0IHNldGZpbGV0eXBlIHNldGdsb2JhbCBzZXRsb2NhbCBzZmluZCBzZmlyc3Qgc2hlbGwgc2ltYWx0IHNpZ24gc2lsZW50IHNsZWVwIHNsYXN0IHNtYWdpYyBzbWFwY2xlYXIgc21lbnUgc25leHQgc25pZmYgc25vbWFnaWMgc25vcmVtYXAgc25vcmVtZW51IHNvcnQgc291cmNlIHNwZWxsZHVtcCBzcGVsbGdvb2Qgc3BlbGxpbmZvIHNwZWxscmVwYWxsIHNwZWxsdW5kbyBzcGVsbHdyb25nIHNwbGl0IHNwcmV2aW91cyBzcmV3aW5kIHN0b3Agc3RhZyBzdGFydGdyZXBsYWNlIHN0YXJ0cmVwbGFjZSAnK1xuICAgICAgICAnc3RhcnRpbnNlcnQgc3RvcGluc2VydCBzdGp1bXAgc3RzZWxlY3Qgc3VuaGlkZSBzdW5tYXAgc3VubWVudSBzdXNwZW5kIHN2aWV3IHN3YXBuYW1lIHN5bnRheCBzeW50aW1lIHN5bmNiaW5kIHROZXh0IHRhYk5leHQgdGFiY2xvc2UgdGFiZWRpdCB0YWJmaW5kIHRhYmZpcnN0IHRhYmxhc3QgdGFibW92ZSB0YWJuZXh0IHRhYm9ubHkgdGFicHJldmlvdXMgdGFicmV3aW5kIHRhZyB0Y2wgdGNsZG8gdGNsZmlsZSB0ZWFyb2ZmIHRmaXJzdCB0aHJvdyB0anVtcCB0bGFzdCB0bWVudSB0bmV4dCB0b3BsZWZ0IHRwcmV2aW91cyAnKyd0cmV3aW5kIHRzZWxlY3QgdHVubWVudSB1bmRvIHVuZG9qb2luIHVuZG9saXN0IHVuYWJicmV2aWF0ZSB1bmhpZGUgdW5sZXQgdW5sb2NrdmFyIHVubWFwIHVubWVudSB1bnNpbGVudCB1cGRhdGUgdmdsb2JhbCB2ZXJzaW9uIHZlcmJvc2UgdmVydGljYWwgdmltZ3JlcCB2aW1ncmVwYWRkIHZpc3VhbCB2aXVzYWdlIHZpZXcgdm1hcCB2bWFwY2xlYXIgdm1lbnUgdm5ldyAnK1xuICAgICAgICAndm5vcmVtYXAgdm5vcmVtZW51IHZzcGxpdCB2dW5tYXAgdnVubWVudSB3cml0ZSB3TmV4dCB3YWxsIHdoaWxlIHdpbnNpemUgd2luY21kIHdpbnBvcyB3bmV4dCB3cHJldmlvdXMgd3FhbGwgd3N2ZXJiIHd1bmRvIHd2aW1pbmZvIHhpdCB4YWxsIHhtYXBjbGVhciB4bWFwIHhtZW51IHhub3JlbWFwIHhub3JlbWVudSB4dW5tYXAgeHVubWVudSB5YW5rJyxcbiAgICAgIGJ1aWx0X2luOiAvL2J1aWx0IGluIGZ1bmNcbiAgICAgICAgJ3N5bklEdHJhbnMgYXRhbjIgcmFuZ2UgbWF0Y2hhcmcgZGlkX2ZpbGV0eXBlIGFzaW4gZmVlZGtleXMgeG9yIGFyZ3YgJyArXG4gICAgICAgICdjb21wbGV0ZV9jaGVjayBhZGQgZ2V0d2lucG9zeCBnZXRxZmxpc3QgZ2V0d2lucG9zeSBzY3JlZW5jb2wgJyArXG4gICAgICAgICdjbGVhcm1hdGNoZXMgZW1wdHkgZXh0ZW5kIGdldGNtZHBvcyBtemV2YWwgZ2FyYmFnZWNvbGxlY3Qgc2V0cmVnICcgK1xuICAgICAgICAnY2VpbCBzcXJ0IGRpZmZfaGxJRCBpbnB1dHNlY3JldCBnZXQgZ2V0ZnBlcm0gZ2V0cGlkIGZpbGV3cml0YWJsZSAnICtcbiAgICAgICAgJ3NoaWZ0d2lkdGggbWF4IHNpbmggaXNkaXJlY3Rvcnkgc3luSUQgc3lzdGVtIGlucHV0cmVzdG9yZSB3aW5saW5lICcgK1xuICAgICAgICAnYXRhbiB2aXN1YWxtb2RlIGlucHV0bGlzdCB0YWJwYWdld2lubnIgcm91bmQgZ2V0cmVndHlwZSBtYXBjaGVjayAnICtcbiAgICAgICAgJ2hhc21hcHRvIGhpc3RkZWwgYXJnaWR4IGZpbmRmaWxlIHNoYTI1NiBleGlzdHMgdG91cHBlciBnZXRjbWRsaW5lICcgK1xuICAgICAgICAndGFnbGlzdCBzdHJpbmcgZ2V0bWF0Y2hlcyBidWZuciBzdHJmdGltZSB3aW53aWR0aCBidWZleGlzdHMgJyArXG4gICAgICAgICdzdHJ0cmFucyB0YWJwYWdlYnVmbGlzdCBzZXRjbWRwb3MgcmVtb3RlX3JlYWQgcHJpbnRmIHNldGxvY2xpc3QgJyArXG4gICAgICAgICdnZXRwb3MgZ2V0bGluZSBidWZ3aW5uciBmbG9hdDJuciBsZW4gZ2V0Y21kdHlwZSBkaWZmX2ZpbGxlciBsdWFldmFsICcgK1xuICAgICAgICAncmVzb2x2ZSBsaWJjYWxsbnIgZm9sZGNsb3NlZGVuZCByZXZlcnNlIGZpbHRlciBoYXNfa2V5IGJ1Zm5hbWUgJyArXG4gICAgICAgICdzdHIyZmxvYXQgc3RybGVuIHNldGxpbmUgZ2V0Y2hhcm1vZCBzZXRidWZ2YXIgaW5kZXggc2VhcmNocG9zICcgK1xuICAgICAgICAnc2hlbGxlc2NhcGUgdW5kb2ZpbGUgZm9sZGNsb3NlZCBzZXRxZmxpc3QgYnVmbGlzdGVkIHN0cmNoYXJzIHN0cjJuciAnICtcbiAgICAgICAgJ3ZpcnRjb2wgZmxvb3IgcmVtb3ZlIHVuZG90cmVlIHJlbW90ZV9leHByIHdpbmhlaWdodCBnZXR0YWJ3aW52YXIgJyArXG4gICAgICAgICdyZWx0aW1lIGN1cnNvciB0YWJwYWdlbnIgZmluZGRpciBsb2NhbHRpbWUgYWNvcyBnZXRsb2NsaXN0IHNlYXJjaCAnICtcbiAgICAgICAgJ3RhbmggbWF0Y2hlbmQgcmVuYW1lIGdldHRhYnZhciBzdHJkaXNwbGF5d2lkdGggdHlwZSBhYnMgcHkzZXZhbCAnICtcbiAgICAgICAgJ3NldHdpbnZhciB0b2xvd2VyIHdpbGRtZW51bW9kZSBsb2cxMCBzcGVsbHN1Z2dlc3QgYnVmbG9hZGVkICcgK1xuICAgICAgICAnc3luY29uY2VhbGVkIG5leHRub25ibGFuayBzZXJ2ZXIyY2xpZW50IGNvbXBsZXRlIHNldHRhYndpbnZhciAnICtcbiAgICAgICAgJ2V4ZWN1dGFibGUgaW5wdXQgd2luY29sIHNldG1hdGNoZXMgZ2V0ZnR5cGUgaGxJRCBpbnB1dHNhdmUgJyArXG4gICAgICAgICdzZWFyY2hwYWlyIG9yIHNjcmVlbnJvdyBsaW5lIHNldHRhYnZhciBoaXN0YWRkIGRlZXBjb3B5IHN0cnBhcnQgJyArXG4gICAgICAgICdyZW1vdGVfcGVlayBhbmQgZXZhbCBnZXRmdGltZSBzdWJtYXRjaCBzY3JlZW5jaGFyIHdpbnNhdmV2aWV3ICcgK1xuICAgICAgICAnbWF0Y2hhZGQgbWtkaXIgc2NyZWVuYXR0ciBnZXRmb250bmFtZSBsaWJjYWxsIHJlbHRpbWVzdHIgZ2V0ZnNpemUgJyArXG4gICAgICAgICd3aW5uciBpbnZlcnQgcG93IGdldGJ1ZmxpbmUgYnl0ZTJsaW5lIHNvdW5kZm9sZCByZXBlYXQgZm5hbWVlc2NhcGUgJyArXG4gICAgICAgICd0YWdmaWxlcyBzaW4gc3Ryd2lkdGggc3BlbGxiYWR3b3JkIHRydW5jIG1hcGFyZyBsb2cgbGlzcGluZGVudCAnICtcbiAgICAgICAgJ2hvc3RuYW1lIHNldHBvcyBnbG9icGF0aCByZW1vdGVfZm9yZWdyb3VuZCBnZXRjaGFyIHN5bklEYXR0ciAnICtcbiAgICAgICAgJ2ZuYW1lbW9kaWZ5IGNzY29wZV9jb25uZWN0aW9uIHN0cmlkeCB3aW5idWZuciBpbmRlbnQgbWluICcgK1xuICAgICAgICAnY29tcGxldGVfYWRkIG5yMmNoYXIgc2VhcmNocGFpcnBvcyBpbnB1dGRpYWxvZyB2YWx1ZXMgbWF0Y2hsaXN0ICcgK1xuICAgICAgICAnaXRlbXMgaGxleGlzdHMgc3RycmlkeCBicm93c2VkaXIgZXhwYW5kIGZtb2QgcGF0aHNob3J0ZW4gbGluZTJieXRlICcgK1xuICAgICAgICAnYXJnYyBjb3VudCBnZXR3aW52YXIgZ2xvYiBmb2xkdGV4dHJlc3VsdCBnZXRyZWcgZm9yZWdyb3VuZCBjb3NoICcgK1xuICAgICAgICAnbWF0Y2hkZWxldGUgaGFzIGNoYXIybnIgc2ltcGxpZnkgaGlzdGdldCBzZWFyY2hkZWNsIGljb252ICcgK1xuICAgICAgICAnd2lucmVzdGNtZCBwdW12aXNpYmxlIHdyaXRlZmlsZSBmb2xkbGV2ZWwgaGFzbG9jYWxkaXIga2V5cyBjb3MgJyArXG4gICAgICAgICdtYXRjaHN0ciBmb2xkdGV4dCBoaXN0bnIgdGFuIHRlbXBuYW1lIGdldGN3ZCBieXRlaWR4IGdldGJ1ZnZhciAnICtcbiAgICAgICAgJ2lzbG9ja2VkIGVzY2FwZSBldmVudGhhbmRsZXIgcmVtb3RlX3NlbmQgc2VydmVybGlzdCB3aW5yZXN0dmlldyAnICtcbiAgICAgICAgJ3N5bnN0YWNrIHB5ZXZhbCBwcmV2bm9uYmxhbmsgcmVhZGZpbGUgY2luZGVudCBmaWxlcmVhZGFibGUgY2hhbmdlbnIgJyArXG4gICAgICAgICdleHAnXG4gICAgfSxcbiAgICBpbGxlZ2FsOiAvOy8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuTlVNQkVSX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXFwnJywgZW5kOiAnXFwnJyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJ1xuICAgICAgfSxcblxuICAgICAgLypcbiAgICAgIEEgZG91YmxlIHF1b3RlIGNhbiBzdGFydCBlaXRoZXIgYSBzdHJpbmcgb3IgYSBsaW5lIGNvbW1lbnQuIFN0cmluZ3MgYXJlXG4gICAgICBlbmRlZCBiZWZvcmUgdGhlIGVuZCBvZiBhIGxpbmUgYnkgYW5vdGhlciBkb3VibGUgcXVvdGUgYW5kIGNhbiBjb250YWluXG4gICAgICBlc2NhcGVkIGRvdWJsZS1xdW90ZXMgYW5kIHBvc3QtZXNjYXBlZCBsaW5lIGJyZWFrcy5cblxuICAgICAgQWxzbywgYW55IGRvdWJsZSBxdW90ZSBhdCB0aGUgYmVnaW5uaW5nIG9mIGEgbGluZSBpcyBhIGNvbW1lbnQgYnV0IHdlXG4gICAgICBkb24ndCBoYW5kbGUgdGhhdCBwcm9wZXJseSBhdCB0aGUgbW9tZW50OiBhbnkgZG91YmxlIHF1b3RlIGluc2lkZSB3aWxsXG4gICAgICB0dXJuIHRoZW0gaW50byBhIHN0cmluZy4gSGFuZGxpbmcgaXQgcHJvcGVybHkgd2lsbCByZXF1aXJlIGEgc21hcnRlclxuICAgICAgcGFyc2VyLlxuICAgICAgKi9cbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46IC9cIihcXFxcXCJ8XFxuXFxcXHxbXlwiXFxuXSkqXCIvXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKCdcIicsICckJyksXG5cbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICBiZWdpbjogL1tid3RnbHNhdl06W1xcd1xcZF9dKi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmN0aW9uIGZ1bmN0aW9uIScsIGVuZDogJyQnLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5USVRMRV9NT0RFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFwoJywgZW5kOiAnXFxcXCknXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogLzxbXFx3LV0rPi9cbiAgICAgIH1cbiAgICBdXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdmltO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==