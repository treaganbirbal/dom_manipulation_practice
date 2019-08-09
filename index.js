document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('button');

  button.addEventListener("click", () =>{
    let colorDiv = document.querySelector('.colorDiv');
    if(colorDiv.classList.value.includes('redClass')){
      colorDiv.classList.remove('redClass')
      colorDiv.classList.add('greenClass')
    } else {
      colorDiv.classList.add('redClass')
      colorDiv.classList.remove('greenClass')
    }
  });

  fetch('https://ghibliapi.herokuapp.com/films')
    .then(res => res.json())
    .then(res => {
      // debugger;
      let body = document.querySelector('body');
      let select = document.createElement('select');
      body.appendChild(select)

      res.forEach(movieObj => {
       let option = document.createElement("option");
       let title = movieObj.title;
       option.innerText = title;
       select.appendChild(option)
     })

     return res;
   })
   .then(res => {
     let select = document.querySelector("select");
     select.addEventListener("change", (e) => {
       let movie = res.find(el => el.title === e.target.value)
       let div = document.createElement("div")
       div.classList.add("displayDiv")
       let title = document.createElement("h1")
       let description = document.createElement("h3");
       title.innerText = movie.title;
       description.innerText = movie.description;
       div.appendChild(title)
       div.appendChild(description)
       let oldDiv = document.querySelector(".displayDiv");
       let body = document.querySelector("body");
       if(oldDiv) {
         body.removeChild(oldDiv)
       }
       body.appendChild(div)
     })
   })
   .catch(err => err)
});

// document.addEventListener("DOMContentLoaded", () => {
//   let button = document.querySelector("button");
//
//   button.addEventListener("click", () => {
//     let colorDiv = document.querySelector(".colorDiv");
//     if (colorDiv.classList.value.includes("redClass")) {
//       colorDiv.classList.remove("redClass");
//       colorDiv.classList.add("greenClass");
//     } else {
//       colorDiv.classList.remove("greenClass");
//       colorDiv.classList.add("redClass");
//     }
//   });
//
//   fetch("https://ghibliapi.herokuapp.com/films")
//     .then(res => res.json())
//     .then(res => {
//       let body = document.querySelector("body");
//       let ul = document.createElement("ul");
//       body.appendChild(ul);
//
//       res.forEach(movieObj => {
//         let li = document.createElement("li");
//         let title = movieObj.title;
//         li.innerText = title;
//         ul.appendChild(li)
//       })
//
//     })
// });
