$(function () {

	// Custom JS

});


function myFunction(x) {
	x.classList.toggle("change");
	
	var hiddenLinks = document.getElementById("sidebar");
	if (hiddenLinks.style.display === 'block') {
		hiddenLinks.style.display = 'none';
	} else {
		hiddenLinks.style.display = 'block';
	}
	

}




// var burger = document.getElementById("burger");
// burger.onclick = function () {
// 	var hiddenLinks = document.querySelectorAll(".hide");
// 	for (var i = 0; i < hiddenLinks.length; i++) {
// 		var hiddenLink = hiddenLinks[i];
// 		if (hiddenLink.style.visibility === 'hidden') {
// 			hiddenLink.style.visibility = 'visible';
// 		} else {
// 			hiddenLink.style.visibility = 'hidden';
// 		}
// 	}
// }