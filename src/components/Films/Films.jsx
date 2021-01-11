import React,{useState,useEffect} from 'react';
import RowFilms from "./RowFilms";
import axios, {API_THEMOVIEDB_KEY} from '../axios';
import './films.css'
import NewFilms from "./NewFilms";
function Films(props) {
  return (
      <div className="my-3 flex flex-col md:flex-row">
        <div className="left w-full flex-auto">
          <RowFilms title="Trending" fetchUrl={`/trending/all/day?api_key=${API_THEMOVIEDB_KEY}`}/>
          <RowFilms title="Top Rate" fetchUrl={`/movie/top_rated?api_key=${API_THEMOVIEDB_KEY}`}/>
          <RowFilms title="Popular" fetchUrl={`/movie/popular?api_key=${API_THEMOVIEDB_KEY}`}/>
        </div>
        <NewFilms/>
      </div>
  );
}

export default Films;