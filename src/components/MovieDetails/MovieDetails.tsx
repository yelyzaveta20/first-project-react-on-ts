import React from 'react';
import {IMovie} from "../../interfaces/movisInterface";
import {Navigate, useLocation} from "react-router-dom";
import css from './Details.module.css'
import {poster} from "../../constans/urls";

const MovieDetails= () => {
    const {state:{movie}}=useLocation()
    // console.log({state:{movie}})
const {title,original_language,original_title, overview,popularity,release_date,poster_path }=movie
    const posterurl=`${poster}${poster_path}`
    return (
        <div className={css.Detauls}>
            <button>Home</button>
        <div>Title:{title}</div>
            <img className={css.imgDetails} src={posterurl} alt={title}/>
        <div>original_language: {original_language}</div>
        <div>original_title: {original_title}</div>
        <div>overview: {overview}</div>
        <div>popularity: {popularity}</div>
        <div>release_date: {release_date}</div>
        </div>
    );
};

export default MovieDetails;