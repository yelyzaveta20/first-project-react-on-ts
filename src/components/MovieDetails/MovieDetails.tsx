
import {useLocation, useNavigate} from "react-router-dom";
import css from './Details.module.css'
import {poster} from "../../constans/urls";
import React from "react";
import {Rating} from "@mui/material";

const MovieDetails= () => {
    const {state:{movie}}=useLocation()
const {title,original_language,original_title, overview,popularity,release_date,poster_path, genre_ids, vote_average}=movie
    const posterurl=`${poster}${poster_path}`
    const navigate=useNavigate()
    return (
        <div className={css.Detauls}>
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
                    {/*<Badge badgeContent={genre_ids} color="primary">*/}
                    {/*    */}
                    {/*</Badge>*/}
                    <div>{genre_ids}</div>
                    <div>Overview:</div><div> {overview}</div>
                </div>

            </div>

        </div>);
};

export default MovieDetails;