<?php

echo "
<!DOCTYPE html>
<html lang='pl'>

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
				<a href='https://straykerpl.github.io'><div id='HomeButton'>Strona Główna</div></a>
				<a href='https://github.com/StraykerPL'><div id='GithubButton'>GitHub</div></a>
				<a href='https://straykerpl.github.io/strayex'><div id='StrayexButton'>Strayex</div></a>
				<a href='https://straykerpl.github.io/projects'><div id='OtherProjectsButton'>Inne Projekty</div></a>
				<a href='https://straykerpl.github.io/contact'><div id='ContactButton'>Kontakt</div></a>
			</nav>
";

$PROJ = $_GET["a"];

if($PROJ == "strayex")
{
	echo "
	<p>Strona StrayexOS</p>
	";
}

echo "
			<footer>
				<p>Copyright © 2019 Daniel Strayker Nowak Wszelkie prawa Zastrzeżone</p>
				<p><a href='https://straykerpl.github.io/projects/project.php?a=strayex'>English Version</a></p>
			</footer>
		</div>
	</body>

</html>
";

?>