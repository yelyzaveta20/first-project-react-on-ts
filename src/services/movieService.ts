import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {IMovieDetails, IMovies} from "../interfaces/movisInterface";
import {urls} from "../constans";

const movieService={
    getAllPage:(page:string|null):IRes<IMovies>=>apiService.get(urls.movie.base, {params:{page}}),
    withGenserId:(idGenre:number, page:string|null):IRes<IMovies>=>apiService.get(urls.movie.withGenser(idGenre), {params:{page}}),
    detailsMovie:(idmovie:number):IRes<IMovieDetails>=>apiService.get(urls.movie.moviedetais(idmovie))
}
export {movieService}