import React, {useEffect, useState} from 'react';
import {IMovieDetails} from "../../interfaces/movisInterface";
import {movieService} from "../../services/movieService";
import {useLocation} from "react-router-dom";
import {MovieDetails} from "./MovieDetails";

const MoviesDetailsWithId = () => {
    const {pathname} =useLocation()

    const [moviDetails, setMoviDetails] = useState<IMovieDetails|null>(null);
    const id=pathname.split('/')[pathname.split('/').length-1]
    useEffect(() => {
        if (id){
            movieService.detailsMovie(+id).then(({ data }) => {
                setMoviDetails(data);

            });
        }

    }, [id]);

    return (
        <div>
            {moviDetails && <MovieDetails key={moviDetails?.id} moviDetails={moviDetails}/>}
        </div>
    );
};

export {MoviesDetailsWithId};