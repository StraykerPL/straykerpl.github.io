<?php

echo "
<!DOCTYPE html>
<html lang='en'>

	<head>
		<meta charset='UTF-8' >
		<title>Daniel Strayker Nowak</title>
		<link type='text/css' rel='Stylesheet' href='https://straykerpl.github.io/main.css' />
		<link rel='Icon' href='https://straykerpl.github.io/logo_mini.png' />
	</head>
	
	<body>
		<div id='Main'>
			<a href='https://straykerpl.github.io'>
				<header>
					<img src='https://straykerpl.github.io/logo.png' alt='Can't show logo!' />
				</header>
			</a>
			
			<nav>
				<a href='https://straykerpl.github.io'><div id='HomeButton'>Home</div></a>
				<a href='https://github.com/StraykerPL'><div id='GithubButton'>GitHub</div></a>
				<a href='https://straykerpl.github.io/strayex'><div id='StrayexButton'>Strayex</div></a>
				<a href='https://straykerpl.github.io/projects'><div id='OtherProjectsButton'>Other Projects</div></a>
				<a href='https://straykerpl.github.io/contact'><div id='ContactButton'>Contact</div></a>
			</nav>
";

$PROJ = $_GET["a"];

if($PROJ == "strayex")
{
	echo "
	<p>StrayexOS page</p>
	";
}

echo "
			<footer>
				<p>Copyright © 2019 Daniel Strayker Nowak All rights reserved</p>
				<p><a href='https://straykerpl.github.io/projects/project-pl.php?a=strayex'>Polska Wersja</a></p>
			</footer>
		</div>
	</body>

</html>
";

?>