<!DOCTYPE html>
<html>
    <head>
        <title>Simple Regex Matcher</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    </head>
    <body>
        <div class="container" id="page">
            <div class="row">
                <h1>Simple Regex Matcher</h1>
            </div>
            <div class="row input-field">
                <div class="col-md-8">
                    <input name="regex" class="form-control" />
                </div>
            </div>
            <div class="row textarea-field">
                <div class="col-md-8">
                    <textarea name="string" class="form-control"></textarea>
                </div>
            </div>
        </div>
        <script>
            $('body').css({ height: $(document).height()});
        </script>
    </body>
</html>