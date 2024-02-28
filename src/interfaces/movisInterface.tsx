export interface IMovie {
    id:number,
    original_title:string,
    overview:string,
    poster_path:string,
    title:string,
    vote_average:number,
    genre_ids:number[]
}
export interface IMovies{
    page:number,
    results:IMovie[],
    total_pages:number,
    total_results:number
}

export interface IGenres{
    genres:IGenre[]
}
export interface IGenre{
    id:number,
    name:string
}
export interface ISerches{
    page:number,
    results:ISerche[],
    total_pages:number,
    total_results:number
}
export interface ISerche{
    id:number,
    name:string
}
