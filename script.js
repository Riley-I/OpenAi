
//OPEN API CODING CHALLENGE
//https://beta.openai.com
//RILEY INNISS | rileyidev.ca | info@rileyidev.ca



//////////////////SENDING REQUESTS////////////////

//data object
const data = {
    prompt: "",
    temperature: 0.9, //higher = more risks
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
   };


//Display prompt
function getPrompt(data){

  let promptValue = document.getElementById("prompt").value;
  data.prompt = promptValue; //push prompt value into data object
  console.log(data);
  linebreak = document.createElement("br");
  const promptDiv = document.getElementById("writePrompt");
  const li = document.createElement("li");
  li.innerHTML = promptValue;
  promptDiv.appendChild(li);
  li.appendChild(linebreak)
}

//console.log(secretKey)
let key = secretKey;

//SEND REQUEST
function sendRequest(){
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + key,
        },
        body: JSON.stringify(data),
       })
       .then(response => response.json())
        .then(data => {
    
        let responseArray = data.choices;
    
        for (let i = 0; i < responseArray.length; i++) {
            console.log(responseArray[i].text);

            let response = responseArray[i].text;
            console.log(response);

            linebreak = document.createElement("br");
            const responseDiv = document.getElementById("writeResponse");
            const liResponse = document.createElement("li");
            liResponse.classList.add("response");
            liResponse.innerHTML = response;
            responseDiv.appendChild(liResponse);
            liResponse.appendChild(linebreak);
          } 
        })
        .catch((error) => {
        console.error('Error:', error);
        });
}


////////////////SUGGESTIONS////////////////

var myElementOne = document.getElementById("suggestionOne");
var myElementTwo = document.getElementById("suggestionTwo");
var myElementThree = document.getElementById("suggestionThree");

function getSuggestionsFirst(myElementOne){
  //console.log(myElementOne);
  let btn = document.createElement("button");
  btn.innerHTML = "Select";

      btn.onclick  = function() {
          let promptValue = document.getElementById("suggestionOne").innerText;
          // console.log(promptValue);
          data.prompt = promptValue;
          console.log(data);
          const promptDiv = document.getElementById("writePrompt");
          const li = document.createElement("li");
          li.innerHTML = promptValue;
          promptDiv.appendChild(li);

          sendRequest()
        }
  //console.log(data);
  myElementOne.after(btn);
}

function getSuggestionsSecond(myElementTwo){
  //console.log(myElementTwo);
  let btn = document.createElement("button");
  btn.innerHTML = "Select";

      btn.onclick  = function() {
          let promptValue = document.getElementById("suggestionTwo").innerText;
          // console.log(promptValue);
          data.prompt = promptValue;
          console.log(data);
          const promptDiv = document.getElementById("writePrompt");
          const li = document.createElement("li");
          li.innerHTML = promptValue;
          promptDiv.appendChild(li);

          sendRequest()
        }
  //console.log(data);
  myElementTwo.after(btn);
}

function getSuggestionsThird(myElementThree){
  //console.log(myElementThree);
  let btn = document.createElement("button");
  btn.innerHTML = "Select";

      btn.onclick  = function() {
        let promptValue = document.getElementById("suggestionThree").innerText;
        // console.log(promptValue);
        data.prompt = promptValue;
        console.log(data);
          const promptDiv = document.getElementById("writePrompt");
          const li = document.createElement("li");
          li.innerHTML = promptValue;
          promptDiv.appendChild(li);

          sendRequest()
        }
  //console.log(data);
  myElementThree.after(btn);
}

getSuggestionsFirst(myElementOne);
getSuggestionsSecond(myElementTwo);
getSuggestionsThird(myElementThree);


//////////////////CLEAR////////////////

  //Clear prompt 
  function clearRequest() {
    document.getElementById("form").reset(); 
    window.location.reload();
  }

