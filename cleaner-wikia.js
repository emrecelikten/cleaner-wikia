// ==UserScript==
// @name        Cleaner Wikia
// @namespace   cleanerwikia
// @version     1
// @grant       none
// @license     Public domain
// @include     http://*.wikia.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==


// Yes, I do not know Javascript.
var search = $(".wds-global-navigation__search");
var home = $(".wordmark");
var link_to_home = $("a", home).attr("href");
var height = search.css("height");
var home_str = '<div style="vertical-align: middle;width:140px;line-height: ' + height + ';"><h2><a href="' + link_to_home + '">Main page</a></h2></div>';

var contentbar = $(".wds-global-navigation__content-bar");
contentbar.empty();
contentbar.append(home_str);
contentbar.append(search);

$(".tally").remove();
$("#WikiHeader").remove();
$("#WikiaRailWrapper").remove();
$(".WikiNav").remove();

var content = $("#WikiaMainContent");
content.unwrap();
content.css("width", "auto");
$(".WikiaPageContentWrapper").empty();

$(".wds-global-footer").remove();
$("#WikiaFooter").remove();