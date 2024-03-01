import React, {FC, useState} from 'react';

import css from './Genre.module.css'
import {NavLink, useNavigate} from "react-router-dom";
import {IGenre} from "../../interfaces/genreInterface";

interface IProps{
    genre:IGenre
}
const Genre:FC<IProps>=({genre}) => {
    const {id,name}=genre
    let navigate = useNavigate();
    // const handle = () => {
    //     navigate('moviesgeeneres', {state:{id}})
    // }
    const [darkTheme, setDarkTheme] = useState(false);


    const handleThemeChange = () => {
        setDarkTheme(prevTheme => !prevTheme);
        if (!darkTheme) {
            document.body.style.backgroundColor = "#647f94";
        } else {
            document.body.style.backgroundColor = "#020246";
        }
    };

    return (
        <div className={css.div}>
            {/*<button onClick={handle} >{name}</button>*/}
            <NavLink className={`${css.navLink} ${darkTheme ? css.dark : ''}`} to={`moviesgeeneres/${id}`}>{name}</NavLink>
        </div>
    );
};

export {Genre};