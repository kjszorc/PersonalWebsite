function portfolio() {

  var navPos = $('nav').position().top;
  var lastPos = 0;
  var lockTimer

  function handleScroll() {
    var pos = $(window).scrollTop();
    var pos2 = pos + (window.innerHeight * .5);
    var scrollBottom = pos + $(window).height();

    // if (true) {
    //   if (pos >= navPos + $('nav').height() && lastPos < pos) {
    //     $('nav').addClass('fixed');
    //   }
    //   if (pos < navPos && lastPos > pos) {
    //     $('nav').removeClass('fixed');
    //   }
    //   lastPos = pos;
    // }

    // Link Highlighting
    if (pos2 > $('#Home').offset().top || pos2 <= 10 ) { highlightLink('Home');  }
    if (pos2 > $('#About').offset().top)               { highlightLink('About'); }
    if (pos2 > $('#Portfolio').offset().top)           { highlightLink('Portfolio'); }
    if (pos2 > $('#Contact').offset().top )            { highlightLink('Contact');   }

    // Prevent Hover on Scroll
    clearTimeout(lockTimer);
    if(!$('body').hasClass('disable-hover')) {
      $('body').addClass('disable-hover')
    }

    lockTimer = setTimeout(function(){
      $('body').removeClass('disable-hover')
    }, 500);
  };
  $(window).on('scroll', handleScroll);
  handleScroll(); // execute once on page load

  function highlightLink(anchor) {
    $('nav .active').removeClass('active');
    $("nav").find('[dest="' + anchor + '"]').addClass('active');
  }

  // EVENT HANDLERS
  $('[data-js="navbar-desktop"]').click(function() {
    // debugger;
    var anchor = $(this).attr("dest");
    // $('.link-wrap').removeClass('visible');

    $('nav div').removeClass('active');
    $('nav').find('[dest="'+ anchor +'"]').addClass('active');

    $('html, body').animate({
      scrollTop: $('#' + anchor).offset().top,
      behavior: 'smooth',
    }, 500);
  });

  // SCROLL ANIMATIONS
  function onScrollInit( items, elemTrigger ) {
    // debugger;
    // var offset = $(window).height() / 1.6
    // items.each( function() {
    //   var elem = $(this),
    //       animationClass = elem.attr('data-animation'),
    //       animationDelay = elem.attr('data-delay');

    //       elem.css({
    //         '-webkit-animation-delay':  animationDelay,
    //         '-moz-animation-delay':     animationDelay,
    //         'animation-delay':          animationDelay
    //       });

    //       var trigger = (elemTrigger) ? trigger : elem;

    //       trigger.waypoint(function() {
    //         elem.addClass('animated').addClass(animationClass);
    //         if (elem.get(0).id === 'gallery') mixClear(); //OPTIONAL
    //         },{
    //             triggerOnce: true,
    //             offset: offset
    //       });
    // });
  }

  setTimeout(function() { onScrollInit($('.waypoint')) }, 10);

  //////////////////////////
  //
  //    Navbar
  //
  //////////////////////////
  (function setUpNav() {
    let nav = document.querySelector('nav');
    let navOptions = document.querySelectorAll('[data-js="navbar-desktop"]');
    let mobileBtn = document.querySelector('[data-js="navbar-mobile"]');
  
    navOptions.forEach((btn) => {
      btn.addEventListener('click', () => {
        nav.classList.toggle('mobile-open', false);
      });
    });
    mobileBtn.addEventListener('click', () => {
      nav.classList.toggle('mobile-open');
    });
    window.addEventListener('resize', () => {
      nav.classList.toggle('mobile-open', false);
    });
  })();

  //////////////////////////
  //
  //    Load Particles
  //
  //////////////////////////
  particlesJS.load('particles-js', 'scripts/particles.json');
};

window.addEventListener('DOMContentLoaded', portfolio);
