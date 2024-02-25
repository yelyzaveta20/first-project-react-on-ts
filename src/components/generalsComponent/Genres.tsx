import React, {FC, useEffect, useState} from 'react';
import {IGenre, IMovie} from "../../interfaces/movisInterface";
import {genreService} from "../../services/genreService";
import Genre from "./Genre";
interface IProps{
    genres:IGenre
}
const Genres = () => {
    const [genres, setGenres] = useState([])
    useEffect(() => {
        genreService.getAll().then(({data})=>setGenres(data))
    }, []);
    console.log(genres)
    return (
        <div>
            {genres.map(genre=><Genre genre={genre}/>)}
        </div>
    );
};

export default Genres;