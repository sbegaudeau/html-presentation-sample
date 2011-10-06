/**
 * Copyright Stephane Begaudeau 2011
 * All right reserved.
 */
 
/**
 * Ends with for the String object.
 */
String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};
 
/**
 * Resize the div with the 'page' class to use all the screen.
 */
function resizePages() {
	var windowHeight = $(window).height();
	var height = 640;
	if (windowHeight > 640) {
		height = windowHeight;
	}
	$('.page').css('height', height);
}

/**
 * Turn the page in a direction ('next' or 'previous').
 */
function pageTurn(direction) {
	var newPage;
	if (direction == 'next' && $('.page.selected').index() < $('.page').length-1) {
		newPage = $('.page.selected').next();
	} else if (direction == 'previous' && $('.page.selected').index() > 0) {
		newPage = $('.page.selected').prev();
	}
	if (newPage) {
		$('.page').removeClass('selected');
		newPage.addClass('selected');
		jQuery.scrollTo.window().queue([]).stop();
		$(window).scrollTo(newPage,1200,{easing:'easeOutQuint'});
	}
}

/**
 * Entry point of the program.
 */
$(document).ready(function() {
	//resize
	$(window).resize(function(e) {
		resizePages();
	});
	resizePages();
	
	//sliding share button
	$("#button-share").click(function(){
		if ($("#share").hasClass("active")) {
			$("#share").animate({"left": "-=250px"}, {duration: 400, step: function(now, fx){$("#button-share").css("left", now + 250)}});
			$("#share").removeClass("active")
		} else {
			$("#share").animate({"left": "+=250px"}, {duration: 400, step: function(now, fx){$("#button-share").css("left", now + 250)}});
			$("#share").addClass("active")
		}
		return false; //cancel the link
	});
		
	//keyboard navigation
	$(document).bind('keydown',function(e) {
		switch(e.keyCode) {
			case 8: //backspace
				e.preventDefault();
				pageTurn('previous');
				break;
			case 13: //enter
				e.preventDefault();
				pageTurn('next');
				break;
			case 32: //space
				e.preventDefault();
				pageTurn('next');
				break;
			case 33: //page up
				e.preventDefault();
				pageTurn('previous');
				break;
			case 34: //page down
				e.preventDefault();
				pageTurn('next');
				break;
			case 37: //left
				// nothing for now
				break;
			case 38: //up
				e.preventDefault();
				pageTurn('previous');
				break;
			case 39: //right
				// nothing for now
				break;
			case 40: //down
				e.preventDefault();
				pageTurn('next');
				break;
		}
	});
	
	
	//scrolling
	$(window).scroll(function (e) {
		//when the top of the next slide is at 80% of the top of the screen, we will animate the next slide content.  
		var top = $(document).scrollTop();
		var windowHeight = Math.max(800,$(window).height());
		
		if (top > windowHeight * 0.8 && top < windowHeight) {
			//scrolling to page 2
			$("#back-to-top").css({"left": "0", "top": "0"});
			$("#acceleo-logo").css({"-webkit-transform" : "rotate(-58deg)", "-webkit-transition-duration": "2s"});
		} else if (top > 1.8 * windowHeight && top < 2 * windowHeight) {
			//scrolling to page 3
			$("#back-to-top").css({"left": "50", "top": "0"});
		} else if (top > 2.8 * windowHeight && top < 3 * windowHeight) {
			//scrolling to page 4
			$("#back-to-top").css({"left": "50", "top": "200"});
		} else if (top > 3.8 * windowHeight && top < 4 * windowHeight) {
			//scrolling to page 5
		} else if (top > 4.8 * windowHeight && top < 5 * windowHeight) {
			//scrolling to page 6
		} else if (top > 5.8 * windowHeight && top < 6 * windowHeight) {
			//scrolling to page 7
		} else if (top > 6.8 * windowHeight && top < 7 * windowHeight) {
			//scrolling to page 8
		} else if (top > 7.8 * windowHeight && top < 8 * windowHeight) {
			//scrolling to page 9
		} else if (top > 8.8 * windowHeight && top < 9 * windowHeight) {
			//scrolling to page 10
		} else if (top > 9.8 * windowHeight && top < 10 * windowHeight) {
			//scrolling to page 11
		} else if (top > 10.8 * windowHeight && top < 11 * windowHeight) {
			//scrolling to page 12
		} else if (top > 11.8 * windowHeight && top < 12 * windowHeight) {
			//scrolling to page 13
		} else if (top > 12.8 * windowHeight && top < 13 * windowHeight) {
			//scrolling to page 14
		} else if (top > 13.8 * windowHeight && top < 14 * windowHeight) {
			//scrolling to page 15
		} else if (top > 14.8 * windowHeight && top < 15 * windowHeight) {
			//scrolling to page 16
		} else if (top > 15.8 * windowHeight && top < 16 * windowHeight) {
			//scrolling to page 17
		} else if (top > 16.8 * windowHeight && top < 17 * windowHeight) {
			//scrolling to page 18
		} else if (top > 17.8 * windowHeight && top < 18 * windowHeight) {
			//scrolling to page 19
		} else if (top > 18.8 * windowHeight && top < 19 * windowHeight) {
			//scrolling to page 20
		} else if (top > 19.8 * windowHeight && top < 20 * windowHeight) {
			//scrolling to page 21
		}
	});
});