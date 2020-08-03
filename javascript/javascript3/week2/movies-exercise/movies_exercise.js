fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
    .then(function(response) {
        const badMovies = movies.filter((movie) => movie.rating > 6).map(movie => movie.rating);
        console.log(badMovies);
        return response.rating();
    })
    .then(function(twentiesmovies) {
        const moviesYearOfTwenties = movies.filter(movie => movie.year >= 2000).length
        console.log(moviesYearOfTwenties);
        alert(twentiesmovies)
    })