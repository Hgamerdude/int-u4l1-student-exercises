let submitButton = document.querySelector(".submit");
let messages = document.querySelector(".messages");

// CODE ALONG, PART 1 CONTINUED
// 3. Declare a variable to store the input element
let input = document.querySelector(".comment");

submitButton.addEventListener("click", function() {
    // 4. Declare a variable to store the value of the input
    // 5. Use the console to check a value is saved.
    //  - Type something and click the button to confirm it works!
    let userInput = input.value;
    console.log(userInput);
    alert(userInput);
    

    // CODE ALONG, PART 2
    // 6. User .innerHTML to display the value to the messages div.
    // 7. Type something and test it out.
    messages.innerHTML = userInput;
    
    let a = Math.random() * 5;

    if(a>4.9){
        messages.style.color = "red";
    }
    else{
        if(a>3.9){
            messages.style.color = "blue";
        }
        else{
            if(a>2.9){
                if(a>1.5){
                    messages.style.color = "green";
                }
                else{
                    if(a>1){
                        messages.style.color = "yellow";
                    }
                    else{
                        messages.style.color = "orange";
                    }
                }
            }
            else{

            }
        }
    }

});