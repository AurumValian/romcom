
var bookCover = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeYourOwnButton = document.querySelector('.make-new-button');


var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

window.addEventListener('DOMContentLoaded', loadRandomCover);
randomCoverButton.addEventListener('click', loadRandomCover);






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
}
