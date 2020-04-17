var app = {
	init: () => {
		console.log("Initializing App")

		window.addEventListener('scroll', e => {
			if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1)
				document.getElementById("app").classList.add('scrolled')
			else
				document.getElementById("app").classList.remove('scrolled')
		});
	}
}

window.addEventListener("DOMContentLoaded", e => {
	app.init()
});