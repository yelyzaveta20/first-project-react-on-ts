import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {urls} from "../constans/urls";
import {ISerches} from "../interfaces/sercheInterface";
import {IMovie, IMovies} from "../interfaces/movisInterface";

const sercheService={
    getAll:():IRes<ISerches>=>apiService.get(urls.serch.base),
    getQuery:(query:string, page:string|null):IRes<IMovies>=>apiService.get(urls.serch.sercheByserch(query), {params:{page}})
}
export {sercheService}