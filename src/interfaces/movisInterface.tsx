export interface IMovie {
    id:number,
    original_title:string,
    overview:string,
    poster_path:any,
    title:string,
    vote_average:number,
    genre_ids:any
}
export interface IAll{
    page:any,
    results:any,
    total_pages:number,
    total_results:number
}