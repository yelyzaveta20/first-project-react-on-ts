import React, {FC} from 'react';
import {IMovie} from "../../interfaces/movisInterface";

interface IProps{
    movie:IMovie
}
const Movie:FC<IProps> = ({movie}) => {
    const {id,title}=movie
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export default Movie;