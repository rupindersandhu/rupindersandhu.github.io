/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/* 
 * Skill-set Animation funtions.
 */
function runall1(i)
{
        var canvasSize = 200,
            centre = canvasSize/2,
            radius = canvasSize*0.8/2,
            s = Snap('#svg' + i),
            path = "",
            arc = s.path(path),    
            startY = centre-radius,
            percDiv = document.getElementById('percent' + i),
            input = document.getElementById('input' + i);
        
        
        var pcent = input.value/100;
        
        var endpoint = pcent*360;
        Snap.animate(0, endpoint,   function (val) {
            arc.remove();

            var d = val,
                dr = d-90;
                radians = Math.PI*(dr)/180,
                endx = centre + radius*Math.cos(radians),
                endy = centre + radius * Math.sin(radians),
                largeArc = d>180 ? 1 : 0;  
                path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;

            arc = s.path(path);
            arc.attr({
                          //stroke: '#7fcc7f',
                          stroke: '#ff9547',
                          fill: 'none',
                          strokeWidth: 12
                    });
            
            //percDiv.innerHTML =    Math.round(val/360*100) +'%';

        }, 2000, mina.easeinout);  
//    }
        
}

function runall()
{
    for(var i=0; i < 8; i++)
    {
        runall1(i);
    }
}


$(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = $(document).height();
    var c = $(window).height();
        
   if ( (a >= 1054) && (c >= 400) && (a <= 2300) && (c <= 700)) 
   {
       
      runall();
   }
});