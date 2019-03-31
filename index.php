<!DOCTYPE html>
<html>
    <head>
        <title>Simple Regex Matcher</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>
        <div class="container page">
            <div class="row">
                <h1>Simple Regex Matcher</h1>
            </div>
            <div class="row fields">
                <div class="col-md-8">
                    <input name="regex" class="form-control input-field" id="regex" />
                    <textarea name="string" class="form-control textarea-field" id="string"></textarea>
                </div>
                <div class="col-md-4 output-field">
                    <pre id="output">// match here</pre>
                </div>
            </div>
        </div>
        <script>
            $('#regex,#string').on('change keyup',function(event){
                $pattern = $('#regex').val();
                $string = $('#string').val();
                if ($pattern && $string) {
                    $('#output').html($string.match($pattern));
                }
            });
        </script>
    </body>
</html>