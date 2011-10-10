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
	
	//if we are on the page 6, let's turn the gallery first
	if ($('.page.selected').hasClass("page6")) {
		if (direction == 'next') {
			//if we must go forward and we are on page 1 or 2, let's increase this, else newPage
			if ($(".page6 .gallery").hasClass("gallery-page6-img1")) {
				$(".page6 .gallery").switchClass("gallery-page6-img1", "gallery-page6-img2", 0);
				
				$(".page6 .pagebody .gallery-description").find(".img1").hide();
				$(".page6 .pagebody .gallery-description").find(".img2").show();
			} else if ($(".page6 .gallery").hasClass("gallery-page6-img2")) {
				$(".page6 .gallery").switchClass("gallery-page6-img2", "gallery-page6-img3", 0);
				
				$(".page6 .pagebody .gallery-description").find(".img2").hide();
				$(".page6 .pagebody .gallery-description").find(".img3").show();
			} else {
				newPage = $('.page.selected').next();
			}
		} else {
			//if we must go backward and we are on page 2 or 3, let's decrease this, else newPage
			if ($(".page6 .gallery").hasClass("gallery-page6-img3")) {
				$(".page6 .gallery").switchClass("gallery-page6-img3", "gallery-page6-img2", 0);
				
				$(".page6 .pagebody .gallery-description").find(".img2").show();
				$(".page6 .pagebody .gallery-description").find(".img3").hide();
			} else if ($(".page6 .gallery").hasClass("gallery-page6-img2")) {
				$(".page6 .gallery").switchClass("gallery-page6-img2", "gallery-page6-img1", 0);
				
				$(".page6 .pagebody .gallery-description").find(".img1").show();
				$(".page6 .pagebody .gallery-description").find(".img2").hide();
			} else {
				newPage = $('.page.selected').prev();
			}
		}
	} else if ($('.page.selected').hasClass("page11")) {
		if (direction == 'next') {
			//if we must go forward and we are on page 1, 2, 3, 4 or 5, let's increase this else newPage
			if ($(".page11 .gallery").hasClass("gallery-page11-img1")) {
				$(".page11 .gallery").switchClass("gallery-page11-img1", "gallery-page11-img2", 0);
				
				$(".page11 .pagebody .gallery-description").find(".img1").hide();
				$(".page11 .pagebody .gallery-description").find(".img2").show();
			} else if ($(".page11 .gallery").hasClass("gallery-page11-img2")) {
				$(".page11 .gallery").switchClass("gallery-page11-img2", "gallery-page11-img3", 0);
				
				$(".page11 .pagebody .gallery-description").find(".img2").hide();
				$(".page11 .pagebody .gallery-description").find(".img3").show();
			} else if ($(".page11 .gallery").hasClass("gallery-page11-img3")) {
				$(".page11 .gallery").switchClass("gallery-page11-img3", "gallery-page11-img4", 0);
				
				$(".page11 .pagebody .gallery-description").find(".img3").hide();
				$(".page11 .pagebody .gallery-description").find(".img4").show();
			} else if ($(".page11 .gallery").hasClass("gallery-page11-img4")) {
				$(".page11 .gallery").switchClass("gallery-page11-img4", "gallery-page11-img5", 0);
				
				$(".page11 .pagebody .gallery-description").find(".img4").hide();
				$(".page11 .pagebody .gallery-description").find(".img5").show();
			} else if ($(".page11 .gallery").hasClass("gallery-page11-img5")) {
				$(".page11 .gallery").switchClass("gallery-page11-img5", "gallery-page11-img6", 0);
				
				$(".page11 .pagebody .gallery-description").find(".img5").hide();
				$(".page11 .pagebody .gallery-description").find(".img6").show();
			} else {
				newPage = $('.page.selected').next();
			}
		} else {
			//if we must go backward and we are on page 6, 5, 4, 3 or 2, let's decrease this else newPage
			if ($(".page11 .gallery").hasClass("gallery-page11-img6")) {
				$(".page11 .gallery").switchClass("gallery-page11-img6", "gallery-page11-img5", 0);
				
				$(".page11 .pagebody .gallery-description").find(".img5").show();
				$(".page11 .pagebody .gallery-description").find(".img6").hide();
			} else if ($(".page11 .gallery").hasClass("gallery-page11-img5")) {
				$(".page11 .gallery").switchClass("gallery-page11-img5", "gallery-page11-img4", 0);
				
				$(".page11 .pagebody .gallery-description").find(".img4").show();
				$(".page11 .pagebody .gallery-description").find(".img5").hide();
			} else if ($(".page11 .gallery").hasClass("gallery-page11-img4")) {
				$(".page11 .gallery").switchClass("gallery-page11-img4", "gallery-page11-img3", 0);
				
				$(".page11 .pagebody .gallery-description").find(".img3").show();
				$(".page11 .pagebody .gallery-description").find(".img4").hide();
			} else if ($(".page11 .gallery").hasClass("gallery-page11-img3")) {
				$(".page11 .gallery").switchClass("gallery-page11-img3", "gallery-page11-img2", 0);
				
				$(".page11 .pagebody .gallery-description").find(".img2").show();
				$(".page11 .pagebody .gallery-description").find(".img3").hide();
			} else if ($(".page11 .gallery").hasClass("gallery-page11-img2")) {
				$(".page11 .gallery").switchClass("gallery-page11-img2", "gallery-page11-img1", 0);
				
				$(".page11 .pagebody .gallery-description").find(".img1").show();
				$(".page11 .pagebody .gallery-description").find(".img2").hide();
			} else {
				newPage = $('.page.selected').prev();
			}
		}
	}  else if ($('.page.selected').hasClass("page12")) {
		if (direction == 'next') {
			//if we must go forward and we are on page 1, 2 or 3 let's increase this, else newPage
			if ($(".page12 .gallery").hasClass("gallery-page12-img1")) {
				$(".page12 .gallery").switchClass("gallery-page12-img1", "gallery-page12-img2", 0);
				
				$(".page12 .pagebody .gallery-description").find(".img1").hide();
				$(".page12 .pagebody .gallery-description").find(".img2").show();
			} else if ($(".page12 .gallery").hasClass("gallery-page12-img2")) {
				$(".page12 .gallery").switchClass("gallery-page12-img2", "gallery-page12-img3", 0);
				
				$(".page12 .pagebody .gallery-description").find(".img2").hide();
				$(".page12 .pagebody .gallery-description").find(".img3").show();
			} else if ($(".page12 .gallery").hasClass("gallery-page12-img3")) {
				$(".page12 .gallery").switchClass("gallery-page12-img3", "gallery-page12-img4", 0);
				
				$(".page12 .pagebody .gallery-description").find(".img3").hide();
				$(".page12 .pagebody .gallery-description").find(".img4").show();
			} else {
				newPage = $('.page.selected').next();
			}
		} else {
			//if we must go backward and we are on page 2, 3 or 4, let's decrease this, else newPage
			if ($(".page12 .gallery").hasClass("gallery-page12-img4")) {
				$(".page12 .gallery").switchClass("gallery-page12-img4", "gallery-page12-img3", 0);
				
				$(".page12 .pagebody .gallery-description").find(".img3").show();
				$(".page12 .pagebody .gallery-description").find(".img4").hide();
			} else if ($(".page12 .gallery").hasClass("gallery-page12-img3")) {
				$(".page12 .gallery").switchClass("gallery-page12-img3", "gallery-page12-img2", 0);
				
				$(".page12 .pagebody .gallery-description").find(".img2").show();
				$(".page12 .pagebody .gallery-description").find(".img3").hide();
			} else if ($(".page12 .gallery").hasClass("gallery-page12-img2")) {
				$(".page12 .gallery").switchClass("gallery-page12-img2", "gallery-page12-img1", 0);
				
				$(".page12 .pagebody .gallery-description").find(".img1").show();
				$(".page12 .pagebody .gallery-description").find(".img2").hide();
			} else {
				newPage = $('.page.selected').prev();
			}
		}
	} else {		
		if (direction == 'next' && $('.page.selected').index() < $('.page').length-1) {
			newPage = $('.page.selected').next();
		} else if (direction == 'previous' && $('.page.selected').index() > 0) {
			newPage = $('.page.selected').prev();
		}
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
	
	//hide "to-hide" elements
	$(document).find(".to-hide").hide();
	
	//page 6 gallery initialization
	$(".page6 .pagebody .gallery").addClass("gallery-page6-img1");
	$(".page6 .pagebody .gallery-description").find(".img1").show();
	
	//page 11 gallery initialization
	$(".page11 .pagebody .gallery").addClass("gallery-page11-img1");
	$(".page11 .pagebody .gallery-description").find(".img1").show();
	
	//page 12 gallery initialization
	$(".page12 .pagebody .gallery").addClass("gallery-page12-img1");
	$(".page12 .pagebody .gallery-description").find(".img1").show();
	
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
		} else if (top > 1.8 * windowHeight && top < 2 * windowHeight) {
			//scrolling to page 3
		} else if (top > 2.8 * windowHeight && top < 3 * windowHeight) {
			//scrolling to page 4
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