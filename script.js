// Меню бургер
const headerHamburger = document.querySelector('.header__hamburger');
if (headerHamburger) {
	const menuBody = document.querySelector('.header-nav');
	headerHamburger.addEventListener("click", function(e){
		document.body.classList.toggle('_lock');
		headerHamburger.classList.toggle('_active');
		menuBody.classList.toggle('_active')
	})
}