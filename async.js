document.addEventListener("DOMContentLoaded", () => {
  function fetchMovies(url) {
    try {
      // fetch(url)
      // .then((res) => res.json())
      // .then(res => {
      //   // debugger
      // })
    } catch(err) {
      debugger
    }

  }

  const moviesFetch = async (url) => {
    try {
      let res = await (await fetch(url)).json()
      console.log("in promise")
    } catch (err) {
      console.log(err);
    }

  }

  let button = document.querySelector("button");
  button.addEventListener("click", () => {
    moviesFetch("https://ghibliapi.herokuapp.com/films")
    .then(res => {
      console.log("IN THE THEN");
    })
    console.log("hello trey");
  })
})




// async function returnOne() {
  //   return 1
  // }

  // const returnOne = async () => 1

  // returnOne()
  // .then(res => {
    //   debugger
    // })
