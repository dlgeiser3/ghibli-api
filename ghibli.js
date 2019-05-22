
// ******************** VARIABLES ********************
const baseURL = 'https://ghibliapi.herokuapp.com/';
const section = document.querySelector('section');




//******************** FETCH ********************
fetch(`${baseURL}films`)
  .then(function (result) {
    return result.json();
  })
  .then(function (json) {
    console.log(json)
    displayResults(json)
  });




// ******************** DISPLAY RESULTS ******************** //
function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }

  let films = json;

  for (let i = 0; i < films.length; i++) {
   
    // ----- VARIABLES
    let holding = document.createElement('div');
    let article = document.createElement('article');
    let heading = document.createElement('h2');
    let link = document.createElement('a');
    let img = document.createElement('img');
    let para = document.createElement('p');
    let li = document.createElement('li');
    let btn = document.createElement('button');
    let div = document.createElement('div');
    let br = document.createElement('br');
    let hr = document.createElement('hr')
    // let clearfix = document.createElement('div');
    // let coll = document.getElementsByClassName("collapsible");


    let current = films[i];
    console.log('Current:', current);

    // ----- SETTING TEXT CONTENT AND ATTRIBUTES
    btn.textContent = `${films[i].title}`;
    para.textContent = `${films[i].description}`;
    div.setAttribute('class', 'content');
    btn.setAttribute('class', 'collapsible');
    holding.setAttribute('class', 'col-md-6')


    btn.addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";//'200px'//content.scrollHeight + "px";
      }
    })

    // clearfix.setAttribute('class', 'clearfix';);

    // ----- ADD TO SECTION TAG
    section.appendChild(holding);
    holding.appendChild(btn);
    holding.appendChild(div);
    div.appendChild(hr);
    div.appendChild(para);
    holding.appendChild(br);
  
  }
}






// let coll = document.getElementsByClassName("collapsible");

// for (let i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// };