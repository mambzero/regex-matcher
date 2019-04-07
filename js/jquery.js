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
	
	$('#menu').find('a').on('click',function(event){
	
		$('#menu').children().removeAttr('class');
		
		$(this).parent().addClass('active');
		
		$('#preg_func').val($(this).text());
		
		$("#regex").trigger("change");
		
		event.preventDefault();
		
	});

});