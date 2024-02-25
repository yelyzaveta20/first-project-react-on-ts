import React, {FC} from 'react';
import {IMovie} from "../../interfaces/movisInterface";
import {poster} from "../../constans/urls";
import css from './Movie.module.css'
import {useNavigate} from "react-router-dom";


interface IProps{
    movie:IMovie
    poster:any
}
const Movie:FC<IProps> = ({movie}) => {
    let navigate = useNavigate();
    const {id,title, poster_path}=movie
    const posterurl=`${poster}${poster_path}`
    const handle = () => {
        navigate('/details', {state:{movie}})
    }
    return (
        <div  >
            <div onClick={handle} className={css.div}>
            <div className={css.title}>{title}</div>
            <img  src={posterurl} alt={title}/></div>
        </div>
    );
};

export default Movie;