import React, {useEffect, useState} from 'react';

import {genreService} from "../../services/genreService";

import css from './Genre.module.css'
import {useTheme} from "../../hooks/ThemeContext";
import {IGenre} from "../../interfaces/genreInterface";
import {Genre} from "./Genre";

const GenresList = () => {
    const [genres, setGenres] = useState<IGenre[]>([])
    useEffect(() => {
       genreService.getAll().then(({data})=>setGenres(data.genres))
    }, []);

    const { darkTheme } = useTheme();
    return (
        <div className={`${darkTheme ? css.genreLight : css.genreDark} ${css.Genre}` }>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenresList};