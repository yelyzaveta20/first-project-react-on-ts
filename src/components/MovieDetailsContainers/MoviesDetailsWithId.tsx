import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";

import {IMovieDetails} from "../../interfaces/movisInterface";
import {MovieDetails} from "./MovieDetails";
import {movieService} from "../../services";

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