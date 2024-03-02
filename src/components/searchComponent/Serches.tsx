import React, {ChangeEvent, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces/movisInterface";
import {sercheService} from "../../services/sercheService";

import {poster} from "../../constans/urls";
import css from './Serches.module.css'
import {Serche} from "./Serche";
import Paginations from "../Paginations/Paginations";
import {useForm} from "react-hook-form";
import PaginationsSerche from "../Paginations/PaginationsSerche";
import {useTheme} from "../../hooks/ThemeContext";

const Serches = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [movieResults, setMovieResults] = useState<IMovie[]>([]);
    const [isFormActive, setIsFormActive] = useState<boolean>(false);
    const [query, setQuery] = useSearchParams({ query: '', page: '1' });
    const queryValue = query.get('query') || '';
    const pageCurrent = query.get('page');
    // const { reset, handleSubmit} = useForm()

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
    setIsFormActive(true)
}

    // const next = () => {
    //     const nextPage = +pageCurrent + 1;
    //     setQuery({ query: queryValue, page: nextPage.toString() });
    // };
    //
    // const prev = () => {
    //     const prevPage = +pageCurrent - 1;
    //     setQuery({ query: queryValue, page: prevPage.toString() });
    // };
    const { darkTheme} = useTheme();
    return (
        <div className={`${darkTheme ? css.sercheLight : css.sercheDark}`}>
            <form >
            <input
                type="text"
                value={queryValue}
                onChange={handleInputChange}
                placeholder="Search movies..."

            />
            </form>
            <button onClick={handleShowAll}>Show All</button>
            <div className={css.Serche}>
            {movieResults?.map((movie) => (
                <Serche key={movie.id} movie={movie} poster={poster}/>
            ))}
            </div>
           <div className={css.buttons}>
                {/*<button onClick={prev}*/}
                {/*        disabled={!pageCurrent || +pageCurrent === 1}>prev</button>*/}
                {/*<button onClick={next}*/}
                {/*        disabled={!pageCurrent || movieResults.length === 0}>next</button>*/}
               {isFormActive&&<PaginationsSerche/>}
            </div>
        </div>
    );
};

export {Serches};
