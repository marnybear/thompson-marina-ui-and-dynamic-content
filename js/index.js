//Refferences to active elements
const userInput = document.getElementById("userIn");
const btn = document.getElementById("addItem");
const displayData = document.getElementById("displayD");
const err = document.querySelector(".error");

function addItem() {
    err.textContent = null;
    //Removing whitespace
   userInput.value = userInput.value.trim()
    //If user input is not empty
    if (userInput.value !== "") {
    //Create list item
    let listItem = document.createElement("li");
        //Assigning the value of text-field to the list item
    listItem.textContent = userInput.value;
    displayData.appendChild(listItem);
    err.textContent = "";
    userInput.value = "";
    userInput.focus();
    userInput.select();
    err.style.display = 'none';
    } else {
        err.textContent = "Please enter an item!";
        err.style.display = 'block';
    }
}

//Register btn for click event
btn.addEventListener("click", addItem);