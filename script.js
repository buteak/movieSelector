const startAddMovieButton = document.querySelector('header button');
const addModal = document.getElementById("add-modal");
const backdrop = document.getElementById('backdrop');
const cancelAddMovieButton = addModal.querySelector('button');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const allInput = document.querySelectorAll('input');
const section = document.querySelector('section');
const movies = [];





function clearMovieInput(){
  for(const usrInput of allInput){
      usrInput.value = "";
  }
}
 
function updateUI (){
  section.classList.toggle('invisible');
}

function renderNewElement (title, image, rating){
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-elemet__image">
      <img src="${image}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2> ${title}</h2>
      <p>${rating}/ 5 stars</P>
    </div>
    `;
    const listRoot = document.getElementById('movie-list');
    listRoot.append(newMovieElement);

}



function addMovieHandler(){
    const titleValue = allInput[0].value;
    const imageValue = allInput[1].value;
    const rating = allInput[2].value;

    if(titleValue.trim() === "" 
    || imageValue.trim() === "" 
    || rating.trim() === "" || rating < 1 || rating > 5){
        alert('Please enter a  valid rating between 1 and 5');
        return;
    }
     const newMovie = {
         title: titleValue,
         image: imageValue,
         rating: rating,
     };
     movies.push(newMovie);
     console.log(movies);
     toggleMovieModal();
     clearMovieInput();
     updateUI();
     renderNewElement(newMovie.title, newMovie.image, newMovie.rating);
}

function toggleMovieModal (){
     addModal.classList.toggle('visible');
     backDropHandler();
}

function backDropHandler (){
        backdrop.classList.toggle('visible');
}

function backdropClickHandler (){
    toggleMovieModal();
}

function cancelAddMovie (){
    toggleMovieModal();
    clearMovieInput();
}



startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAddMovieButton.addEventListener('click', addMovieHandler);