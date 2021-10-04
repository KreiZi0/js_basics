//event elements

const form = document.querySelector('form');
const taskInput = document.querySelector('#task');


form.addEventListener('submit', runEvent)

function runEvent(e) {
	console.log(`Évent is ${e.type}`);
	console.log(taskInput.value)
	taskInput.value = "";
	e.preventDefault();
}