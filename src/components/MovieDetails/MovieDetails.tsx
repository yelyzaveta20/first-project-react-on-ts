
import {useLocation, useNavigate} from "react-router-dom";
import css from './Details.module.css'
import {poster} from "../../constans/urls";
import React from "react";
import {Badge} from "@mui/material";

const MovieDetails= () => {
    const {state:{movie}}=useLocation()
const {title,original_language,original_title, overview,popularity,release_date,poster_path, genre_ids}=movie
    const posterurl=`${poster}${poster_path}`
    const navigate=useNavigate()
    return (
        <div className={css.Detauls}>
            <button onClick={() => navigate(-1)}>Home</button>
            <div>Title:{title}</div>
            <img className={css.imgDetails} src={posterurl} alt={title}/>
            <div>original_language: {original_language}</div>
            <div>original_title: {original_title}</div>
            <div>overview: {overview}</div>
            <div>popularity: {popularity}</div>
            <div>release_date: {release_date}</div>
            <div>{genre_ids}</div>
        </div>);
};

export default MovieDetails;