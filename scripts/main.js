function portfolio() {
  // Get the modal
  var modal = document.getElementById("myModal");
  var body = document.querySelector('body');
  // Get the button that opens the modal
  var btn = document.querySelectorAll(".portfolio-display li");
  // When the user clicks on the button, open the modal 
  
  btn.forEach(item => {
    item.addEventListener('click', function() {
      modal.style.display = "block"; // make this class based
      modal.style['overflow'] = 'scroll';
      body.style['overflow'] = 'hidden';
    });
  });

  var span = document.getElementById("close");

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    // debugger;
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

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
  $('[data-js="navbar-desktop"').click(function() {
    // debugger;
    var anchor = $(this).attr("dest");
    // $('.link-wrap').removeClass('visible');

    $('nav div').removeClass('active');
    $("nav").find('[dest="'+ anchor +'"]').addClass('active');

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

  // toggle nav bar
  let nav = document.querySelector('nav');
  let navOptions = document.querySelectorAll('[data-js="navbar-desktop"]');
  let mobileBtn = document.querySelector('[data-js="navbar-mobile"]');
  // let isMobile = false; // need to find out if view is currently mobile...

  mobileBtn.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
  });
  window.addEventListener('resize', () => {
    console.log('toggle');
    nav.classList.removeClass('mobile-open');
  });


};

window.addEventListener('DOMContentLoaded', portfolio);
