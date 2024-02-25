import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {urls} from "../constans/urls";
import {IAll} from "../interfaces/movisInterface";

const movieService={
    getAll:():IRes<IAll>=>apiService.get(urls.movie.base),
}
export {movieService}