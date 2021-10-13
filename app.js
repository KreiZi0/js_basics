//event elements

const list = document.querySelector('ul');
const form = document.querySelector('form');
const taskInput = document.querySelector('#task');


const link = document.getElementById('clear-tasks')
// submit
form.addEventListener('submit', addTask);

function addTask(e) {
	const li = document.createElement('li');
	const list = document.querySelector('ul');

	li.className = 'collection-item';
	li.appendChild(document.createTextNode(taskInput.value));

	const link = document.createElement('a');
	link.className = 'secondary-content';
	link.appendChild(document.createTextNode('X'));
	link.setAttribute('href', '#');




console.log(list)
	li.appendChild(link);
//click by symbol
	list.appendChild(li);



	e.preventDefault();


}

list.addEventListener("click", delete_row);

link.addEventListener("click", removeTasks);

function runEvent(e) {
	console.log(`Event is ${e.type}`);
	console.log(e.target.value);

}


function delete_row(e) {
	if (e.target.textContent == "X"){
		if(confirm("Are you sure you want to delete?")) {
			e.target.parentElement.remove();
		}
	}
}



function removeTasks(e) {
	if (e.target.id == "clear-tasks"){
		if(confirm("Are you sure you want to clear tasks?")) {
			e.target.parentElement.remove();
			localStorage.setItem("favoriteflavor, vanilla");
			console.log(localStorage)
		}
	}
}

////	if (e.target.textcontent == "Add Task"){
//		localStorage.setItem('favoriteflavor','vanilla')
	