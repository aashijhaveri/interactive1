$(document).ready(function(){
	
	$(".container>div").click(function() {
		$(this).next('div').removeClass('hide');
		 $(this).hide();
		//$(this).addClass('animate-out');
	});

	var audio = $("audio")[0];
		$("truck").mouseenter(function() {
  		audio.play();
	});

	

	// $(".mehboob").click(function() {
	// 	$(".maa-ka-aashirwad").show();
	// 	$(this).hide();
	// });

	// $(".maa-ka-aashirwad").click(function() {
	// 	$(".test").show();
	// 	$(this).hide();
	// });
});

