import React, {FC} from 'react';
import {IGenre} from "../../interfaces/movisInterface";
import css from './Genre.module.css'
import {useNavigate} from "react-router-dom";
interface IProps{
    genre:IGenre
}
const Genre:FC<IProps>=({genre}) => {
    const {id,name}=genre
    let navigate = useNavigate();
    const handle = () => {
        navigate('moviesgeeneres', {state:{id}})
    }
    return (
        <div className={css.div}>
            <button onClick={handle}>{name}</button>
        </div>
    );
};

export default Genre;