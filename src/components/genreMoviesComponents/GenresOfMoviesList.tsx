import React, {useEffect, useState} from 'react';

import {IMovie} from "../../interfaces/movisInterface";
import {movieService} from "../../services/movieService";
import {GenreOfMovies} from "./GenreOfMovies";
import css from './GenreOfMovie.module.css'
import { useParams, useSearchParams} from "react-router-dom";

const GenresOfMoviesList = () => {
    const [moviesGenres, setMoviesGenres] = useState<IMovie[]>([])
    const [query,setQuery] = useSearchParams({page:'1'})
    const pageCurrent = query.get('page');
    const {id} =useParams()

    useEffect(() => {
        if(id){
            movieService.withGenserId(+id,pageCurrent).then(({data})=>{
                setMoviesGenres(data.results)
            })
        }

    }, [id,query]);

const next=()=>{
    const nextPage=+pageCurrent+1;
    setQuery({page:nextPage.toString()})
}
    const prev=()=>{
        const prevPage=+pageCurrent-1;
        setQuery({page:prevPage.toString()})
    }


    return (
        <div className={css.GenreMovie}>
            {moviesGenres.map(movie => (<GenreOfMovies key={movie.id} movie={movie}/>))}
            <div className={css.buttons}>
                <button onClick={prev}
                    disabled={!pageCurrent || +pageCurrent === 1}>prev
                </button>
                <button onClick={next}
                    disabled={!pageCurrent || moviesGenres.length === 0}>next
                </button>
            </div>

        </div>
    );


};


export {GenresOfMoviesList};