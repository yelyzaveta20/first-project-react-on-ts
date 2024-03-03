import React, {useEffect, useState} from 'react';
import {useLocation, useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces/movisInterface";
import {GenreOfMovies} from "./GenreOfMovies";
import Paginations from "../PaginationsContainers/Paginations";
import {movieService} from "../../services";
import {useTheme} from "../../hoc";
import css from './GenreOfMovie.module.css'

const GenresOfMoviesList = () => {
    const [moviesGenres, setMoviesGenres] = useState<IMovie[]|null>(null)
    const [query,setQuery] = useSearchParams({page:'1'})
    const pageCurrent = query.get('page');
    const {pathname} =useLocation()
    const id=pathname.split('/')[pathname.split('/').length-1]

    useEffect(() => {

            movieService.withGenserId(+id,pageCurrent).then(({data})=>{
                setMoviesGenres(data.results)
            })


    }, [id,pageCurrent]);


    const { darkTheme} = useTheme();

    return (
        <div className={` ${darkTheme ? css.genreOfMoviesLight : css.genreOfMoviesDark}`}>
         <div className={css.GenreMovie}>
        {moviesGenres&& moviesGenres.map(movie => (<GenreOfMovies key={movie.id} movie={movie}/>))}
         </div>
            {moviesGenres&&<Paginations/>}

        </div>
    );


};


export {GenresOfMoviesList};