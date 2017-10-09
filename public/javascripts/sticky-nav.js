window.onload = function() {

	var stickyNav = document.getElementById("subpage-nav")
	var stickySplashBg = document.getElementById("splash-sticky-bg")
	var stickyGithubCorner = document.getElementById("github-corner")
	var navIsStuck = false
	var ghcIsStuck = false

	var navPosY = stickyNav.offsetTop;

	window.onscroll = function() { checkNav() }
	function checkNav() {
		var bodyScroll = document.body.scrollTop || document.documentElement.scrollTop
		
		// Ensure the Github Corner doesn't overlap the main page
		if(bodyScroll > (navPosY - 20)) {
			if(!ghcIsStuck) {
				ghcIsStuck = true
				stickyGithubCorner.classList.add("sticky")
			}
		} else {
			if(ghcIsStuck) {
				ghcIsStuck = false
				stickyGithubCorner.classList.remove("sticky")
			}	
		}

		// Fix the navbar to the top of the page when scrolling past the splash
		if(bodyScroll > navPosY) {
			if(!navIsStuck) {
				navIsStuck = true
				stickyNav.classList.add("sticky")
				stickySplashBg.classList.add("sticky")
				
			}
		} else {
			if(navIsStuck) {
				navIsStuck = false
				stickyNav.classList.remove("sticky")
				stickySplashBg.classList.remove("sticky")
				
			}				
		}
	}
}