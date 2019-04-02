<!DOCTYPE html>
<html>
    <head>
        <title>Simple Regex Matcher</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>
        <div class="main-wrapper">
            <div class="section left col-md-9">
                <h1>Simple Regex Matcher</h1>
                <input name="regex" class="form-control input-field" id="regex" />
                <textarea name="string" class="form-control textarea-field" id="string"></textarea>
            </div>
            <div class="section right col-md-3">
                <pre class="full" id="output">// match here</pre>
            </div>
        </div>
        <script>
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
        </script>
    </body>
</html>