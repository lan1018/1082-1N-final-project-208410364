const cocktail = document.getElementById('cocktail');

function searchByCocktail() {
  fetch('https://the-cocktail-db.p.rapidapi.com/list.php?a=list', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'the-cocktail-db.p.rapidapi.com',
      'x-rapidapi-key': '76c01de510msh172e5bc0b27e517p1402eejsn21b95e560fd4',
    },
  })
    .then((data) => data.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

cocktail.addEventListener('click', searchByCocktail);
