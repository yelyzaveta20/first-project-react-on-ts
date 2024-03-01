import React, {ChangeEvent, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces/movisInterface";
import {sercheService} from "../../services/sercheService";

import {poster} from "../../constans/urls";
import css from './Serches.module.css'
import {Serche} from "./Serche";

const Serches = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [movieResults, setMovieResults] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({ query: '', page: '1' });
    const queryValue = query.get('query') || '';
    const pageCurrent = query.get('page');


    useEffect(() => {
        const filteredSerches = movies.filter((serche) =>
            serche.title.toLowerCase().includes(queryValue.toLowerCase())
        );
        setMovieResults(filteredSerches);
    }, [queryValue, movies]);

    useEffect(() => {
            sercheService.getQuery(queryValue, pageCurrent).then(({ data }) => {
                setMovieResults(data.results);
            });

    }, [pageCurrent]);
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery({ query: event.target.value, page: '1' });
    };
const handleShowAll=()=>{
    sercheService.getQuery(queryValue, pageCurrent).then(({ data }) => {
        setMovieResults(data.results);
    });
}

    const next = () => {
        const nextPage = +pageCurrent + 1;
        setQuery({ query: queryValue, page: nextPage.toString() });
    };

    const prev = () => {
        const prevPage = +pageCurrent - 1;
        setQuery({ query: queryValue, page: prevPage.toString() });
    };

    return (
        <div >
            <input
                type="text"
                value={queryValue}
                onChange={handleInputChange}
                placeholder="Search movies..."
            />
            <button onClick={handleShowAll}>Show All</button>
            <div className={css.Serche}>
            {movieResults?.map((movie) => (
                <Serche key={movie.id} movie={movie} poster={poster}/>
            ))}
            </div>
            <div className={css.buttons}>
                <button onClick={prev}
                        disabled={!pageCurrent || +pageCurrent === 1}>prev</button>
                <button onClick={next}
                        disabled={!pageCurrent || movieResults.length === 0}>next</button>
            </div>
        </div>
    );
};

export {Serches};