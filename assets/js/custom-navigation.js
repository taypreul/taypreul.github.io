// Override greedy navigation behavior to keep all links visible
(function() {
  // Disable the greedy navigation on load
  if (typeof updateNav === 'function') {
    window.updateNav = function() {
      // Keep all items visible
      var $vlinks = $('#site-nav .visible-links');
      var $hlinks = $('#site-nav .hidden-links');
      var $btn = $('#site-nav button');
      
      // Move all hidden items back to visible
      $hlinks.children().appendTo($vlinks);
      
      // Hide button and hidden links
      $btn.addClass('hidden');
      $hlinks.addClass('hidden');
      
      // Update padding
      var mastheadHeight = $('.masthead').height();
      $('body').css('padding-top', mastheadHeight + 'px');
      if ($(".author__urls-wrapper button").is(":visible")) {
        $(".sidebar").css("padding-top", "");
      } else {
        $(".sidebar").css("padding-top", mastheadHeight + "px");
      }
    };
  }
  
  // Force all links to stay visible
  $(document).ready(function() {
    var $vlinks = $('#site-nav .visible-links');
    var $hlinks = $('#site-nav .hidden-links');
    var $btn = $('#site-nav button');
    
    // Move everything to visible
    $hlinks.children().appendTo($vlinks);
    
    // Hide button permanently
    $btn.hide();
    $hlinks.hide();
    
    // Prevent any future hiding
    $(window).off('resize', updateNav);
  });
})();
