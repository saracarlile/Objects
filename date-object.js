// If you simply create a date object using new, you get the current date and time.
console.log(new Date());
//Wed May 25 2016 08:33:06 GMT-0500 (Central Daylight Time)
//**JavaScript uses a convention where month numbers start at zero (so December is 11), yet day numbers start at one.**
console.log(new Date(2015, 11, 9, 12, 59, 59, 999));
// Wed Dec 09 2015 12:59:59 GMT-0600 (Central Standard Time)
//(hours, minutes, seconds, and milliseconds) last four arguments
//Timestamps are stored as the number of milliseconds since the start of 1970, 
// You can get the current millisecond count by creating a new Date object and calling getTime on it but also by calling the Date.now function.
console.log(new Date().getTime());
//1464183576205
console.log(new Date(11464183713800));
// Wed May 25 2016 08:39:36 GMT-0500 (Central Daylight Time)

//Regular expressions have an exec  method that will return null if no match was found and return an object with information about the match otherwise.
//Create a date object from a string example.
function findDate(string) {
    var dateTime = /(\d{1,2})-(\d{1,2})-(\d{4})/;  //regular expression
    var match = dateTime.exec(string);
    console.log(match);
    return new Date(Number(match[3]),
        Number(match[2]) - 1, //month needs to minus one to convert to JS from string
        Number(match[1]));
}
console.log(findDate("30-1-2015"));
// ["30-1-2015", "30", "1", "2015", index: 0, input: "30-1-2015"]
// Fri Jan 30 2015 00:00:00 GMT-0600 (Central Standard Time)