const includeNavbar = () => {
	fetch("static/navbar.html")
		.then((t) => t.text())
		.then((t) => (document.querySelectorAll("nav").innerHTML = t))
		.catch(
			(_) =>
				(document.querySelectorAll("nav").textContent =
					"Unable to load navbar. idfk.")
		)
}
