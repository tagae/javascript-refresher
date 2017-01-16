// Main reveal.js setup
require('./node_modules/reveal.js/css/reveal.css');
require('./node_modules/reveal.js/css/theme/black.css');
require('./node_modules/reveal.js/lib/css/zenburn.css');
require('./node_modules/reveal.js/lib/js/head.min.js');
require('./node_modules/reveal.js/js/reveal.js');

// https://github.com/hakimel/reveal.js#configuration

require('./node_modules/reveal.js/plugin/highlight/highlight.js');
/*global hljs*/
hljs.initHighlightingOnLoad();
require('./node_modules/reveal.js/plugin/zoom-js/zoom.js');
require('./node_modules/reveal.js/plugin/notes/notes.js');

/*global Reveal*/
Reveal.initialize({
  slideNumber: true,
  history: true,
  transition: 'slide' // none/fade/slide/convex/concave/zoom
});
