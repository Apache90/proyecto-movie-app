import React, { useState, useEffect, useContext } from "react";
import "../styles/Main.css";
import Card from "./Card";
import notfound from "../images/notfound.jpg"
import logo from "../images/fullpirateo.png"
import WLCard from "./WLCard";
import { GlobalContext } from "../context/GlobalState";

//------------------------------------------------------------------------------------------------------------------
let API_KEY = "&api_key=c0b9929024784ad3e09048d588e8dfd7";                           // Definimos las variables con valores relacionados con la API de The Movie Database,
let base_url = "https://api.themoviedb.org/3";                                        // incluyendo la clave de API, la URL base y una URL completa para solicitar peliculas
let url = base_url + "/movie/popular?language=es-ESP&page=1" + API_KEY;              // también esta el array que usamos para las categorías de películas.
let arr = ["Tendencias", "Destacadas", "Estrenos", "Series", "Documentales"];
//-------------------------------------------------------------------------------------------------------------------
const Main = () => {  // Definimos el componente Main
  //--------------------------------------------------------------------------------------------------------------------
  const [movieData, setData] = useState([]);
  const [url_set, setUrl] = useState(url);    // Utilizamos los hooks useState para crear tres estados: movieData, url_set y search.
  const [search, setSearch] = useState();
  const { watchlist } = useContext(GlobalContext);
  //--------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())              // El hook useEffect realiza una solicitud HTTP y actualiza
      .then((data) => {                       // el estado movieData cuando cambia la URL en url_set. La solicitud se realiza
        setData(data.results);                // utilizando la función fetch, y los datos se asignan al estado movieData utilizando la función setData
      });
  }, [url_set]);
  //--------------------------------------------------------------------------------------------------------------------
  const getData = (movieType) => {
    if (movieType === "Tendencias") {
      url = base_url + "/movie/popular?language=es-ESP&page=1" + API_KEY;
    }
    if (movieType === "Destacadas") {
      url = base_url + "/movie/top_rated?language=es-ESP&page=1" + API_KEY;
    }
    if (movieType === "Estrenos") {
      url = base_url + "/movie/upcoming?language=es-ESP&page=1" + API_KEY;
    }

    // La función getData que recibe un parámetro llamado movieType. Esta función actualiza la URL
    // en base a la categoría de película seleccionada y la asigna a url_set utilizando la función setUrl.

    if (movieType === "Series") {
      url =
        base_url +
        "/discover/tv?include_adult=false&language=es-ESP&page=1&sort_by=vote_average.desc&vote_count.gte=200" +
        API_KEY;
    }
    if (movieType === "Documentales") {
      url =
        base_url +
        "/discover/movie?with_genres=99&language=es-ESP&primary_release_year=2022" +
        API_KEY;
    }
    setUrl(url);
  };
  //---------------------------------------------------------------------------------------------------------------------
  const searchMovie = () => {
    if (search) {
      const searchUrl =
        base_url +
        "/search/movie?api_key=c0b9929024784ad3e09048d588e8dfd7&language=es-ESP&query=" +
        encodeURIComponent(search);

      setUrl(searchUrl);
      setSearch("");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    searchMovie();
  };
  //---------------------------------------------------------------------------------------------------------------------
  return (
    <>
      <div className="header">
        <img className="logo" src={logo} alt="" />
        <nav>

          <ul className="headerLinks">
            {arr.map((value) => {
              //--------------------------------------------------------------------------------------------------------------------              
              return (
                <li>
                  <a
                    // Renderiza un enlace dentro de una lista. Al hacer clic en el enlace, 
                    name={value}                            // se ejecutará la función getData con el valor del atributo name del enlace. 
                    className="bntheader"                   // Esto permite cambiar el estado del componente en función del valor del enlace.
                    onClick={(e) => {
                      getData(e.target.name);
                    }}>
                    {value}
                  </a>
                </li>
              );
              //---------------------------------------------------------------------------------------------------------------------
            })}
          </ul>
        </nav>
        <form onSubmit={handleSubmit}>
          <div className="search-btn">
            <input
              type="text"
              placeholder="Introduzca la Pelicula"
              className="inputText"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {/* //---------------------------------------------------------------------------------------------------------------------*/}
        {movieData.length === 0 ? (
          <p className="notFound"><img className="imgnotfound" src={notfound} alt="" /></p>  // Usamos una expresión condicional (operador ternario) para mostrar un mensaje 
        ) : (                                                                  // de "Not Found" si no hay datos de películas en el estado movieData. De lo contrario, 
          movieData.map((res, pos) => {                                        // se utiliza el método map() para iterar sobre los datos de películas en movieData 
            return <Card info={res} key={pos} />;                              // y renderizar una tarjeta de película (<Card>) para cada elemento.
          })
        )}
        {/* //---------------------------------------------------------------------------------------------------------------------*/}
      </div>


      <div className="headerLista">
        <h2 className="bntLista">Mi Lista</h2>
      </div>
      <div className="containerLista">
        {
          watchlist.length >= 1 ? watchlist.map((res, pos) => {
            return <WLCard info={res} key={pos} />
          }) : <h2 id="empty-list">Nada en tu lista. Agregá alguna!</h2>
        }

        {console.log(watchlist.length)}

      </div>
    </>
  );
};

export default Main;
