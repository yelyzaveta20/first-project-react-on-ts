
const baseURL='https://api.themoviedb.org/3'
const movie ='/discover/movie'
const genre='/genre/movie/list'
const poster='https://image.tmdb.org/t/p/w500'
const serch='https://api.themoviedb.org/3/search/keyword'
// ?with_genres=27
const urls={
    movie:{
        base:movie,
        withGenser:(idGenre:number, page:number)=>`${movie}?with_genres=${idGenre}&page=${page}`
    },
    genre:{
        base:genre
    },
    serch:{
        base:serch
    }
}

export {baseURL, urls,poster}