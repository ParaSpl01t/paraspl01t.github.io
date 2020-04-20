var app = {
	init: () => {
		console.log("Initializing App")

		window.addEventListener("scroll", e => {
			document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ? document.getElementById("app").classList.add("scrolled") : document.getElementById("app").classList.remove("scrolled")
		});
	},
	toggleTheme: () => {
		document.documentElement.className = localStorage.getItem('theme') !== 'dark' ? 'theme-dark' : 'theme-light';
		localStorage.setItem('theme', document.documentElement.className.replace('theme-', ''))
	}
}

window.addEventListener("DOMContentLoaded", e => {
	app.init()
});