import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer"
// Initial state
const initialState = {
    watchlist: localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : [],
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider context
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    }, [state]); 

    // Actions

    const addMovieToWatchlist = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie})
    }

    const removeMovieFromWatchlist = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id})
    }

    return (
        <GlobalContext.Provider value={{watchlist: state.watchlist, addMovieToWatchlist, removeMovieFromWatchlist}}>
            {props.children}
        </GlobalContext.Provider> 
    )
}