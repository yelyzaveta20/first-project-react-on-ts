import {IRes} from "../types/responseType";
import {IAll, IGenre} from "../interfaces/movisInterface";
import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const genreService={
    getAll:():IRes<IGenre>=>apiService.get(urls.genre.base)
}
export {genreService}