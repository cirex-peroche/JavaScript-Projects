function Dictionary() {
    var movie = {
    Title: "The Avengers",
    Genre: "Action",
    Director: "Joss Whedon",
    Rating: "PG-13",
    };
delete movie.Genre; //this removes the Genre KVP from the Dictionary before it is displayed
document.getElementById("Dictionary").innerHTML = movie.Genre;

}