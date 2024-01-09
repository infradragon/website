fetch('static/navbar.html')
  .then(t = t.text()).then(t => document.querySelector("head > nav").innerHTML = t)
  .catch(_ => document.querySelector("head > nav").textContent = "Unable to load navbar. idfk.")
