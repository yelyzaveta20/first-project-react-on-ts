import {IRes} from "../types/responseType";
import {IMovies, ISerches} from "../interfaces/movisInterface";
import {apiService} from "./apiService";
import {urls} from "../constans/urls";

const sercheService={
    getAll:():IRes<ISerches>=>apiService.get(urls.serch.base),
    getQuery:(query:string, page:any):IRes<any>=>apiService.get(urls.serch.sercheByserch(query), {params:{page}})
}
export {sercheService}