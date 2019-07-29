/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

var randomNumber;    // Variable to store random number generated by getRandomQuote();
var randumQuote;     // Variable to store random quote generated by getRandomQuote();


/*** 
  An array of objects that can contain up to 5 properties: 
    quote: The quote that will be presented to the user
    source: The person who said the quote
    citation: The content source of the quote (aka interview, book, ect.)
    year: The year the quote originated 
    tags: Simple categories for the quotes
***/

var quotes = [
  {
    quote: "Don’t compare yourself with anyone in this world…if you do so, you are insulting yourself." , 
    source: "Bill Gates",
    tags: "Inspirational"
  }, 
  {
    quote: "When something is important enough, you do it even if the odds are not in your favor.", 
    source: "Elon Musk",
    tags: "Inspirational"
  }, 
  {
    quote: "No matter what people tell you, words and ideas can change the world.", 
    source: "Robin Williams",
    tags: "Inspirational"
  }, 
  {
    quote: "The world needs a sense of worth, and it will achieve it only by its people feeling that they are worthwhile.", 
    source: "Fred Rogers",
    tags: "Uplifting"
  }, 
  {
    quote: "It's kind of fun to do the impossible.", 
    source: "Walt Disney",
    tags: "Inspirational"
  }, 
  {
    quote: "I haven’t failed. I’ve just found 10,000 ways that won’t work.", 
    source: "Thomas Edison",
    tags: "Perseverance" 
  }, 
  {
    quote: "Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. The greatest thing in life is to keep your mind young.", 
    source: "Henry Ford",
    tags: "Education"
  }, 
  {
    quote: "Happiness is not a goal; it is a by-product.", 
    source: "Eleanor Roosevelt",
    tags: "Uplifting"
  }, 
  {
    quote: "...with great power there must also come -- great responsibility!", 
    source: "Stan Lee",
    citation: "Amazing Fantasy #15", 
    year: "1962",
    tags: "Inspiration"
  }, 
  {
    quote: "Find something that makes you happy and go for it.", 
    source: "Zendaya",
    tags: "Uplifting"
  }
]

/***
`getRandomQuote`
   - uses the randomNumber variable to store a random number between 0 and then length of the array 'quotes'
   - returns a random quote from the 'quotes' array using the randomNumber variable
***/

const getRandomQuote = () => {
  randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

// An array to hold colors to be used by getRandomBackground();
var colors = ["#023059", "#035E72", "#36A59A", "#F56469", "#F5A187", "#BB4043", "#4073B8", "#B3640F", "#5D1314"]

/*** 
 `getRandomBackground`
  - uses the randomNumber variable to store a random number between 0 and the length of the array 'colors'
  - returns a random background color from the 'colors' array 
 */

 const getRandomBackground = () => {
   randomNumber = Math.floor(Math.random() * colors.length);
   return colors[randomNumber];
 }


/***
  `printQuote`
   - Uses finalQuote to hold the HTML output
   - Adds the quote and source to the output
   - Uses if statments to add on additional features, if the exist 
   - Updates the HTML class "quote-box" with the output
***/

const printQuote () => {
  var finalQuote = ''; // Variable to store the final quote to be produced using printRandomQuote();
  randomQuote = getRandomQuote();
  finalQuote += '<p class="quote"> ' + randomQuote.quote + '</p>';
  finalQuote += '<p class="source"> ' + randomQuote.source; 

  if (randomQuote.citation){
    finalQuote += '<span class="citation"> ' + randomQuote.citation + '</span>';
  }

  if (randomQuote.year){
    finalQuote += '<span class="year"> ' + randomQuote.year + '</span>';
  }
  
  if (randomQuote.tags){
    finalQuote += '<span class="tags"> ' + randomQuote.tags + '</span>';
  }

  finalQuote += '</p>';

  document.getElementById('quote-box').innerHTML = finalQuote;
  document.body.style.backgroundColor = getRandomBackground();
}

// Changes the quote every 30 seconds by re-running printQuote();
setInterval(printQuote, 30000);

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);