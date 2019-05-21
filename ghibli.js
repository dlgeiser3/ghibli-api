const baseURL = 'https://ghibliapi.herokuapp.com/'

let ghibliFilmsList = document.querySelector('ul');

fetch(`${baseURL}films`)
.then(function(response) {
  return response.json();
})
.then(function(myJson) {
  let arr = JSON.parse(JSON.stringify(myJson));
  console.log(arr);
  return arr;
});







