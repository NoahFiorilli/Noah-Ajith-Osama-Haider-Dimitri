// JavaScript Document

function popitup(url) {
	newwindow=window.open(url,'name','height=200,width=330');
	if (window.focus) {newwindow.focus()}
	return false;
}



function ShowHide(divId)
{
if(document.getElementById(divId).style.display == 'none')
{
document.getElementById(divId).style.display='block';
}
else
{
document.getElementById(divId).style.display = 'none';
}
}