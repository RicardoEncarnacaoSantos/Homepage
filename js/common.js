function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname+"="+cvalue+"; "+expires;
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function getGreetingEN(){
	var now = new Date();
	var hour = now.getHours();
	
	if( hour>=7 && hour<=12 ){
		return "GOOD MORNING,";
	}
	
	if( hour>12 && hour<=18 ){
		return "GOOD AFTERNOON,";
	}

	if( hour>18 && hour<=21 ){
		return "GOOD EVENING,";
	}	
	
	return "HELLO,";
}

function getGreetingPT(){
	var now = new Date();
	var hour = now.getHours();
	
	if( hour>=7 && hour<=12 ){
		return "BOM DIA,";
	}
	
	if( hour>12 && hour<=18 ){
		return "BOA TARDE,";
	}
	
	return "BOA NOITE,";
}

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

function SetSelectedOption(menuOption){
	setCookie("menuOption",menuOption,1);
}

function GetSelectedOption(){
	var current = getCookie("menuOption");
	if( current=="" )
	{
		SetSelectedOption(0);
		return 0;
	}
	else{
		return parseInt(current);
	}
}

// For checking if a string is empty, null or undefined I use:
function isEmpty(str) {
    return (!str || 0 === str.length);
}

// For checking if a string is blank, null or undefined I use:
function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

// For checking if a string is blank or contains only white-space:
/*String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};*/