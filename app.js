
// Ask the user to enter his/her name as input.
let userName=prompt("Enter your name");

//Ask the user to enter his/her gender as input. The answer should be either (male or female).

let gender=prompt("Enter yor gender \n (male or female)");
//Ask the user to enter his/her age as input and alert the user if the age is less than or equal to zero.

let age=prompt("Enter your age.");
if(age <=0){
alert("accourding to your age, you do not exist\n re-enter your age ");
age=prompt("Enter your age.");
}

//Ask the user to confirm if he wants to skip the welcoming message.

if(confirm("Do you want to see the welcoming massage?"))
{
    /**
     * Alert a welcoming message with the name of the user and the title Mr if the user is male and Ms if the user is female, and if the gender input is
 not correct alert the welcoming message without the title, according to the confirmation.
     */
    switch (gender) {
        case 'male':
            window.alert("Welcome Mr  "+userName);
            break;
            case 'female':
                window.alert("Welcome Ms  "+userName);
                break;
    
        default:
            window.alert("Welcome  "+userName);
    
            break;
    }

}







/**
 * As a user, I would like to answer more questions.So you should add new three (Yes/No / y / n) questions.
If the input was empty consider the answer is "invalid" string.
 */
let q1 = prompt("Are you a web developer?");
if (q1 !== "y" && q1 !== "yes" && q1 !== "n" && q1 !== "no") {
  q1 = "invalid";
}

let q2 = prompt("Are you currently working?");
if (q2 !== "y" && q2 !== "yes" && q2 !== "n" && q2 !== "no") {
  q2 = "invalid";
}

let q3 = prompt("Do you like your job?");
if (q3 !== "y" && q3 !== "yes" && q3 !== "n" && q3 !== "no") {
  q3 = "invalid";
}

//Consider putting all the answers into an array.
let ans = [];
ans.push(userName);
ans.push(gender);
ans.push(age);
ans.push(q1);
ans.push(q2);
ans.push(q3);
//traverse the array and print the items on the console.
ansRev = ans.reverse();
console.log(ansRev);


//Ask the user how many stars they rate your website (the number should be from 0-5) then alert thank you message 

let rate = prompt("Rate our website on a 0-5 scale");

if (rate >= 5) {
  rate = 5;
} else if (rate <= 0) {
  rate = 0;
} else if (rate >= 0 && rate <= 5) {
  alert("You gave us " + rate + " stars! awesome");
}