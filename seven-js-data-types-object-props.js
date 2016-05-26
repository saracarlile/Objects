//Create a JavaScript object that holds properties of the seven different
//JavaScript data types: Boolean, Null, Undefined, Number, String, Symbol, and Object.

var dataTypeHolder = {
    boolean: true,
    nullValue: null,
    undefinedValue: undefined,
    numberValue: 54,
    stringValue: "JavaScript",
    symbolValue: Symbol("foo"),
    greenBall: {
        size: "small", 
        color: "green"
    }     
};

//Iterate over object and print values to console.
for (var val in dataTypeHolder){
   console.log(dataTypeHolder[val]);
}

//true
//null
//undefined
//54
//"JavaScript"
//[object Symbol] { ... }
//[object Object] {
//  color: "green",
//  size: "small"
//}