$(window).scroll(function() {
  if ($(this).scrollTop() > 120) /*height in pixels when the navbar becomes non opaque*/ {
    $('nav.navbar.bootsnav').css( "background-color", "#333333" );
  } else {
    $('nav.navbar.bootsnav').css( "background-color", "Transparent" );
  }
});
