import React, {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces/movisInterface";
import {Movie} from "./Movie";
import Paginations from "../PaginationsContainers/Paginations";
import {movieService} from "../../services";
import {poster} from "../../constans";
import {useTheme} from "../../hoc";
import css from './Movie.module.css'


const MoviesList = () => {
    const [movies, setMovies] = useState<IMovie[]|null>(null)
    const [query,setQuery] = useSearchParams({page:'1'})
    const page = query.get('page');
    useEffect(() => {
        movieService.getAllPage(page).then(({data})=>{
            setMovies(data.results)
        })
    }, [page]);

    const { darkTheme } = useTheme();
    return (
        <div className={` ${darkTheme ? css.movieLight : css.movieDark}`}>
            <div className={`${css.Movies}`}>
                { movies&&movies.map(movies=><Movie key={movies.id} movie={movies} poster={poster}/>)}
            </div>
            {movies && <div >

                <Paginations/>
                </div>}
            </div>
    );
};

export {MoviesList};