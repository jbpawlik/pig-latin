// Business Log

function pigLatin(word) {
  if (word[0] === 'a' || word[0] ===  'e' || word[0] === 'i' || word[0] === 'o' || word[0] === 'u') {
    return true;
  } else if (word[0] !== 'a' || word[0] !==  'e' || word[0] !== 'i' || word[0] !== 'o' || word[0] !== 'u') {
    return false;
  }
}


// User Interface Logic

$(document).ready(function() {
  $("form#userInput").submit(function(event){
  event.preventDefault();

  const textInput = $('#textInput').val();

    if (pigLatin(textInput) === true) {
    $('#translated').append(textInput).concat('way'); 
    }  else if (pigLatin(textInput) === false) {
    $('#translated').text(textInput).concat('ay');
    }
    else {
      $('#translated').text('!')
    }
  })
})


// Describe pigLatin();

// Test: "It will add 'way' to the end of words that begin with a vowel."
// Code: 
//   pigLatin("a");
// Expected Output: "away"


//Masha
// function pigLatin(word) {
//   const vowel = ['a' , 'e' , 'i' , 'o' , 'u'];
//     if (vowel.includes(word[0])) {
//       return true;
//     }
//     return false
// }

// second iteration
// function pigLatin(word) {
//   if (word[0] === 'a' || word[0] ===  'e' || word[0] === 'i' || word[0] === 'o' || word[0] === 'u') {
//     return word.concat('way');
//   } else if (word[0] !== 'a' || word[0] !==  'e' || word[0] !== 'i' || word[0] !== 'o' || word[0] !== 'u') {
//     let wordArray = [word];
//     let consonant =  wordArray.slice(0)
//     return consonant.concat('ay');
//   }
// }

// Checks whether word starts with vowel 
// function pigLatin(word) {
//   if (word[0] === 'a' || word[0] ===  'e' || word[0] === 'i' || word[0] === 'o' || word[0] === 'u') {
//     return true;
//   } 
//   return false;
// }





// function pigLatin(word) {
//   let wordArray = [word]
//   if (wordArray[0] === 'a' || 'e' || 'i' || 'o' || 'u') {
//   wordArray.concat('way') }
//   else if 
//     (wordArray[0] !== 'a' || 'e' || 'i' || 'o' || 'u') {
//   word;
//     }
//     return wordArray;
//   }
//  vowels = ['a' , 'e' , 'i' , 'o' , 'u'];
//  for (index = 0; index += array.lenth; index ++) 