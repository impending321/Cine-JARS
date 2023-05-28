import Info from "./dummyData.mjs";

const moviePoster = document.querySelector(".movie-poster");
const movieHeading = document.querySelector(".movie-heading");
const movieDetails = document.querySelector(".movies-details");

Info.map((i) => {
    movieDetails.innerHTML += (<div>
        <h1>{i.title}</h1>
    </div>)
});

console.log(moviePoster.src);
