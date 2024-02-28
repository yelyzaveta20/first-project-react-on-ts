import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {urls} from "../constans/urls";
import {IGenres, IMovies} from "../interfaces/movisInterface";

const movieService={
    getAllPage:(page:any):IRes<IMovies>=>apiService.get(urls.movie.base, {params:{page}}),
    getAll:():IRes<IMovies>=>apiService.get(urls.movie.base),
    withGenserId:(idGenre:number, page:string|null='1'):IRes<IMovies>=>apiService.get(urls.movie.withGenser(idGenre), {params:{page}})
}
export {movieService}