import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {IMovies} from "../interfaces/movisInterface";
import {urls} from "../constans";

const sercheService={
    getQuery:(query:string, page:string|null):IRes<IMovies>=>apiService.get(urls.serch.sercheByserch(query), {params:{page}})
}
export {sercheService}