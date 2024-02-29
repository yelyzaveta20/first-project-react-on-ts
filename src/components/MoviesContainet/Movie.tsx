import React, {FC} from 'react';
import {IMovie} from "../../interfaces/movisInterface";
import {poster} from "../../constans/urls";
import css from './Movie.module.css'
import {useNavigate} from "react-router-dom";
import {Rating} from "@mui/material";
import {useTheme} from "../../hooks/useContest";


interface IProps{
    movie:IMovie
    poster:any
}
const Movie:FC<IProps> = ({movie}) => {
    // const { darkTheme, toggleTheme } = useTheme();
    let navigate = useNavigate();
    const {id,title, poster_path, vote_average}=movie
    const posterurl=`${poster}${poster_path}`
    const handle = () => {
        navigate('/details', {state:{movie}})
    }
// navigate('search', {state:{movie}})
    return (
        <div  >
            <div onClick={handle} className={css.div}>
            <div className={css.title}>{title}</div>
            <img  src={posterurl} alt={title}/></div>
            <Rating className={css.rating} name="customized-10" defaultValue={vote_average} precision={0.5} max={10.0} readOnly />
        </div>
    );
};

export default Movie;