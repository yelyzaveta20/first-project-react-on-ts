
import {NavLink, useNavigate} from "react-router-dom";
import css from './MovieDetails.module.css'
import {poster} from "../../constans/urls";
import React, {FC} from "react";
import {Badge, Rating} from "@mui/material";
import {IMovieDetails} from "../../interfaces/movisInterface";
import {useTheme} from "../../hooks/ThemeContext";
interface IProps{
    moviDetails:IMovieDetails|undefined
}

const MovieDetails: FC<IProps> = ({ moviDetails }) => {


    const {id,
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
    // const handle = () => {
    //     navigate(`/genres/moviesgeeneres/${id}`)
    // }
    const { darkTheme} = useTheme();
    return (
        <div className={`${css.Detauls} ${darkTheme ? css.movieDetailsLight : css.movieDetailsDark}`}>
            <button onClick={() => navigate(-1)}>Back</button>
            <div className={css.lider}>
                <div className={css.imgMovie}>
                    <h2 className={css.titleLider}>{title}</h2>
                    <img className={css.imgDetails} src={posterurl} alt={title}/>
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
                        {genres.map(genre=><button onClick={() => navigate(`/genres/moviesgeeneres/${genre.id}`)}>{genre.name}</button>)}
                    {/*</Badge>*/}
                </div>

            </div>

        </div>);
};

export  {MovieDetails};