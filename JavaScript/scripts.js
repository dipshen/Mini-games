$(document).ready(function(){
	// ПЕРВАЯ ИГРА
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
	let s=0;
	$(".b1").click(function() {
		 $(".b1").addClass("none");
		 s+=1;
	});
	$(".b2").click(function() {
		 $(".b2").addClass("none");
		 s+=1;
	});
	$(".b3").click(function() {
		 $(".b3").addClass("none");
		 s+=1;
	});
	if (s==3) {
		$(".blur").removeClass("none");
		$(".hint1_1").removeClass("none");
		});
	}
	// ВТОРАЯ ИНРА
	$(".fish1").click(function() {
 		 $(".main").addClass("none");
		 $(".second").removeClass("none")
		 $(".blur").removeClass("none");
		 $(".hint2_1").removeClass("none")
	});
	$(".X2").click(function() {
		 $(".hint2_1").addClass("none");
		 $(".blur").addClass("none");
	});
	$(".bottom1").click(function() {
		 $(".bottom1").addClass("none");
		 $(".bottom2").removeClass("none");
	});
	// ТРЕТЬЯ ИГРА
	$(".fish2").click(function() {
 		 $(".main").addClass("none");
		 $(".third").removeClass("none")
		 $(".blur").removeClass("none");
		 $(".hint3_1").removeClass("none")
	});
	$(".X3").click(function() {
		 $(".hint3_1").addClass("none");
		 $(".blur").addClass("none");
	});

});
