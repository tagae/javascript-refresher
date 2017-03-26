// Main reveal.js setup

/*global Reveal,hljs*/ // eslint declarations

// core
require('./node_modules/reveal.js/css/reveal.css');
require('./node_modules/reveal.js/lib/js/head.min.js');
require('./node_modules/reveal.js/js/reveal.js');

// styling
require('./node_modules/reveal.js/css/theme/white.css');
require('./node_modules/reveal.js/lib/css/zenburn.css');
require('./index.sass');

// plugins
require('./node_modules/reveal.js/plugin/zoom-js/zoom.js');
require('./node_modules/reveal.js/plugin/notes/notes.js');
require('./node_modules/reveal.js/plugin/highlight/highlight.js');
hljs.initHighlightingOnLoad();

// local config
require('./print.js')

// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  slideNumber: true,
  transition: 'none'
});
