$(window).scroll(function(){
    if ($(this).scrollTop() > 130) {
       $('.sticky_header').addClass('sticky');
    } else {
       $('.sticky_header').removeClass('sticky');
    }
});

// for header 
$(document).ready(function(){
   $('.menu-toggle').click(function(){
     $('nav').toggleClass('active');
   })
 })

 // for main slider 
let i = 0;

$('.slide').click(function() {
    $('.active').addClass('nonActive').find('span').empty()
    $(this).removeClass('nonActive').addClass('active')
    i = $(this).index()
})

setItner = setInterval(go, 4000);

function go() {
    $('.active').addClass('nonActive').find('span').empty()
    $($('.slide')[i % 6]).removeClass('nonActive').addClass('active')
    i++;
}

// for partner slider
$(document).ready(function(){
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  autoplay:true,
  merge:true,
  // autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
  
})
});

// --------------------------------------------------
    // Back To Top
    // --------------------------------------------------
    $(document).ready(function(){
    var offset = 450;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#to-the-top').fadeIn(duration);
        } else {
            jQuery('#to-the-top').fadeOut(duration);
        }
    });
            
    jQuery('#to-the-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
      });  
    
    // to add active class in nav 
    $(document).ready(function() {
      $(".header nav ul li a").click(function () {
          $(".header nav ul li a").removeClass("active");
          // $(".tab").addClass("active"); // instead of this do the below 
          $(this).addClass("active");   
      });
      });
    });

    // for counters 
    (function($) {
        $.fn.countTo = function(options) {
          options = options || {};
      
          return $(this).each(function() {
            // set options for current element
            var settings = $.extend(
              {},
              $.fn.countTo.defaults,
              {
                from: $(this).data("from"),
                to: $(this).data("to"),
                speed: $(this).data("speed"),
                refreshInterval: $(this).data("refresh-interval"),
                decimals: $(this).data("decimals")
              },
              options
            );
      
            // how many times to update the value, and how much to increment the value on each update
            var loops = Math.ceil(settings.speed / settings.refreshInterval),
              increment = (settings.to - settings.from) / loops;
      
            // references & variables that will change with each update
            var self = this,
              $self = $(this),
              loopCount = 0,
              value = settings.from,
              data = $self.data("countTo") || {};
      
            $self.data("countTo", data);
      
            // if an existing interval can be found, clear it first
            if (data.interval) {
              clearInterval(data.interval);
            }
            data.interval = setInterval(updateTimer, settings.refreshInterval);
      
            // initialize the element with the starting value
            render(value);
      
            function updateTimer() {
              value += increment;
              loopCount++;
      
              render(value);
      
              if (typeof settings.onUpdate == "function") {
                settings.onUpdate.call(self, value);
              }
      
              if (loopCount >= loops) {
                // remove the interval
                $self.removeData("countTo");
                clearInterval(data.interval);
                value = settings.to;
      
                if (typeof settings.onComplete == "function") {
                  settings.onComplete.call(self, value);
                }
              }
            }
      
            function render(value) {
              var formattedValue = settings.formatter.call(self, value, settings);
              $self.html(formattedValue);
            }
          });
        };
      
        $.fn.countTo.defaults = {
          from: 0, // the number the element should start at
          to: 0, // the number the element should end at
          speed: 1000, // how long it should take to count between the target numbers
          refreshInterval: 100, // how often the element should be updated
          decimals: 0, // the number of decimal places to show
          formatter: formatter, // handler for formatting the value before rendering
          onUpdate: null, // callback method for every time the element is updated
          onComplete: null // callback method for when the element finishes updating
        };
      
        function formatter(value, settings) {
          return value.toFixed(settings.decimals);
        }
      })(jQuery);
      
      jQuery(function($) {
        // custom formatting example
        $(".count-number").data("countToOptions", {
          formatter: function(value, options) {
            return value
              .toFixed(options.decimals)
              .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
          }
        });
      
        // start all the timers
        $(".timer").each(count);
      
        function count(options) {
          var $this = $(this);
          options = $.extend({}, options || {}, $this.data("countToOptions") || {});
          $this.countTo(options);
        }
      });

    //   for play video 
    $('#btn-event').click(function(){
        $('#video-container').addClass('play-video');
            
        })