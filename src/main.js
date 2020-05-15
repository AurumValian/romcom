
// Create variables targetting the relevant DOM elements here 👇

var bookCover = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');



// Make DOM commands
// define our variables which are 'var covers'
//

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('DOMContentLoaded', loadRandomCover());

// Create your event handlers and other functions here 👇
//window.onload = (loadRandomCover());

// We've provided one function to get you started

// var array = [1,3,4];
// this test passed
// console.log(getRandomIndex(array))

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function newRandomCover() {
  return new Cover (covers[getRandomIndex(covers)], titles[getRandomIndex(titles)],
  descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
}

function loadRandomCover() {
  currentCover = newRandomCover();
  bookCover.setAttribute("src", currentCover.cover);
  bookTitle.innerText = currentCover.title;
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
} // returns index numbers



// psuedo code create a function called newRandomCover()
// create an event listener 'load'
// within function create a new cover with cover Object
// run getRandomIndex four times in the contructor (1 covers, 1 titles, 2 descriptors);
// get dom commands to retrieve the classes from index.html
// reassign based on the value of our new cover

// Idea Create two functions one to pull new cover and the other to display
