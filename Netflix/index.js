let movies = [
    {
        name: "Avengers Infinity War",
        rating: 8.7,
        poster: "https://m.media-amazon.com/images/I/91zzAMkVCUL._AC_UF894,1000_QL80_.jpg",
        description: "They feel that by engaging in terrorism they become the avengers of a great wrong done to their people."
    }
    ,
    {
        name: "Sisters",
        rating: 9.0,
        poster: "https://i.pinimg.com/736x/5d/ea/13/5dea13d43bc7186cd1ac4062faa0472b.jpg",
        description: "“Sistas” explores the twists of fates, the unforeseen consequences, and the complexities that come along when matters of the heart are involved."
    },
    {
        name: "The 100",
        rating: 7.8,
        poster: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a7db5b3a-3426-4fe8-b7f8-fa2f8cc964fa/dejc4v0-2419a453-57b0-41f7-a4dd-484b56c0ef80.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E3ZGI1YjNhLTM0MjYtNGZlOC1iN2Y4LWZhMmY4Y2M5NjRmYVwvZGVqYzR2MC0yNDE5YTQ1My01N2IwLTQxZjctYTRkZC00ODRiNTZjMGVmODAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BNPBMkC7HkHyOrerYv45VzzGhmddfAxBB8SG8FUwEgM",
        description: "Set 97 years after a nuclear apocalypse, on-board a dying space station running out of air. One hundred juvenile delinquents are sent back to Earth to see if it is habitable. On the ground they will be tested by the Earth, the secrets it hides and, most of all, themselves."
    },
    {
        name: "Cobra Kai",
        rating: 9.0,
        poster: "https://i.etsystatic.com/19901498/r/il/34b50e/3867194383/il_fullxfull.3867194383_dj32.jpg",
        description: "Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again. Decades after their 1984 All Valley Karate Tournament bout, a middle-aged Daniel LaRusso and Johnny Lawrence find themselves martial-arts rivals again."
    },
    {
        name: "Invisible Man",
        rating: 8.0,
        poster: "https://m.media-amazon.com/images/M/MV5BYzc0OGI3NzctNDljYS00MjFiLWIzNjktNjY5MTYwYWRiYWUwXkEyXkFqcGdeQXVyNTU5Mzk0NjE@._V1_FMjpg_UX1000_.jpg",
        description: "Against him it would seem the Invisible Man used an iron rod dragged from a broken piece of fence. He stopped this quiet man, going quietly home to his midday meal, attacked him, beat down his feeble defences, broke his arm, felled him, and smashed his head to a jelly."
    },
    {
        name: "Wednesday",
        rating: 8.8,
        poster: "https://ae01.alicdn.com/kf/S40d2ed2010984a578418682e3ce751dbU/HD-Print-Wednesday-Movie-Posters-Canvas-Painting-Suspense-Fantasy-Wall-Art-For-Living-Room-Bedroom-Home.jpg",
        description: "Follows Wednesday Addams' years as a student, when she attempts to master her emerging psychic ability, thwart a killing spree, and solve the mystery that embroiled her parents."
    },
    {
        name: "Monkey King",
        rating: 7.0,
        poster: "https://m.media-amazon.com/images/M/MV5BODBhYjliYmMtOWFiZi00NDczLWE1MDgtYTQwMDg0Y2U3MzJjXkEyXkFqcGdeQXVyMDUyNDM1Ng@@._V1_.jpg",
        description: "He has vast memorization skills and can remember every monkey ever born. As king of the monkeys it is his duty to keep track of and protect every monkey. Sun Wukong also acquires the 72 Earthly Transformations, which allow him to access 72 unique powers,"
    },
    {
        name: "Oppenheimer",
        rating: 9.0,
        poster: "https://m.media-amazon.com/images/I/61cn1b7JO9L._AC_UF1000,1000_QL80_.jpg",
        description: "He has vast memorization skills and can remember every monkey ever born. As king of the monkeys it is his duty to keep track of and protect every monkey. Sun Wukong also acquires the 72 Earthly Transformations, which allow him to access 72 unique powers,"

    },
    {
        name: "John Wick",
        rating: 8.0,
        poster: "https://rukminim2.flixcart.com/image/850/1000/k0lbdzk0/poster/4/w/g/medium-john-wick-poster-for-room-office-13-inch-x-19-inch-rolled-original-imafkc6fd8mc6jga.jpeg?q=90",
        description: "He has vast memorization skills and can remember every monkey ever born. As king of the monkeys it is his duty to keep track of and protect every monkey. Sun Wukong also acquires the 72 Earthly Transformations, which allow him to access 72 unique powers,"
    }



]
function searchMovie() {
    let movieName = document.getElementById("search").value;

    if (movieName !== "") {
        let result = movies.filter(function (movie) {
            return movie.name.toUpperCase().includes(movieName.toUpperCase())
        })

        displayMovie(result);
    }
    else {
        displayMovie(movies);
    }
}

function displayMovie(arr) {
    document.getElementById("movies").innerHTML = "";
    let htmlstring = ``;

    for (let i = 0; i < arr.length; i++) {
        movies[i]

        htmlstring = htmlstring + `
        <div class="movie">
        <div class="overlay">
            <div class="video">

             </div>
        <div class="details">
            <h1>
                ${arr[i].name}
            </h1>
            <h2>IMBD: ${arr[i].rating}</h2>
            <P>
                Octavia . Blake . Clerk
            </P>
        </div>
    </div>
    <img class="poster"
        src="${arr[i].poster}"
        alt="movie">

</div>        
        `
    }

    document.getElementById("movies").innerHTML = htmlstring;
}


// let movie = document.createElement("div");
// movie.classList.add("movie");


// let overlay = document.createElement("div");
// overlay.classList.add("overlay");

// movie.append(overlay);

// console.log(movie)


displayMovie(movies);