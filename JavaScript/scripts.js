$(document).ready(function(){
	$(".kit1").click(function() {
 		 $(".main").addClass("none");
		 $(".first").removeClass("none");
		 $(".blur").removeClass("none");
		 $(".hint1_1").removeClass("none");
	});
	$(".X1").click(function() {
		 $(".hint1_1").addClass("none");
		 $(".blur").addClass("none");
	});
	$(".fish1").click(function() {
 		 $(".main").addClass("none");
		 $(".second").removeClass("none")
	});

	$(".fish2").click(function() {
 		 $(".main").addClass("none");
		 $(".third").removeClass("none")
	});

});
