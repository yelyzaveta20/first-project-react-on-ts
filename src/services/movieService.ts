import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {urls} from "../constans/urls";
import {IMovieDetails, IMovies} from "../interfaces/movisInterface";

const movieService={
    getAllPage:(page:any):IRes<IMovies>=>apiService.get(urls.movie.base, {params:{page}}),
    getAll:():IRes<IMovies>=>apiService.get(urls.movie.base),
    withGenserId:(idGenre:number, page:string|null='1'):IRes<IMovies>=>apiService.get(urls.movie.withGenser(idGenre), {params:{page}}),
    detailsMovie:(idmovie:any):IRes<IMovieDetails>=>apiService.get(urls.movie.moviedetais(idmovie))
}
export {movieService}