import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "../styles/Card.css";

const WLCard = (movie) => {

    //console.log(movie.info);
    let img_path = "https://image.tmdb.org/t/p/w500";

    //
    const { removeMovieFromWatchlist, watchlist } = useContext(GlobalContext);

    let storedMovie = watchlist.find(o => o.id === movie.info.id);

    const watchlistDisabled = storedMovie ? true : false;
    //

    return (

        <div className="movie" key={movie.info.id}>
            <img src={img_path + movie.info.poster_path} className="poster" alt="" />
            <div className="movie-details">
                <div className="box">
                    <h4 className="title">{movie.info.title}{movie.info.name}</h4>
                    <p className="rating">{movie.info.vote_average}</p>
                </div>
                <div className="overview">
                    <h1>Descripción</h1>
                    {movie.info.overview}
                    <div>
                        <button className="btn-add-remove"
                            onClick={() => { removeMovieFromWatchlist(movie.info.id) }}>
                            Quitar de Mi Lista
                        </button>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default WLCard;