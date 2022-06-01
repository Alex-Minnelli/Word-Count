function myFunction() {
  var x;
  x = document.getElementById("text").value;

  console.log(x);

  var wc = "Word Count: ";
  var cc = "Character Count: ";
  var sc = "Sentence Count: ";

  const wordCount = document.createElement("p");
  wordCount.innerText=(wc.concat(countWords()));
  document.body.appendChild(wordCount);

  const characterCount = document.createElement("p");
  characterCount.innerText=(cc.concat(countCharacters()));
  document.body.appendChild(characterCount);

  const sentenceCount = document.createElement("p");
  sentenceCount.innerText=(sc.concat(countSentences()));
  document.body.appendChild(sentenceCount);
}

function countWords() {
  var x = document.getElementById("text").value;

  return x.split(' ').length;
}

function countCharacters() {
  var x = document.getElementById("text").value;

  return x.length;
}

function countSentences() {
   var x = document.getElementById("text").value;

   var y = x.split(".").length-1;
   return y;

}
