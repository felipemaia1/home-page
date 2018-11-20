$('.hamburger').on('click', function(){
	$('.menu-responsive').slideToggle();
})

$('nav a').on('click', function() {
	var href = $(this).attr('href');
	scroll(event, href);
})

function scroll(event, id) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $(id).offset().top -35
	}, 1000);
}