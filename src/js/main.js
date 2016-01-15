/*
  ### Rafaell Lycan Website ###
  Document    : main.js
  Author      : Rafaell Lycan
*/
;(function () {
  'use strict';
  if (document.location.hostname !== 'localhost') {
    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    var disqusShortname = 'rafaelllycan'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function () {
      var dsq = document.createElement('script');
      dsq.type  = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqusShortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
  }
})();
