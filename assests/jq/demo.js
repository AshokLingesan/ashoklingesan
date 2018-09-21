$("li").click(function(){
	$(this).toggleClass("completed");
});

$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(type){
	if (type.which === 13 ){
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li> <span> X </span> " +  + "</li>");
	}
});
	