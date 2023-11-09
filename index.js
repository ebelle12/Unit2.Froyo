/* 
	
// vanilla,vanilla,vanilla,strawberry,coffee,coffee
*/
function froyoCount() {
    // 1. The user is prompted for froyo flavors upon entering the website.

    const userInput = prompt("Enter flavors");

    // 2. The user's input string is split into an array of strings.

    const froyos = userInput.split(",");

    // 3.  A loop is used to iterate through the array of flavors.
    // 4. An object is used to keep count of how many orders there are of each flavor.
    const order = {};
    for (let froyo of froyos) {

        if (froyo in order) {
            order[froyo]++;
        } else {
            order[froyo] = 1;
        }
    }
    return order;
}
console.log(froyoCount());
