import React from "react";
import { Helmet } from "react-helmet";
import SearchForm from "components/SearchForm";
import { Link } from "wouter";

export default function NotFound() {
    const gifsErrors = [
        "d2jjuAZzDSVLZ5kI",
        "Bp3dFfoqpCKFyXuSzP",
        "hv5AEBpH3ZyNoRnABG",
        "hLwSzlKN8Fi6I",
    ];

    const randomImage = () => {
        return `https://media.giphy.com/media/${
            gifsErrors[Math.floor(Math.random() * gifsErrors.length) + 1]
        }/giphy.gif`;
    };

    return (
        <>
            <Helmet>404 | Gif App by josecentenodev</Helmet>
            <SearchForm />
            <h1 className='text-green-200 text-3xl text-center block py-5 mt-3'>
                404 Error :(
            </h1>
            <img
                className='block mx-auto'
                src={randomImage()}
                alt='alt-page-404'
            />
            <Link to='/'>Go back home</Link>
        </>
    );
}
