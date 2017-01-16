// Main reveal.js setup
require('./node_modules/reveal.js/css/reveal.css');
require('./node_modules/reveal.js/css/theme/black.css');
require('./node_modules/reveal.js/lib/css/zenburn.css');
require('./node_modules/reveal.js/lib/js/head.min.js');
require('./node_modules/reveal.js/js/reveal.js');

// https://github.com/hakimel/reveal.js#configuration

/*global Reveal*/
Reveal.initialize({

  slideNumber: true,
  history: true,

  transition: 'slide', // none/fade/slide/convex/concave/zoom

  dependencies: [

    // Syntax highlight for <code> elements
    { src: require('./node_modules/reveal.js/plugin/highlight/highlight.js'),
      async: true,
      condition: () => !!document.querySelector('pre code'),
      callback: () => { /*global hljs*/ hljs.initHighlightingOnLoad() } },

    // Zoom in and out with alt+click
    { src: require('./node_modules/reveal.js/plugin/zoom-js/zoom.js'),
      async: true },

    // Speaker notes
    { src: require('./node_modules/reveal.js/plugin/notes/notes.js'),
      async: true }

  ]

});
