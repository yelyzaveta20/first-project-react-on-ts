import React, {FC, useEffect, useState} from 'react';
import {IGenre, IMovie} from "../../interfaces/movisInterface";
import {useLocation, useNavigate} from "react-router-dom";
import {poster} from "../../constans/urls";
import {Rating} from "@mui/material";
import css from './GenreMovie.module.css'
import {movieService} from "../../services/movieService";
import {log} from "node:util";
interface IProps{
    movie:IMovie
}
const GenreMovie:FC<IProps> = ({movie}) => {
    // const [genreMovie, setGenreMovie] = useState<IGenre[]>([])
    let navigate = useNavigate();
    const {genre_ids, title, poster_path, vote_average}=movie
    const posterurl=`${poster}${poster_path}`

    const handle = () => {
        navigate('/details', {state:{movie}})
    }

    return (
        <div>
            {/*{isMatchingGenre && (*/}
                <div onClick={handle} className={css.wrapper}>
                    <h2>{title}</h2>
                    <img src={posterurl} alt={title}/>
                    <Rating className={css.rating} name="customized-10" defaultValue={vote_average} precision={0.5} max={10.0} readOnly />
                </div>
            {/*)}*/}
        </div>
    );
};

export default GenreMovie;