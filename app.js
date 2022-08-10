
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

