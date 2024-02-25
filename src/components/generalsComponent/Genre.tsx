import React, {FC} from 'react';
import {IG, IGenre} from "../../interfaces/movisInterface";
interface IProps{
    genre:IG
}
const Genre:FC<IProps>=({genre}) => {
    const {id,name}=genre

    return (
        <div>
            <button>{name}</button>
        </div>
    );
};

export default Genre;