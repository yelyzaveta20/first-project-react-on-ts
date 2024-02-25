import React, {FC} from 'react';
import {IMovie} from "../../interfaces/movisInterface";
import {useLocation} from "react-router-dom";
interface IProps{
    movie:IMovie
}
const GenreMovie:FC<IProps> = ({movie}) => {
    const {state:{id}}=useLocation()
    const {genre_ids}=movie
    genre_ids.map(()=>{
        if (id===genre_ids){

        }
    })
    console.log(movie);
    return (
        <div>
            
        </div>
    );
};

export default GenreMovie;