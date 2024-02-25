import React, {useEffect, useState} from 'react';

import {IMovie} from "../../interfaces/movisInterface";
import {movieService} from "../../services/movieService";
import GenreMovie from "./GenreMovie";

const GenreMovies = () => {
    const [movies, setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        movieService.getAll().then(({data})=>setMovies(data.results))
    }, []);
    return (
        <div>
            {movies.map(movie=><GenreMovie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default GenreMovies;