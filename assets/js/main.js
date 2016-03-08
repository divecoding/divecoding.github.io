jQuery(document).ready(function($){
  var search      = window.location.search;  // Returns path only
  if(search.indexOf("app=true") > -1){
    swal("Good job, and thank you!", "You completed the trial, if you enjoyed this and want to be updated on our product, sign up today!", "success")
  }

  var isLateralNavAnimating = false;

  $('.menu-burger').on('click', function(e) {
    e.preventDefault();

    if( !isLateralNavAnimating ) {
      if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true;

      $('body').toggleClass('navigation-is-open');
      $('.navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
        isLateralNavAnimating = false;
      });
    }
  });
});
