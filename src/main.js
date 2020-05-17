
var bookCover = document.querySelector('.cover-image');
var bookTitle = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var homeButton = document.querySelector('.home-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var makeYourOwnButton = document.querySelector('.make-new-button');
var homeView = document.querySelector('.home-view');
var formView = document.querySelector('.form-view');
var savedView = document.querySelector('.saved-view');
var coverInput = document.querySelector('#cover').value;
var titleInput = document.querySelector('#title').value;
var tagline1Input = document.querySelector('#descriptor1').value;
var tagline2Input = document.querySelector('#descriptor2').value;


var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

window.addEventListener('DOMContentLoaded', loadRandomCover);
randomCoverButton.addEventListener('click', loadRandomCover);
homeButton.addEventListener('click', clickOnHome);
makeYourOwnButton.addEventListener('click', clickOnMake);
viewSavedButton.addEventListener('click', clickOnSavedCovers);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function newRandomCover() {
  return new Cover (covers[getRandomIndex(covers)], titles[getRandomIndex(titles)],
  descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
}

function loadRandomCover() { // works on initial view
  currentCover = newRandomCover();
  bookCover.setAttribute("src", currentCover.cover);
  tagline1.innerText = currentCover.tagline1;
  tagline2.innerText = currentCover.tagline2;
  bookTitle.innerText = currentCover.title;
}

function clickOnMake() { // Takes you to create your own cover page
  homeView.classList.add('hidden');
  savedView.classList.add('hidden');
  formView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
}

function clickOnHome() { // back to home (initial view)
  formView.classList.add('hidden');
  savedView.classList.add('hidden');
  homeView.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
}

function clickOnSavedCovers() { // iteration 4 where we add new titles
  formView.classList.add('hidden');
  homeView.classList.add('hidden');
  savedView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  makeYourOwnButton.classList.remove('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  viewSavedButton.classList.remove('hidden');
}

function createNewCover()

function makeVisible() {
  homeView.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  formView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  makeYourOwnButton.classList.remove('hidden');
  savedView.classList.remove('hidden');
  viewSavedButton.classList.remove('hidden');
}

function makeInvisible() {
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  formView.classList.add('hidden');
  homeButton.classList.add('hidden');
  makeYourOwnButton.classList.add('hidden');
  savedView.classList.add('hidden');
  viewSavedButton.classList.add('hidden');
}
