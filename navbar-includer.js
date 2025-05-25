const includeNavbar = () => {
	fetch("static/navbar.html")
		.then((t) => t.text())
		.then((t) => (document.querySelector(".navbar").innerHTML = t))
		.catch(
			(_) =>
				(document.querySelector(".navbar").textContent =
					"Unable to load navbar. idfk.")
		)
}
