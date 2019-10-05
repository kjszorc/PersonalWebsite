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

function canvas() {
// var space;

// function floatySpace() {
//   var colors = [
//     "#FF3F8E", "#04C2C9", "#2E55C1"
//   ];


//   space = new CanvasSpace("canvas", "#252934" ).display();
//   var form = new Form( space );

//   // Elements
//   var pts = [];
//   var center = space.size.$divide(1.8);
//   var angle = -(window.innerWidth * 0.5);
//   var count = window.innerWidth * 0.05;
//   if (count > 150) count = 150;
//   var line = new Line(0, angle).to(space.size.x, 0);
//   var mouse = center.clone();

//   var r = Math.min(space.size.x, space.size.y) * 1;
//   for (var i=0; i<count; i++) {
//     var p = new Vector( Math.random()*r-Math.random()*r, Math.random()*r-Math.random()*r );
//     p.moveBy( center ).rotate2D( i*Math.PI/count, center);
//     p.brightness = 0.1
//     pts.push( p );
//   }

//   // Canvas
//   space.add({
//     animate: function(time, fps, context) {

//       for (var i=0; i<pts.length; i++) {
//         // rotate the points slowly
//         var pt = pts[i];

//         pt.rotate2D( Const.one_degree / 20, center);
//         form.stroke( false ).fill( colors[i % 3] ).point(pt, 1);

//         // get line from pt to the mouse line
//         var ln = new Line( pt ).to( line.getPerpendicularFromPoint(pt));

//         // opacity of line derived from distance to the line
//         var opacity = Math.min( 0.8, 1 - Math.abs( line.getDistanceFromPoint(pt)) / r);
//         var distFromMouse = Math.abs(ln.getDistanceFromPoint(mouse))

//         if (distFromMouse < 50) {
//           if (pts[i].brightness < 0.3) pts[i].brightness += 0.015
//         } else {
//           if (pts[i].brightness > 0.1) pts[i].brightness -= 0.01
//         }

//         var color = "rgba(255,255,255," + pts[i].brightness +")"
//         form.stroke(color).fill( true ).line(ln);
//       }
//     },

//     onMouseAction: function(type, x, y, evt) {
//       if (type=="move") {
//         mouse.set(x,y);
//       }
//     },

//     onTouchAction: function(type, x, y, evt) {
//       this.onMouseAction(type, x, y);
//     }
//   });

//   space.bindMouse();
//   space.play();
// }

// floatySpace();

// $(window).resize(function(){
//   space.removeAll();
//   $('canvas').remove();
//   floatySpace();
// });

}