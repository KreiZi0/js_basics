let val;

//elementide loomine
const li = document.createElement('li');
//klassi määramine
li.className = 'collection-item';

//teksti lisamine
li.appendChild(document.createTextNode("Study JS element creation"));

//lisame li element ul-sse
const ul = document.querySelector('ul');


ul.appendChild(li);


console.log(li);