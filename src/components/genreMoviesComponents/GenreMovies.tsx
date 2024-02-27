import React, {useEffect, useState} from 'react';

import {IMovie} from "../../interfaces/movisInterface";
import {movieService} from "../../services/movieService";
import GenreMovie from "./GenreMovie";
import css from './GenreMovie.module.css'
import {useLocation, useSearchParams} from "react-router-dom";

const GenreMovies = () => {
    const [moviesGenres, setMoviesGenres] = useState<IMovie[]>([])
    const [query,setQuery] = useSearchParams({page:'1'})
    const page = query.get('page');
    const {state:{id}}=useLocation()
    useEffect(() => {
        movieService.withGenserId(id, page).then(({data})=>{
            setMoviesGenres(data.results)
        })
    }, [id, page]);
    const previousPage = (newPage:any)=>{

        setQuery({ ...query, page: newPage })
    }
    // const [moviesGenres, setMoviesGenres] = useState<IMovie[]>([]);
    // const [currentPage, setCurrentPage] = useState<number>(1);
    // const [query, setQuery] = useSearchParams({ page: '1' });
    // const page = query.get('page');
    // const { state } = useLocation();
    // const genreId = state?.id;
    //
    // useEffect(() => {
    //     if (genreId) {
    //         movieService.withGenserId(genreId, currentPage).then(({ data }) => {
    //             setMoviesGenres(data.results);
    //         });
    //     }
    // }, [genreId, currentPage]);
    //
    // const handlePageChange = (newPage: number) => {
    //     setCurrentPage(newPage);
    //     setQuery({ ...query, page: newPage.toString() });
    // };

    return (
        <div className={css.GenreMovie}>
            {moviesGenres.map(movieGenre => <GenreMovie key={movieGenre.id} movieGenre={movieGenre}/>)}
            <div>
                <button onClick={() => previousPage(parseInt(page || '1') - 1)}>prev</button>
                <button onClick={() => previousPage(parseInt(page || '1') + 1)}>next</button>
            </div>
        </div>
    );

};


export default GenreMovies;