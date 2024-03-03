import React, {ChangeEvent, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import {IMovie} from "../../interfaces/movisInterface";
import {Serche} from "./Serche";
import PaginationsSerche from "../PaginationsContainers/PaginationsSerche";
import {sercheService} from "../../services";
import {useTheme} from "../../hoc";
import {poster} from "../../constans";
import css from './Serches.module.css'

const Serches = () => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [movieResults, setMovieResults] = useState<IMovie[]>([]);
    const [isFormActive, setIsFormActive] = useState<boolean>(false);
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
    setIsFormActive(true)
}

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

               {isFormActive&&<PaginationsSerche/>}

        </div>
    );
};

export {Serches};
