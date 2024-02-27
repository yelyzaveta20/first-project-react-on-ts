import React, {FC, useEffect, useState} from 'react';
import {IGenre, IMovie} from "../../interfaces/movisInterface";
import {useLocation} from "react-router-dom";
import {poster} from "../../constans/urls";
import {Rating} from "@mui/material";
import css from './GenreMovie.module.css'
import {movieService} from "../../services/movieService";
import {log} from "node:util";
interface IProps{
    movieGenre:IMovie
}
const GenreMovie:FC<IProps> = ({movieGenre}) => {
    // const [genreMovie, setGenreMovie] = useState<IGenre[]>([])

    const {genre_ids, title, poster_path, vote_average}=movieGenre
    const posterurl=`${poster}${poster_path}`



    return (
        <div>
            {/*{isMatchingGenre && (*/}
                <div className={css.wrapper}>
                    <h2>{title}</h2>
                    <img src={posterurl} alt={title}/>
                    <Rating className={css.rating} name="customized-10" defaultValue={vote_average} precision={0.5} max={10.0} readOnly />
                </div>
            {/*)}*/}
        </div>
    );
};

export default GenreMovie;