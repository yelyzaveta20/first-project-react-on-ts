import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Rating} from "@mui/material";

import {IMovie} from "../../interfaces/movisInterface";
import {poster} from "../../constans";
import {useTheme} from "../../hoc";
import css from './Movie.module.css'


interface IProps{
    movie:IMovie
    poster:string
}
const Movie:FC<IProps> = ({movie}) => {

    let navigate = useNavigate();
    const {id,title, poster_path, vote_average}=movie

    const posterurl=`${poster}${poster_path}`
    const handle = () => {
        navigate(`/details/${id}`)
    }
    const { darkTheme } = useTheme();
    return (
        <div >
            <div onClick={handle} className={`${css.div} ${darkTheme ? css.movieLight : css.movieDark}`}>
            <h3 className={css.title}>{title}</h3>
                {poster_path?(
                    <img src={posterurl} alt={title}/>
                ): (
                    <img src={`https://th.bing.com/th?id=OIF.s1S%2fxuarov%2fLtVlIpIFzaQ&rs=1&pid=ImgDetMain`} alt='none'/>
                )}
            </div>
            <Rating className={css.rating} name="customized-10" defaultValue={vote_average} precision={0.5} max={10.0} readOnly />
        </div>
    );
};

export  {Movie};