import React, {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from './Genre.module.css'
import {IGenre} from "../../interfaces/genreInterface";
import {useTheme} from "../../hoc";


interface IProps{
    genre:IGenre
}
const Genre:FC<IProps>=({genre}) => {
    const {id,name}=genre

    const { darkTheme } = useTheme();

    return (
        <div className={`${css.div} ${darkTheme ? css.genreLight : css.genreDark}`}>
            <NavLink className={`${css.navLink}`} to={`moviesgeeneres/${id}`}>{name}</NavLink>
        </div>
    );
};

export {Genre};