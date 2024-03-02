import React, {useEffect, useState} from 'react';

import {IMovie} from "../../interfaces/movisInterface";
import {movieService} from "../../services/movieService";
import {GenreOfMovies} from "./GenreOfMovies";
import css from './GenreOfMovie.module.css'
import {useLocation, useParams, useSearchParams} from "react-router-dom";

import {useTheme} from "../../hooks/ThemeContext";
import Paginations from "../Paginations/Paginations";

const GenresOfMoviesList = () => {
    const [moviesGenres, setMoviesGenres] = useState<IMovie[]|null>(null)
    const [query,setQuery] = useSearchParams({page:'1'})
    const pageCurrent = query.get('page');
    const {pathname} =useLocation()
    const id=pathname.split('/')[pathname.split('/').length-1]
    // const {id} =useParams()
    // console.log(id);
    useEffect(() => {

            movieService.withGenserId(+id,pageCurrent).then(({data})=>{
                setMoviesGenres(data.results)
            })


    }, [id,query]);


    const { darkTheme} = useTheme();

    return (
        <div className={`${css.GenreMovie} ${darkTheme ? css.genreOfMoviesLight : css.genreOfMoviesDark}`}>
            {moviesGenres&& moviesGenres.map(movie => (<GenreOfMovies key={movie.id} movie={movie}/>))}
            <div >
                {/*<button onClick={prev}*/}
                {/*    disabled={!pageCurrent || +pageCurrent === 1}>prev*/}
                {/*</button>*/}
                {/*<button onClick={next}*/}
                {/*    disabled={!pageCurrent || moviesGenres.length === 0}>next*/}
                {/*</button>*/}
                {moviesGenres&&<Paginations/>}
            </div>

        </div>
    );


};


export {GenresOfMoviesList};