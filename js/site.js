        // get our user input with a function
        function getValue() {

    //make sure the alert is invisible
    document.getElementById("alert").classList.add("invisible");       
    
    // get user string for the page
    let  userString = document.getElementById("userString").value;
    
        // check for a palindrome 
        let returnObj = checkPalindrome(userString);
    
        //display out message to the screen as a function
       displayMessage(returnObj); 
    
       }
       //check if string is a palindrome
    function checkPalindrome(userString) {

      // taco cat covert all character to lower case
        userString = userString.toLowerCase();

        //remove spaces and special characters
         let regex = /[^a-z0-9]/gi;
        userString = userString.replace(regex,"");

        let revString = [];
        let returnObj = {};
        
        
        // reverse the string
        for (let index = userString.length - 1; index >= 0; index--) {
            revString += userString[index];
        }        
         if(revString == userString) {
            returnObj.isPalindrome = true;
            returnObj.msg = "Well done! You entered a palindrome!";
        }   
        else {
            returnObj.isPalindrome = false;
            returnObj.msg = "Sorry, you entered a non-palindrome!";
        }
        returnObj.reversed = revString;

        return returnObj;

         }


        //display a message to the string
        function displayMessage(returnObj) {
         
            document.getElementById("alertHeader").innerHTML = returnObj.msg;
            document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
            document.getElementById("alert").classList.remove("invisible");
            
        }
        
       