// Main reveal.js setup

/*global Reveal,hljs*/ // eslint declarations

// polyfills

if (!document.body.classList) {
    require('./node_modules/reveal.js/lib/js/classList.js');
}

// core

require('./node_modules/reveal.js/css/reveal.css');
require('./node_modules/reveal.js/lib/js/head.min.js');
require('./node_modules/reveal.js/js/reveal.js');

// styling

require('./node_modules/reveal.js/css/theme/black.css');
require('./node_modules/reveal.js/lib/css/zenburn.css');
require('./index.sass');

// plugins

require('./node_modules/reveal.js/plugin/zoom-js/zoom.js');
require('./node_modules/reveal.js/plugin/notes/notes.js');
require('./node_modules/reveal.js/plugin/highlight/highlight.js');

hljs.initHighlightingOnLoad();

// Printing and PDF exports
/*
let pdfStyle = require('./node_modules/reveal.js/css/print/pdf.css');
let paperStyle = require('./node_modules/reveal.js/css/print/paper.css');
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match(/print-pdf/gi) ? pdfStyle : paperStyle;
document.getElementsByTagName('head')[0].appendChild(link);
*/

// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  slideNumber: true,
  transition: 'none'
});
