
const baseURL='https://api.themoviedb.org/3'
const movie ='/discover/movie'
const genre='/genre/movie/list'
const poster='https://image.tmdb.org/t/p/w500'
const urls={
    movie:{
        base:movie,
    },
    genre:{
        base: genre
    }
}

export {baseURL, urls,poster}