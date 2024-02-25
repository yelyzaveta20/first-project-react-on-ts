import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {urls} from "../constans/urls";
import {IMovies} from "../interfaces/movisInterface";

const movieService={
    getAll:():IRes<IMovies>=>apiService.get(urls.movie.base),
}
export {movieService}