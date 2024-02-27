import React, {useEffect, useState} from 'react';
import {IGenre} from "../../interfaces/movisInterface";
import {genreService} from "../../services/genreService";
import Genre from "./Genre";
import css from './Genre.module.css'
const Genres = () => {
    const [genres, setGenres] = useState<IGenre[]>([])
    useEffect(() => {
       genreService.getAll().then(({data})=>setGenres(data.genres))
    }, []);


    return (
        <div className={css.Genre}>
            {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;