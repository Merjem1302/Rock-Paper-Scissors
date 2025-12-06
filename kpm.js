const robot = ['kamen','papir','makaze'];
const rez = [0,0];
let poeniRobota = 0;
let poeniIgraca = 0;

let scr = document.getElementById('score').innerHTML = rez[0] + " : " + rez[1];
function choose(parmetar){
	let potez = Math.floor(Math.random()*3);
	document.getElementById('pozetKomp').innerHTML = robot[potez];
	if(parmetar == "kamen"){
		if(robot[potez] == "papir") {
			poeniRobota++;
			console.log(poeniRobota);
	}
		else if(robot[potez]== "makaze") {poeniIgraca++;}
		else {return "Igraj ponovo";}
	}
	else if(parmetar == "papir"){
		if(robot[potez] == "makaze") {poeniRobota++;}
		else if(robot[potez] == "kamen") {poeniIgraca++;}
		else {return "Igraj ponovo";}
	}
	else if(parmetar == "makaze"){
		if(robot[potez] == "kamen") {poeniRobota++;}
		else if(robot[potez] == "papir") {poeniIgraca++;}
		else {return "Igraj ponovo";}
	}

	rez[0] = poeniIgraca;
	rez[1] = poeniRobota;

	scr = document.getElementById('score').innerHTML = rez[0] + " : " + rez[1];

	

}

