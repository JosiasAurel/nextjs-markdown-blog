(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

/***/ "./content/install-vscode-on-android.md":
/*!**********************************************!*\
  !*** ./content/install-vscode-on-android.md ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\r\ntitle : Install VSCode on an Android Phone\r\ndate : 2020-11-01\r\n---\r\n\r\nHey guys. Today i am going to show you how to install \r\nVSCode on android. If you read my [previous post](https://dev.to/josiasaurel/how-to-install-vscode-on-android-5f8d),\r\nyou probably have it working. In this new post i am going to\r\nshow you how to install VSCode without having to install a \r\nlinux distro in termux. We are going to use barebones termux\r\nand some additional packages.\r\n\r\nLet's Start\r\n\r\nFirst thing is to install [termux](https://play.google.com/store/apps/details?id=com.termux)\r\n\r\nOnce you have that installed, we can proceed to the next steps\r\n\r\nInstall NodeJS in termux with the following command\r\n```shell\r\n$ pkg install nodejs\r\n```\r\n\r\nTermux is going to install NodeJS and npm. If any question is asked during the installation, accept it.\r\n\r\nNext we are going to install [yarn pkg](https://yarnpkg.com/) and then use it to install code-server\r\n\r\nRun the below commands\r\n\r\n```shell\r\n$ npm i -g yarn\r\n```\r\nThe above will install yarn\r\n\r\n```shell\r\n$ yarn global add code-server\r\n```\r\n\r\nThe above command will install code-server globally in your system.\r\n\r\nNow you may ask why we did not directly use ``` npm ``` to install code-server\r\nThe reason is i have encoutered issues when installing it through npm, in fact, it did mot work at all.\r\n\r\nIf you have gone through the above steps, you can now launch ``` code-server ``` anywhere in your terminal by typing\r\n```shell\r\n$ code-server\r\n```\r\nIt will launch and give you a link you can open in your browser. You can optionally add it to your home screen if you are using chrome.\r\n\r\nEach time you launch it, you'll be asked for a password which is found in a config file in termux ``` HOME ```\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGVudC9pbnN0YWxsLXZzY29kZS1vbi1hbmRyb2lkLm1kIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFlLHMzREFBdXpELEUiLCJmaWxlIjoic3RhdGljL2NodW5rcy80LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCItLS1cXHJcXG50aXRsZSA6IEluc3RhbGwgVlNDb2RlIG9uIGFuIEFuZHJvaWQgUGhvbmVcXHJcXG5kYXRlIDogMjAyMC0xMS0wMVxcclxcbi0tLVxcclxcblxcclxcbkhleSBndXlzLiBUb2RheSBpIGFtIGdvaW5nIHRvIHNob3cgeW91IGhvdyB0byBpbnN0YWxsIFxcclxcblZTQ29kZSBvbiBhbmRyb2lkLiBJZiB5b3UgcmVhZCBteSBbcHJldmlvdXMgcG9zdF0oaHR0cHM6Ly9kZXYudG8vam9zaWFzYXVyZWwvaG93LXRvLWluc3RhbGwtdnNjb2RlLW9uLWFuZHJvaWQtNWY4ZCksXFxyXFxueW91IHByb2JhYmx5IGhhdmUgaXQgd29ya2luZy4gSW4gdGhpcyBuZXcgcG9zdCBpIGFtIGdvaW5nIHRvXFxyXFxuc2hvdyB5b3UgaG93IHRvIGluc3RhbGwgVlNDb2RlIHdpdGhvdXQgaGF2aW5nIHRvIGluc3RhbGwgYSBcXHJcXG5saW51eCBkaXN0cm8gaW4gdGVybXV4LiBXZSBhcmUgZ29pbmcgdG8gdXNlIGJhcmVib25lcyB0ZXJtdXhcXHJcXG5hbmQgc29tZSBhZGRpdGlvbmFsIHBhY2thZ2VzLlxcclxcblxcclxcbkxldCdzIFN0YXJ0XFxyXFxuXFxyXFxuRmlyc3QgdGhpbmcgaXMgdG8gaW5zdGFsbCBbdGVybXV4XShodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLnRlcm11eClcXHJcXG5cXHJcXG5PbmNlIHlvdSBoYXZlIHRoYXQgaW5zdGFsbGVkLCB3ZSBjYW4gcHJvY2VlZCB0byB0aGUgbmV4dCBzdGVwc1xcclxcblxcclxcbkluc3RhbGwgTm9kZUpTIGluIHRlcm11eCB3aXRoIHRoZSBmb2xsb3dpbmcgY29tbWFuZFxcclxcbmBgYHNoZWxsXFxyXFxuJCBwa2cgaW5zdGFsbCBub2RlanNcXHJcXG5gYGBcXHJcXG5cXHJcXG5UZXJtdXggaXMgZ29pbmcgdG8gaW5zdGFsbCBOb2RlSlMgYW5kIG5wbS4gSWYgYW55IHF1ZXN0aW9uIGlzIGFza2VkIGR1cmluZyB0aGUgaW5zdGFsbGF0aW9uLCBhY2NlcHQgaXQuXFxyXFxuXFxyXFxuTmV4dCB3ZSBhcmUgZ29pbmcgdG8gaW5zdGFsbCBbeWFybiBwa2ddKGh0dHBzOi8veWFybnBrZy5jb20vKSBhbmQgdGhlbiB1c2UgaXQgdG8gaW5zdGFsbCBjb2RlLXNlcnZlclxcclxcblxcclxcblJ1biB0aGUgYmVsb3cgY29tbWFuZHNcXHJcXG5cXHJcXG5gYGBzaGVsbFxcclxcbiQgbnBtIGkgLWcgeWFyblxcclxcbmBgYFxcclxcblRoZSBhYm92ZSB3aWxsIGluc3RhbGwgeWFyblxcclxcblxcclxcbmBgYHNoZWxsXFxyXFxuJCB5YXJuIGdsb2JhbCBhZGQgY29kZS1zZXJ2ZXJcXHJcXG5gYGBcXHJcXG5cXHJcXG5UaGUgYWJvdmUgY29tbWFuZCB3aWxsIGluc3RhbGwgY29kZS1zZXJ2ZXIgZ2xvYmFsbHkgaW4geW91ciBzeXN0ZW0uXFxyXFxuXFxyXFxuTm93IHlvdSBtYXkgYXNrIHdoeSB3ZSBkaWQgbm90IGRpcmVjdGx5IHVzZSBgYGAgbnBtIGBgYCB0byBpbnN0YWxsIGNvZGUtc2VydmVyXFxyXFxuVGhlIHJlYXNvbiBpcyBpIGhhdmUgZW5jb3V0ZXJlZCBpc3N1ZXMgd2hlbiBpbnN0YWxsaW5nIGl0IHRocm91Z2ggbnBtLCBpbiBmYWN0LCBpdCBkaWQgbW90IHdvcmsgYXQgYWxsLlxcclxcblxcclxcbklmIHlvdSBoYXZlIGdvbmUgdGhyb3VnaCB0aGUgYWJvdmUgc3RlcHMsIHlvdSBjYW4gbm93IGxhdW5jaCBgYGAgY29kZS1zZXJ2ZXIgYGBgIGFueXdoZXJlIGluIHlvdXIgdGVybWluYWwgYnkgdHlwaW5nXFxyXFxuYGBgc2hlbGxcXHJcXG4kIGNvZGUtc2VydmVyXFxyXFxuYGBgXFxyXFxuSXQgd2lsbCBsYXVuY2ggYW5kIGdpdmUgeW91IGEgbGluayB5b3UgY2FuIG9wZW4gaW4geW91ciBicm93c2VyLiBZb3UgY2FuIG9wdGlvbmFsbHkgYWRkIGl0IHRvIHlvdXIgaG9tZSBzY3JlZW4gaWYgeW91IGFyZSB1c2luZyBjaHJvbWUuXFxyXFxuXFxyXFxuRWFjaCB0aW1lIHlvdSBsYXVuY2ggaXQsIHlvdSdsbCBiZSBhc2tlZCBmb3IgYSBwYXNzd29yZCB3aGljaCBpcyBmb3VuZCBpbiBhIGNvbmZpZyBmaWxlIGluIHRlcm11eCBgYGAgSE9NRSBgYGBcXHJcXG5cXHJcXG5cIjsiXSwic291cmNlUm9vdCI6IiJ9