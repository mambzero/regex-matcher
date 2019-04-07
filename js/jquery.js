$(document).ready(function() {

	$('#regex,#string').on('change keyup',function(event){
		$pattern = $('#regex').val();
		$text = $('#string').val();
		$func = $('#preg_func').val();
		if (!$pattern || !$text) {
			$('#output').html("// match here");
			return;
		}
		$.ajax({
			url: "matcher.php",
			type: "post",
			data: {"pattern" : $pattern, "text" : $text, "function" : $func},
			success: function (response) {
				if (response) {
					$('#output').html(response);
				} else {
					$('#output').html("No match!");
				}
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(textStatus, errorThrown);
			}
		});
	});
	
	$('#menu').on('click',function(event){
	
		$(this).children().removeAttr('class');
	
		$element = $('#' + event.target.id);
		$element.parent().addClass('active');		
		$value = $element.html();
		
		$('#preg_func').val($value);
		
		$("#regex").trigger("change");
		
		console.log(event);
		
		event.preventDefault();
		
	});

});