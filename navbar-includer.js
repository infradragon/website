const includeNavbar = () => {
	fetch("static/navbar.html")
		.then((t) => t.text())
		.then((t) => (document.querySelector("header > nav").innerHTML = t))
		.catch(
			(_) =>
				(document.querySelectorAll("header > nav").textContent =
					"Unable to load navbar. idfk.")
		)
}
