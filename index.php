<!DOCTYPE html>
<html>
    <head>
        <title>Simple Regex Matcher</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script src="js/jquery.js" type="text/javascript"></script>
    </head>
    <body>
        <div class="main-wrapper">
            <div class="section left col-md-9">
			<div class="header">
                <h1>Simple Regex Matcher</h1>
				<div class="dropdown">
					<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
						<span class="caret"></span>
					</button>
					<ul class="dropdown-menu dropdown-menu-right" id="menu">
					  <li><a href="#" class="options selected" id="opt1">preg_match_all</a></li>
					  <li><a href="#" class="options" id="opt2">preg_match</a></li>
					  <li><a href="#" class="options" id="opt3">preg_split</a></li>
					</ul>
				</div>
			</div>
                <input type="text" name="regex" class="form-control input-field" id="regex" />
                <textarea type="text" name="string" class="form-control textarea-field" id="string"></textarea>
				<input type="hidden" id="preg_func" value="preg_match_all" />
            </div>
            <div class="section right col-md-3">
                <pre class="full" id="output">// match here</pre>
            </div>
        </div>
    </body>
</html>