
// 18 Joke App 
// -An App that generate a statement and a punchlines-statement that equals a joke


// Create 4 variables and assign them to their respective elements: setupDiv, punchlinDiv, punchlineBtn, newJokeBtn

const setupDiv = document.getElementById("setup"); //statementDiv + class bubble
const punchlineDiv = document.getElementById("punchline");//punchlineDiv+ add class bubble
const punchlineBtn = document.getElementById("punchlineBtn");
const newJokeBtn = document.getElementById("newJokeBtn"); //newstatementDiv
let punchline; // this is needed within 2 different function, we use let becos it content wil change
// for const setupDiv it is constant, it is only the .innerHTML that is receiving content e.g line 49


// Add an event listener for the punchline button. When clicked it should call a function called getPunchline
// Create the getPunchline function. 
// This function should:  Insert the punchline into the punchlineDiv
// Add the class "bubble" to the punchlineDiv
// Toggle the "hidden" class on both buttons.

punchlineBtn.addEventListener('click', getPunchline);

function getPunchline() {
    punchlineDiv.innerHTML = punchline; //store in a variable-punchline ch receives content from the api
    //becos joke[0].punchline cannot be acessed form here it is inside another function 
    punchlineDiv.classList.add('bubble');
    punchlineBtn.classList.toggle('hidden');
    newJokeBtn.classList.toggle('hidden');
}


// GET NEW JOKE(joke.setup) & DISPLAY IT INSIDE SETUP DIV
// Add an event listener for the new joke button. When clicked it should call the getJoke function 
// create an async function called getJoke
// Create a variable called jokePromise that fetches a joke from https://official-joke-api.appspot.com/jokes/programming/random
// create a variable called joke that consumes the json data

newJokeBtn.addEventListener('click', getJoke);

async function getJoke() {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random');
    const joke = await jokePromise.json();

   //note the api as different attribute we take only e.g joke & punchline

    //1. Get the statement from the jokePromise and insert it into the setupDiv(placeholder)
    // which set the first statement as the placeholder when you first open the app 
    setupDiv.innerHTML = joke[0].setup; //joke[0].statement 
    newJokeBtn.classList.toggle('hidden');
    punchlineDiv.innerHTML = "";
    punchlineDiv.classList.remove('bubble');
    punchlineBtn.classList.toggle('hidden');
    // the setup div is always there we dont hide its bubble-classList,
    // we also add toggle-classlist to newjokebtn to hide & unhide   


    //2. Get the punchline-statement from the jokePromise and insert it into punchlineVariable, then punchlneDiv(new)
    // Create a global variable called punchline(see above) 
    // this will be updated with new punchline statement
    // Assign the current punchline to the punchline variable.
    //this will then be inserted into the punchlneDiv by calling the getPunchline() (see above)
    punchline = joke[0].punchline; //Clear the punchlinediv & remove the "bubble" class
    
    // WHY NOT THIS - punchlineDiv.innerHTML = joke[0].punchline; 
    // - becos this can only be acessed within this function & 
    // we need this outside here e.g inside getPunchline() function
    //NOTE:Also note that - setupDiv.innerHTML = joke[0].setup; was no store in a variable becos 
    // it was only used within this function i.e  getJoke()

}

getJoke();

