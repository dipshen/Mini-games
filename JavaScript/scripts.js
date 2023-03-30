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
	$(".b1").click(function() {
		 $(".b1").addClass("none");
	});
	$(".b2").click(function() {
		 $(".b2").addClass("none");
	});
	$(".b3").click(function() {
		 $(".b3").addClass("none");
	});
	$(".b4").click(function() {
		 $(".b4").addClass("none");
	});
	$(".b5").click(function() {
		 $(".b5").addClass("none");
	});
	$(".b6").click(function() {
		 $(".b6").addClass("none");
	});
	$(".b7").click(function() {
		 $(".b7").addClass("none");
	});
	$(".b8").click(function() {
		 $(".b8").addClass("none");
	});
	$(".b9").click(function() {
		 $(".b9").addClass("none");
	});
	$(".b10").click(function() {
		 $(".b10").addClass("none");
	});
	$(".b11").click(function() {
		 $(".b11").addClass("none");
	});
	$(".b12").click(function() {
		 $(".b12").addClass("none");
	});
	$(".b13").click(function() {
		 $(".b13").addClass("none");
	});
	$(".b14").click(function() {
		 $(".b14").addClass("none");
	});
	$(".b15").click(function() {
		 $(".b15").addClass("none");
	});
	$(".b16").click(function() {
		 $(".b16").addClass("none");
	});
	$(".b17").click(function() {
		 $(".b17").addClass("none");
	});
	$(".b18").click(function() {
		 $(".b18").addClass("none");
	});
	$(".b19").click(function() {
		 $(".b19").addClass("none");
	});
	$(".b20").click(function() {
		 $(".b20").addClass("none");
	});

	if ($(".b1").hasClass("none") && $(".b2").hasClass("none") && $(".b3").hasClass("none")
	// && $(".b4").hasClass("none") && $(".b5").hasClass("none") && $(".b6").hasClass("none")
	// && $(".b7").hasClass("none") && $(".b8").hasClass("none") && $(".b9").hasClass("none")
	// && $(".b10").hasClass("none") && $(".b11").hasClass("none") && $(".b12").hasClass("none")
	// && $(".b13").hasClass("none") && $(".b14").hasClass("none") && $(".b15").hasClass("none")
	// && $(".b16").hasClass("none") && $(".b17").hasClass("none") && $(".b18").hasClass("none")
	// && $(".b19").hasClass("none") && $(".b20").hasClass("none") && $(".b21").hasClass("none")
	// && $(".b22").hasClass("none") && $(".b23").hasClass("none") && $(".b24").hasClass("none")
	// && $(".b25").hasClass("none") && $(".b26").hasClass("none") && $(".b27").hasClass("none")
	// && $(".b28").hasClass("none") && $(".b29").hasClass("none") && $(".b30").hasClass("none")
	// && $(".b31").hasClass("none") && $(".b32").hasClass("none") && $(".b33").hasClass("none")
	// && $(".b34").hasClass("none") && $(".b35").hasClass("none") && $(".b36").hasClass("none")
	// && $(".b37").hasClass("none") && $(".b38").hasClass("none") && $(".b39").hasClass("none")
	// && $(".b40").hasClass("none") && $(".b41").hasClass("none") && $(".b42").hasClass("none")
	) {
			$(".blur").removeClass("none");
			$(".hint1_2").removeClass("none");
	};
	// if ($('.b1, .b2, .b3').hasClass('none').length === 3) {
  // 	$('.blur').removeClass('none');
	// };

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
