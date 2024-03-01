import {IRes} from "../types/responseType";

import {apiService} from "./apiService";
import {urls} from "../constans/urls";
import {IGenres} from "../interfaces/genreInterface";

const genreService={
    getAll:():IRes<IGenres>=>apiService.get(urls.genre.base)
}
export {genreService}