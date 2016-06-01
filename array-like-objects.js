//array-like object
var people = {
  0: "Sam",
  1: "Fred",
  2: "Cindy",
  3: "Samantha",
  length: 4
};

var arrayPeople = Array.prototype.slice.call(people);
console.log(arrayPeople);
console.log(arrayPeople.join(", "));


//["Sam", "Fred", "Cindy", "Samantha"]
//"Sam, Fred, Cindy, Samantha"

//turn to Array with Array.prototype.slice.call()
//convert to string with join(", ")