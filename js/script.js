/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  { quote: "If I'm not back in five minutes, just wait longer.", source: "Jim Carey", citation: "Ace Ventura", year: 1994, distributer: "Warner Bros" },
  { quote: "It'd be a lot cooler if you did.", source: "Matthew McConaughey", citation: "Dazed and Confused", year: 1993, distributer: "Gramercy Pictures"},
  { quote: "Hey man, you done with that apple core?", source: "David Spade", citation: "Joe Dirt", year: 2001, distributer: "Sony Pictures" },
  { quote: "60 percent of the time, it works every time.", source: "Paul Rudd", citation: "Anchorman", year: 2004, distributer: "DreamWorks" },
  { quote: "I expected the Rocky Mountains to be a little rockier than this.", source: "Jeff Daniels", citation: "Dumb and Dumber", year: 1994, distributer: "New Line Cinema" }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
};


/***
 * `printQuote` function
***/



function printQuote() {
  let quote = getRandomQuote();
  let text;
  text = `<p class="quote"> ${quote.quote}</p>
  <p class="source">${quote.source}<span class="citation">${quote.citation}</span><span class="year">${quote.year}</span><span class="year">${quote.distributer}</span></p>`

  document.getElementById('quote-box').innerHTML = text; 
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);