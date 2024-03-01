import React, {useEffect, useState} from "react";
import {IMovie} from "../../interfaces/movisInterface";
import {movieService} from "../../services/movieService";


import {poster} from "../../constans/urls";
import css from './Movie.module.css'

import {useSearchParams} from "react-router-dom";
import {useTheme} from "../../hooks/useContest";
import {Movie} from "./Movie";


const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [query,setQuery] = useSearchParams({page:'1'})
    const page = query.get('page');
    useEffect(() => {
        movieService.getAllPage(page).then(({data})=>{
            setMovies(data.results)
        })
    }, [page]);

    const previousPage = (newPage:any)=>{

        setQuery({ ...query, page: newPage })
    }
    const { darkTheme } = useTheme();
    return (
        <div className={`${darkTheme?css.darkMovie:css.lightMovie}`}>
            <div className={`${css.Movies}`}>
                {movies.map(movies=><Movie key={movies.id} movie={movies} poster={poster}/>)}
            </div>
            <div className={css.buttons}>
                    <button
                        disabled={!page || parseInt(page) === 1}
                        onClick={() => previousPage(parseInt(page || '1') - 1)}>prev</button>
                    <button
                        disabled={!page || movies.length === 0}
                        onClick={() => previousPage(parseInt(page || '1') + 1)}>next</button>
                </div>
            </div>
    );
};

export {MoviesList};