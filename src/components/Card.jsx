import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../styles/Card.css";

const Card = (movie) => {

    console.log(movie.info);
    let img_path = "https://image.tmdb.org/t/p/w500";


    //
    const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.id === movie.info.id);

    const watchlistDisabled = storedMovie ? true : false;
    //

    return (

        <div className="movie">
            <img src={img_path + movie.info.poster_path} className="poster" alt="" />
            <div className="movie-details">
                <div className="box">
                    <h4 className="title">{movie.info.title}{movie.info.name}</h4>
                    <p className="rating">{movie.info.vote_average}</p>
                </div>
                <div className="overview">
                    <h1>Descripcion</h1>
                    {movie.info.overview}
                    <div>
                        <button className="btn-add-remove"
                            disabled={watchlistDisabled}
                            onClick={() => { addMovieToWatchlist(movie.info) }}>
                            Agregar a Mi lista
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Card;