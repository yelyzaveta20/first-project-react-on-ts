import React, {useEffect, useState} from 'react';

import {IMovie, IMovies} from "../../interfaces/movisInterface";
import {movieService} from "../../services/movieService";
import GenreMovie from "./GenreMovie";
import css from './GenreMovie.module.css'
import {useLocation, useParams, useSearchParams} from "react-router-dom";

const GenreMovies = () => {
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
            {moviesGenres.map(movie => (<GenreMovie key={movie.id} movie={movie}/>))}
            <button
                onClick={prev}
                disabled={!pageCurrent || +pageCurrent === 1}>prev
            </button>
            <button
                onClick={next}
                disabled={!pageCurrent || moviesGenres.length === 0}>next
            </button>
        </div>
    );


};


export default GenreMovies;