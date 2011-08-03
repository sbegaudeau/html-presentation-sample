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
	
	//animation
	$("#animation-launcher").click(function(){
		$("#animation-div").animate({"left": "+=500px", "opacity": "0.1", "height": "-=150px", "width": "-=150px"}, "fast")
							.animate({"top": "-=500px", "opacity": "1", "height": "+=150px", "width": "+=150px"}, "fast")
							.animate({"left": "-=500px", "opacity": "0.1", "height": "-=150px", "width": "-=150px"}, "fast")
							.animate({"top": "+=500px", "opacity": "1", "height": "+=150px", "width": "+=150px"}, "fast")
							.slideUp()
							.slideDown("slow");
		return false;
	});
	
	//gallery
	var img1 = new Image();
	img1.src = "http://www.webdesignerwall.com/demo/jquery/images/img2-lg.jpg";
	img1.src = "http://www.webdesignerwall.com/demo/jquery/images/img3-lg.jpg";
	img1.src = "http://www.webdesignerwall.com/demo/jquery/images/img4-lg.jpg";
	img1.src = "http://www.webdesignerwall.com/demo/jquery/images/img5-lg.jpg";
	$(".thumbs a").click(function(){
		var largePath = $(this).attr("href");
		var largeAlt = $(this).attr("title");
		$("#largeImg").attr({ src: largePath, alt: largeAlt });
		return false;
	});
	
	//thumbs fade in / fade out
	$(".thumbs img").css("opacity", "0.5");
	
	$(".thumbs img").hover(function(){
		$(this).animate({"opacity": "1"}, "fast");
	}, function(){
		$(this).animate({"opacity": "0.5"}, "slow");
	});
	
	//back to top
	$("#back-to-top").click(function(){
		if ($('.page.selected').index() > 0) {
			$('.page').removeClass("selected");
			$('.page1').addClass("selected");
			jQuery.scrollTo.window().queue([]).stop();
			$(window).scrollTo($(".page1"),1200,{easing:'easeOutQuint'});
			return false; //cancel the link
		}
	});
	
	//popup
	$(".has-popup").hover(function(){
		function trimPX(css_property) {
			if (css_property.toString().endsWith("px")) {
				css_property = Number(css_property.toString().substring(0, css_property.toString().length - 2));
			}
			return css_property;
		}
	
		var that = $(this);
		var top_value = trimPX(that.css("top"));
		top_value -= trimPX($("#popup").css("height"));
		top_value -= 50;
		
		var left_value = trimPX(that.css("left"));
		left_value += (trimPX(that.css("width")) / 2);
		left_value -= (trimPX($("#popup").width()) / 2);
		
		$("#popup").animate({"top": top_value, "left": left_value})
					.animate({"opacity": "show", "top": "+=20"});
	}, function(){
		$("#popup").animate({"opacity": "hide", "top": "-=20"});
	});
	
	//keyboard navigation
	$(document).bind('keydown',function(e) {
		switch(e.keyCode) {
			case 32: //space
				e.preventDefault();
				pageTurn('next');
				break;
			case 38: //up
				e.preventDefault();
				pageTurn('previous');
				break;
			case 40: //down
				e.preventDefault();
				pageTurn('next');
				break;
		}
	});
	
});