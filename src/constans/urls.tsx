const baseURL='https://api.themoviedb.org/3'
const movie ='/discover/movie'
const general='/genre/movie'
const urls={
    movie:{
        base:movie
    },
    general:{
        base: `${general}/list`
    }
}

export {baseURL, urls}