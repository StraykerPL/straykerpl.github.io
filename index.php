<?php
    $lang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2);
    $acceptLang = ['en', 'pl'];
    $lang = in_array($lang, $acceptLang) ? $lang : 'en';
	require_once "index-{$lang}.html";
?>