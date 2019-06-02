$(function () {

	// Custom JS

});

function myFunction(x) {
	x.classList.toggle("change");
}

var burger = document.getElementById("burger");
burger.onclick = function () {
	var hiddenLinks = document.querySelectorAll(".hide");
	for (var i = 0; i < hiddenLinks.length; i++) {
		var hiddenLink = hiddenLinks[i];
		if (hiddenLink.style.visibility === 'hidden') {
			hiddenLink.style.visibility = 'visible';
		} else {
			hiddenLink.style.visibility = 'hidden';
		}
	}
}




// $(function() {      
// 	//Enable swiping...
// 	$("#test").swipe( {
// 	  //Generic swipe handler for all directions
// 	  swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
// 		$(this).text("You swiped " + direction );  
// 	  },
// 	  //Default is 75px, set to 0 for demo so any distance triggers swipe
// 	   threshold:0
// 	});
//   });