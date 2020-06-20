const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal');

const backdrop = document.getElementById("backdrop");

const startAddMovieButton = document.querySelector("#card");

const cancelAddMovieButton = document.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
//console.log("cancelAddMovieButton", cancelAddMovieButton);
//console.log("confirmAddMovieButton", confirmAddMovieButton);

const userInputs = addMovieModal.querySelectorAll("input");
//console.log("userInput", userInputs);

const entryTextSection = document.getElementById("entry-text");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "black";
  } else {
    entryTextSection.style.display = "none";
  }
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
};

const renderNewMovieElement = (imageUrl, title) => {
  const newMovieElement = document.createElement("div");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="card">
       
  <div class="image">
     <img src="${imageUrl}" alt="${title}">
  </div>
  <div class="title">
   <h1>
     <span style="font-weight:bold;">${title}</span></h1>
  </div>
  <div class="des">
   <h1>
     <span style="font-weight:bold;" ${title}</span></h1>
     <button><i class="fas fa-edit"></i> EDIT</button>
     <button><i class="fas fa-backspace"></i> DELETE</button>
  <button><a href="Unconventional Calculator.html"><i class="fas fa-link"></i> LINK</a></button>
  </div>
  </div>
  `;

  
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
  updateUI();
};

const addMovieHandler = () => {
  const imageUrlValue = userInputs[0].value;
  const titleValue = userInputs[1].value;

 
  //console.log(titleValue, imageUrlValue, ratingValue);

  if (
    imageUrlValue === "" ||
    titleValue.trim() === "" 
 
    
  ) {
  
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
  };

  movies.push(newMovie);
  //console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieElement(newMovie.title, newMovie.image);
};


backdrop.addEventListener("click", toggleMovieModal);
startAddMovieButton.addEventListener("click", toggleMovieModal);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
