import {FC, useEffect, useState} from "react";
import {IMovie} from "../../interfaces/movisInterface";
import {movieService} from "../../services/movieService";

import Movie from "./Movie";

interface IProps {

}
const MoviesList:FC<IProps> = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    // const [query, setQuery]=useSearchParams({page:'1'})
    // const {page, nextPage, prevPage}=usePageQuery()
    // const [prevNext, setPrevNext] = useState({prev:null, next:null})
    useEffect(() => {
        movieService.getAll().then(({data})=>{
            // const {page,results}=data
            // return{
            //     page,
            //     results
            // }
            setMovies(data.results)
            console.log(data.results);
            // setPrevNext({prev:data.next, next:data.page})
        })
    }, []);
    return (
        <div>
            <div>
                {movies.map(movies=><Movie movie={movies}/>)}
            </div>
            <div>
                <button>prev</button>
                <button >next</button>
            </div>
        </div>
    );
};

export default MoviesList;