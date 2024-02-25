import {FC, useEffect, useState} from "react";
import {IMovie} from "../../interfaces/movisInterface";
import {movieService} from "../../services/movieService";

import Movie from "./Movie";
import {poster} from "../../constans/urls";
import css from './Movie.module.css'


const MoviesList = () => {
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
            // setPrevNext({prev:data.next, next:data.page})
        })
    }, []);
    return (
        <div>
            <div className={css.Movies}>
                {movies.map(movies=><Movie key={movies.id} movie={movies} poster={poster}/>)}
            </div>
            <div className={css.buttons}>
                <button>prev</button>
                <button >next</button>
            </div>
        </div>
    );
};

export default MoviesList;