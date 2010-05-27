$(document).ready(function()
{
	$(".helpmessage").click(function()
	{
		var message = $(this).val();
		$(this).val("").removeClass("helpmessage").blur(function()
		{
			if ($(this).val().length == 0)
			{
				$(this).addClass("helpmessage").val(message);
			}
		});
	});
});

function obj_hide(obj)
{
	document.getElementById(obj).style.display = 'none';
}
function obj_show(obj)
{
	document.getElementById(obj).style.display = '';
}

function openPopup(url)
{
	popup = window.open(url, 'popup', 'height=700, width=800, left=10, top=10, resizable=yes, scrollbars=yes, toolbar=no, menubar=no, location=no, directories=no');
}


