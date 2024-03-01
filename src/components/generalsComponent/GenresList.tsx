import React, {useEffect, useState} from 'react';

import {genreService} from "../../services/genreService";

import css from './Genre.module.css'
import {useTheme} from "../../hooks/useContest";
import {IGenre} from "../../interfaces/genreInterface";
import {Genre} from "./Genre";

const GenresList = () => {
    const [genres, setGenres] = useState<IGenre[]>([])
    useEffect(() => {
       genreService.getAll().then(({data})=>setGenres(data.genres))
    }, []);

    const { darkTheme } = useTheme();
    return (
        <div className={`${darkTheme?css.darkMovie:css.lightMovie} ${css.Genre}` }>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenresList};