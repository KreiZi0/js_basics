let color = "blue";

switch(color){
	case 'red':
	console.log('stop!');
	break;
	case 'yellow':
	console.log("Attention");
	break;
	case 'green':
	console.log("Go!");
	break;
	default:
	console.log("This color is not allowed");
	break;

}

let kuupäev = new Date();
let päevanr = kuupäev.getDay();
//console.log(päevanr);

switch(päevanr){
	case 1:
	console.log('esmaspäev');
	break;
	case 2:
	console.log('teisipäev');
	break;
	case 3:
	console.log('kolmapäev');
	break;
	case 4:
	console.log('neljapäev');
	break;
	case 5:
	console.log("reede");
	break;
	case 6:
	console.log("laupäev");
	break;
	case 7:
	console.log("pühapäev");
	break;
	default:
	console.log("Ei sobi");
	break;

}
