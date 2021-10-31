const buttons = document.querySelectorAll('.card__shareButton');
const shareElement = document.querySelector('.card__shareElement');
const shareElementDesktop = document.querySelector('.card__shareElementDesktop');

buttons.forEach(button => {
	button.addEventListener('click', function() {

		if (window.innerWidth < 1130) {
			shareElement.classList.toggle('shareElement--active');
		} else {
			shareElementDesktop.classList.toggle('shareElement--active');
		}
		button.classList.toggle('card__shareButton--active');
	})
});

window.addEventListener('resize', function() {
	if ((window.innerWidth < 1130) && (shareElementDesktop.classList.contains('shareElement--active'))) {
		shareElementDesktop.classList.remove('shareElement--active');
		shareElement.classList.add('shareElement--active');
	}
	if ((window.innerWidth >= 1130) && (shareElement.classList.contains('shareElement--active'))) {
		shareElementDesktop.classList.add('shareElement--active');
		shareElement.classList.remove('shareElement--active');
	}
})