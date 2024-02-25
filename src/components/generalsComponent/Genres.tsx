import React, {FC, useEffect, useState} from 'react';
import {IG, IGenre, IMovie} from "../../interfaces/movisInterface";
import {genreService} from "../../services/genreService";
import Genre from "./Genre";
interface IProps{
    // genres:IG
}
const Genres = () => {
    const [genres, setGenres] = useState<IGenre[]>([])
    useEffect(() => {
        genreService.getAll().then(({data})=>setGenres(data.genres))
    }, []);
    console.log(genres)


    return (
        <div>
            {genres.map(genre=><Genre genre={genre}/>)}
        </div>
    );
};

export default Genres;