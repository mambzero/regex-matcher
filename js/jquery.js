$(document).ready(function() {

	$('#regex,#string').on('change keyup',function(event){
		$pattern = $('#regex').val();
		$text = $('#string').val();
		if (!$pattern || !$text) {
			$('#output').html("// match here");
			return;
		}
		$.ajax({
			url: "matcher.php",
			type: "post",
			data: {"pattern" : $pattern, "text" : $text},
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

});