import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {IGenres} from "../interfaces/genreInterface";
import {urls} from "../constans";

const genreService={
    getAll:():IRes<IGenres>=>apiService.get(urls.genre.base)
}
export {genreService}