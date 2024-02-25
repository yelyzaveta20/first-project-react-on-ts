import {IRes} from "../types/responseType";
import {apiService} from "./apiService";
import {urls} from "../constans/urls";
import {IAll} from "../interfaces/movisInterface";
// interface IProps{
//     page:string,
//     results:void
//     total_pages:string
//     total_results:string,
//     title:string,
//     id:number
// }
const movieService={
    getAll:():IRes<IAll>=>apiService.get(urls.movie.base)
}
export {movieService}