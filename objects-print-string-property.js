//Iterate over all keys in object.  Print to console if the contents of a key are a string.
var person = {
  name: "Robert",
  age: 40,
  numID: 64,
  nickname: "Rob",
  pet: "ginger the cat"
};


for (var key in person) {
   if (typeof person[key] === 'string')
     console.log(person[key]);
}

//"Robert"
//"Rob"
//"ginger the cat"