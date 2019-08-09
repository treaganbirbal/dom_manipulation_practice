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
