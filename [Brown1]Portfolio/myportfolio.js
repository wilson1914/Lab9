$(document).ready(function(){

	$("li").mouseenter(function(){
		$("li").fadeTo("slow", 0.25);

});

	$("li").mouseleave(function(){
		$("li").fadeTo("slow", 1);
	});
});

	$(".css").click(function(){
		$(this).css({
			"background-color": "#036"
		});
	});