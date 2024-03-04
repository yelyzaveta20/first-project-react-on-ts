import {useNavigate} from "react-router-dom";
import React, {FC} from "react";
import {Rating} from "@mui/material";

import {IMovieDetails} from "../../interfaces/movisInterface";
import {poster} from "../../constans";
import {useTheme} from "../../hoc";
import css from './MovieDetails.module.css'
interface IProps{
    moviDetails:IMovieDetails
}

const MovieDetails: FC<IProps> = ({ moviDetails }) => {


    const {
        original_language,
        original_title,
        title,
        release_date,
        popularity,
        vote_average,
        overview,poster_path,
        genres
    } = moviDetails;

    const posterurl = `${poster}${poster_path}`;
    const navigate=useNavigate()
    const { darkTheme} = useTheme();
    return (
        <div className={`${css.Detauls} ${darkTheme ? css.movieDetailsLight : css.movieDetailsDark}`}>
            <button onClick={() => navigate(-1)}>Back</button>
            <div className={css.lider}>
                <div className={css.imgMovie}>
                    <h2 className={css.titleLider}>{title}</h2>

                    {poster_path?(
                        <img className={css.imgDetails}  src={posterurl} alt={title}/>
                    ): (
                        <img className={css.imgDetails}  src={`https://th.bing.com/th?id=OIF.s1S%2fxuarov%2fLtVlIpIFzaQ&rs=1&pid=ImgDetMain`} alt='none'/>
                    )}
                </div>

                <div className={css.informationMovie}>
                    <div>Original title: {original_title}</div>
                    <div>Original language: {original_language}</div>
                    <div>Release date: {release_date}</div>
                    <div>Popularity: {popularity}</div>
                    <div>Vote average:</div>
                    <Rating className={css.rating} name="customized-10" defaultValue={vote_average} precision={0.5} max={10.0} readOnly />
                    <div>Overview:</div><div> {overview}</div>
                    <br/>
                    {/*<Badge badgeContent={id} color="secondary">*/}
                    Genres:
                    <div className={css.mainGenre}>
                        {genres.map(genre => (
                            <button
                                key={genre.id}
                                className={css.buttonGenre}
                                onClick={() => navigate(`/genres/moviesgeeneres/${genre.id}`)}>{genre.name}
                            </button>
                        ))}
                    </div>
                    {/*</Badge>*/}
                </div>

            </div>

        </div>);
};

export  {MovieDetails};