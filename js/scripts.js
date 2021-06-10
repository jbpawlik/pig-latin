// Business Log

function pigLatin(word) {
  if (word[0] === 'a' || word[0] ===  'e' || word[0] === 'i' || word[0] === 'o' || word[0] === 'u') {
    return true;
  } else if (word[0] !== 'a' || word[0] !==  'e' || word[0] !== 'i' || word[0] !== 'o' || word[0] !== 'u') {
    return false;
  }
}

function getVowels(text) {
  let vowelsCount = 0;
  let word = text.toString();
  for (let i = 0; i <= word.length -1; i++) {
    if (word.charAt(i) === "a" || word.charAt(i) === "e" || word.charAt(i) === "i" || word.charAt(i) === "o" || word.charAt(i) === "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount
} getVowels('Hello')

// function startVowel(text) {
//   let vowels = ["a", "e", "i", "o", "u"]
//   let textArray = text.split (" ");
//     let iCount=0
//     let vowelArray=""
//     textArray.forEach(function(i) {
//       for (let j=0; j<=vowels.length; j++){
//         if(i.startsWith(vowels[j])){
//           if(i.startsWith(vowels[j])){
//             icount++;
//             vowelsArray.push(i.toLowerCase())
//           }
//         }
//     }})
//     return iCount
// }

// loop practice
// function consonantFinder(passage) {
//   const passageArray = ["a", "e", "i", "o", "u" , "b"]
//   let consonantAlert = false;
//   for (let i = 0; i < passageArray.length; i +=1) {
//     if (passageArray[i] === 'b') {
//       consonantAlert = true;
//       break;
//     } else {
//       return
//     }
//     console.log('looped!');
//     }

//  Regex
//function getVowels(text) {
//  let vowelCount = text.match(/[aeiou]/gi);
//  return vowelCount
//}


//   const countVowels = str => Array.from(str)
//   .filter(letter => 'aeiou'.includes(letter)).length;

// console.log(countVowels('abcdefghijklmnopqrstuvwxyz')); // 5
// console.log(countVowels('test')); // 1
// console.log(countVowels('ddd')); // 0

//   const vowel = ['a' , 'e' , 'i' , 'o' , 'u'];
//     if (vowel.includes(word[0])) {
//       return true;
//     }
//     return false

//loop practice
// function consonantFinder(passage) {
//   const passageArray = ["a", "e", "i", "o", "u" , "b"]
//   let consonantAlert = false;
//   for (let i = 0; i < passageArray.length; i +=1) {
//     if (passageArray[i] === 'b') {
//       consonantAlert = true;
//       break;
//     };
//     console.log('looped!');
//     }
//     consonantAlert;
//   }


// User Interface Logic

$(document).ready(function() {
  $("form#userInput").submit(function(event){
  event.preventDefault();

  const textInput = $('#textInput').val();

    if (pigLatin(textInput) === true) {
    $('#translated').text(textInput.concat('way')); 
    }  else if (pigLatin(textInput) === false) {
    $('#translated').text(textInput.concat('ay'));
    }
    else {
      $('#translated').text('!')
    }
  })
})
















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