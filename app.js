let val;
val = document.getElementById('task-title'); 
document.getElementById('task-title').style.background = '#333'; 
document.getElementById('task-title').style.color = "red";
document.getElementById('task-title').style.padding = '20px';
document.getElementById('task-title').textContent = "My tasks";
document.getElementById('task-title').innerText = 'My Favourite tasks';
document.getElementById('task-title').innerHTML = '<span style = "color: orange;">My tasks</span>'

val = document.querySelector('h4');
val = document.querySelector('#task-title');
val = document.querySelector('.collection-item');
val = document.querySelector('.collection-item:nth-child(even)');
val = document.querySelector('.collection-item:nth-child(odd)');
console.log(val)