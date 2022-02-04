console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Your form has been submitted successfully")
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

document.querySelector('#mouseover').addEventListener('mouseover', () => {
	alert("This duck almost looks as good as you.")
})

