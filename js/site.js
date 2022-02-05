// Get the string from the page
// controller function

function getValue(){

document.getElementById("alert").classList.add("invisible");

let userString = document.getElementById("userString").value;

let revstring = reverseString(userString);

displayString(revstring);

}


// reverse the string
// Logic function
function reverseString(userString) {

    let revstring = [];

    // let name = Spencer
    //name[0] = 'S'
    //name[4] = 'n'
    // last pos in an array name.length - 1

    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revstring += userString[index];
        }
        return revstring;
    }


// Display the reversed string to the user
// View Function
function displayString(revstring) {

//write to the page
document.getElementById("msg").innerHTML = `Your string reversed is: ${revstring}`;
//show the alert box
document.getElementById("alert").classList.remove("invisible");


}




// bring all classes on an element
