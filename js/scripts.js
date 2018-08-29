var $ = document.querySelector.bind(document);
		var menu = $('.hamburger');
		var containerMenu = $('.container-menu');
		var menuList = $('.container-menu .list ul');

		menu.onclick = function() {
			containerMenu.style.display = 'block';
			menuList.style.display = 'block';
		}

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