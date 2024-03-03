import React, {useEffect, useState} from 'react';

import {IGenre} from "../../interfaces/genreInterface";
import {Genre} from "./Genre";
import {genreService} from "../../services";
import {useTheme} from "../../hoc";
import css from './Genre.module.css'

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