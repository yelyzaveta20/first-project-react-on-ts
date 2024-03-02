import React, {FC} from 'react';
import {IMovie} from "../../interfaces/movisInterface";

import {useNavigate} from "react-router-dom";
import css from "./Serches.module.css";
import {Rating} from "@mui/material";
import {useTheme} from "../../hooks/ThemeContext";
interface IProps{
    movie:IMovie
    poster:any

}
const Serche :FC<IProps>= ({movie, poster}) => {
    let navigate = useNavigate();

    const {id, title, poster_path, vote_average}=movie

    // const {state:{movie}}=useLocation()
    const posterurl=`${poster}${poster_path}`
    const handle = () => {
        navigate(`/details/${id}`)
    }
    const { darkTheme} = useTheme();
    return (
        <div onClick={handle} className={` ${darkTheme ? css.movieLight : css.movieDark}`}>
            <div className={css.posters}>
                <h2>{title}</h2>
                <img src={posterurl} alt={title}/>
                <Rating className={css.rating} name="customized-10" defaultValue={vote_average} precision={0.5} max={10.0} readOnly />
            </div>

        </div>
    );
};

export {Serche};