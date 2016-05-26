//what does this function return?

function ninja(){
  var weapon = "kantana";
  return this.weapon;
}

console.log(ninja());

//undefined
//this refers to gobal object