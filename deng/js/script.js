$(document).ready(function(){
    $('.link').click(function(){
	$('.link').css('border-bottom','0');
	$(this).css('padding-bottom', '2px');
	$(this).css('border-bottom','solid 2px');
	var section = '#' + $(this).text();
	$('.hide').hide();
	$(section).fadeIn();
	
    });

    $(function(){
	var typed = new Typed("#details", {
	    stringsElement: '#detail-contents',
	    typeSpeed: 35,
	    backSpeed: 15,
	    startDelay: 2500,
	    backDelay: 3000,
	    loop: true,
	    loopCount: false,
	    showCursor: true,
	    cursorChar: "|",
	    smartBackspace: true //Default value
	});
    });
});