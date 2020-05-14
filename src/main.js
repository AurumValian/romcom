
// Create variables targetting the relevant DOM elements here 👇

var bookCover = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');

console.log('This should point to covers and HTML code: ', bookCover);


// Make DOM commands
// define our variables which are 'var covers'
//

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your eent handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// psuedo code create a function called newRandomCover()
// create an event listener 'load'
// within function create a new cover with cover Object
// run getRandomIndex four times in the contructor (1 covers, 1 titles, 2 descriptors);
// get dom commands to retrieve the classes from index.html
// reassign based on the value of our new cover

// Idea Create two functions one to pull new cover and the other to display
