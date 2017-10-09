window.onload = function() {

	// Scroll to headings when clicking on nav
	$($("#nav-setup-stages").children()).on("click", function() {
		$('html, body').animate({scrollTop: $($(".article-heading")[$(this).index()]).offset().top - 100}, 500);
	});

	$(document).on('scroll', function() {
		$(".article-heading.scrolled-to").each(function() {
		    if($(document).scrollTop()<$(this).position().top - 250){		    	
		    	$(this).addClass("not-scrolled-to")
		    	$(this).removeClass("scrolled-to")
		    	$($("#nav-setup-stages").children()[$(this).index() - 1]).removeClass("scrolled-past")
		    	$($("#nav-setup-stages").children()[$(this).index()]).addClass("not-yet-started")		       
		    }
		})

		$(".article-heading.not-scrolled-to").each(function() {
		    if($(document).scrollTop()>=$(this).position().top - 250){
		    	
		    	$(this).removeClass("not-scrolled-to")
		    	$(this).addClass("scrolled-to")

		    	$($("#nav-setup-stages").children()[$(this).index() - 1]).addClass("scrolled-past")
		    	$($("#nav-setup-stages").children()[$(this).index()]).removeClass("not-yet-started")
		       
		    }

		})
	})
}