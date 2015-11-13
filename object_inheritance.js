//objects, inheritance 
//hostess object inherits from shiftWorker

var shiftWorker = {
	gender: "female", 
	role: "waitress", 
	uniform: function(season) {
	if(season==="winter") {
	return "black dress";
	}
	else{
	return "tan dress";
	  }
	}
};

console.log(shiftWorker.uniform("winter"));
//console returns "black dress"

var hostess = Object.create(shiftWorker);
hostess.role = "hostess";
console.log(hostess.role + " " + hostess.uniform("spring"));
//console returns "hostess tan dress"

