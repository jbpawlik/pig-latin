Describe pigLatin();

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: 
  pigLatin("a");
Expected Output: "away"

Test: "It will move first consonant of words that begin with consonants to end of word"
Code:
  pigLatin("day")
Expected Output: "ayd"

Test: "It will add 'ay' to the end of words that begin with consonants"
Code:
  pigLatin('day')
Expected Output: "dayay"