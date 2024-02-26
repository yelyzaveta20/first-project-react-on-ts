import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {urls} from "../constans/urls";
import {IMovies} from "../interfaces/movisInterface";

const movieService={
    getAllPage:(page:any):IRes<IMovies>=>apiService.get(urls.movie.base, {params:{page}}),
    getAll:():IRes<IMovies>=>apiService.get(urls.movie.base),
}
export {movieService}