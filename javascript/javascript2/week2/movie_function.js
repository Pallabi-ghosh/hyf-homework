const movies = [{ "title": "'71", "year": 2014, "rating": 7.2, "votes": 41702, "running_times": 5940 }, { "title": "'A' gai wak", "year": 1983, "rating": 7.4, "votes": 11942, "running_times": 6300 }, { "title": "'Breaker' Morant", "year": 1980, "rating": 7.9, "votes": 10702, "running_times": 6420 }, { "title": "'Crocodile' Dundee II", "year": 1988, "rating": 5.5, "votes": 47180, "running_times": 6480 }]


function findShortest(movies) {
    return movies.reduce(function(prevWord, currWord) {
        if (currWord.length < prevWord.length) {
            return currWord;
        } else
            return prevWord;
    })
}
console.log(findShortest(movies));

function getLongest(movies) {
    return movies.map((obj) => obj.title.length).sort((a, b) => {
        return (b - a);
    })[0];
}
console.log(getLongest(movies));


// Movie from 1980 - 1989
const eightiesMovies = movies.filter(movie => movie.year >= 1980 && movie.year <= 1989).length
console.log(eightiesMovies);

//Extra tag of movies
const NewTagArray = movies.map(ratingBasedTag => {
    if (ratingBasedTag.rating >= 7) {
        ratingBasedTag.tag = 'Good'
    }
    if (ratingBasedTag.rating >= 4 && ratingBasedTag.rating < 7) {
        ratingBasedTag.tag = 'Average'
    }
    if (ratingBasedTag.rating < 4) {
        ratingBasedTag.tag = 'Bad'
    }
    return

})

console.log(movies);

// chaining

const movieRatings = movies.filter((movie) => movie.rating > 6).map(movie => movie.rating);
console.log(movieRatings);

// reduce

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(movieRatings.reduce(reducer));

//Total Number of Movies containig Keywords (SURFER, ALIEN, BENJAMIN)

const numberOfMoviesWithKeyWords = (keywords) => {
    return movies.filter((movie) => {
        return keywords.some((keyword) => movie.title.includes(keyword))
    }).length
}

console.log(
    'numberOfMoviesWithKeyWords',
    numberOfMoviesWithKeyWords(['Alien', 'gai'])
)

const filter = {
    type: 'surfer',
};
console.log(moviesWithSpecialWords())