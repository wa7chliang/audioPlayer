!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("player",[],e):"object"==typeof exports?exports.player=e():t.player=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=t=>{const e={playType:"loop",mutex:!0};for(const n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(t[n]=e[n]);return t};const s=[{name:"ended",func:t=>{"loop"===t.options.playType&&(t.options.songList.length>1?t.next():t.play())}}];function i(t,e){"string"==typeof t.options.songList[e]?t.options.self.src=t.options.songList[e]:t.options.self.src=t.options.songList[e].url}const r=[];var p=class{constructor(t){this.options=o(t),this.songIndex=0,this.buffered,this.template(),this.initEvent(),r.push(this)}template(){let{el:t,songList:e}=this.options;this.options.self=document.createElement("audio"),this.options.self.controls=!0,"string"==typeof e[this.songIndex]?this.options.self.src=e[this.songIndex]:this.options.self.src=e[this.songIndex].url,document.querySelector(t).appendChild(this.options.self),this.options.self.style.display="none"}play(){if(this.options.self.play(),this.options.mutex)for(let t=0;t<r.length;t++)this!==r[t]&&r[t].pause()}pause(){this.options.self.pause()}toggle(){this.options.self.paused?this.play():this.pause()}initEvent(){let t=this;for(let e=0;e<s.length;e++)this.options.self.addEventListener(s[e].name,()=>{s[e].func(t)})}next(){this.pause(),this.songIndex<this.options.songList.length-1?i(this,++this.songIndex):i(this,this.songIndex=0),this.play()}prev(){this.pause(),0!==this.songIndex?i(this,--this.songIndex):i(this,this.songIndex=this.options.songList.length-1),this.play()}getBufferedPercent(){if(this.options.self.buffered.length)return Math.floor(100*this.options.self.buffered.end(this.options.self.buffered.length-1)/this.options.self.duration)}getCurrentTimePercent(){return Math.floor(100*this.options.self.currentTime/this.options.self.duration)}};e.default=p}])});
//# sourceMappingURL=player.js.map