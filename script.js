let button = document.querySelector("#myButton")
let ul = document.createElement("ul")
document.body.appendChild(ul)

button.addEventListener("click", function(e){
	let text = document.querySelector("input[name='myText']")
		let li = document.createElement("li")
		li.innerText = text.value
		ul.appendChild(li)
})
