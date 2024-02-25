import {IRes} from "../types/responseType";
import {IGenres} from "../interfaces/movisInterface";
import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const genreService={
    getAll:():IRes<IGenres>=>apiService.get(urls.genre.base)
}
export {genreService}