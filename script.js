/* Create an array */

let words = ["Nine", "plus", "ten", "equals", "twenty-one"];

/* Create function that concatenates array into 
a sentence (adding spaces between words), and 
outputs the result to '<p id="output"><p>' innerHTML */

let output = document.getElementById("output");
function generateSentence(arrayOfWords) {
    let sentence = "";
    for (let i = 0; i < arrayOfWords.length; i++){
        sentence += arrayOfWords[i] + " ";
    }
    output.innerHTML = sentence;
}


/* Add an event listener to generateBtn.
When clicked, the generateBtn should execute 
the generateSentence function, displaying the sentence. */

let generateBtn = document.getElementById("generateBtn");

generateBtn.addEventListener("click", function() {
    generateSentence(words);
});