import {IRes} from "../types/responseType";
import {IMovie} from "../interfaces/movisInterface";
import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const movieService={
    getAll:():IRes<IMovie[]>=>apiService.get(urls.movie.base)
}
export {movieService}