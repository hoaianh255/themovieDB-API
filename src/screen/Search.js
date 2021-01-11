import React, {useEffect, useState} from 'react';
import axios, {API_THEMOVIEDB_KEY} from "../components/axios";
import RowFilms from "../components/Films/RowFilms";
import Film from "../components/Films/Film";
import NewFilms from "../components/Films/NewFilms";

function Search(props) {
  const [movies,setMovies] = useState([])
  const [param, setParam] = useState(null);
  const getParam = () => {
    const searchParam = new URLSearchParams(new URL(window.location.href).search)
    setParam(searchParam.get('s'));
  }
  useEffect(()=> {
   getParam();
    const fetchMovies = async () =>{
      const fetchData = await axios.get(`/movie/upcoming?api_key=${API_THEMOVIEDB_KEY}&language=en-US&page=${Math.floor(Math.random() * 10 + 1)}`);
      setMovies(fetchData.data.results);
    }
    fetchMovies();
  },[])
  if(!param){
    return <h1>Nothing</h1>
  }
  return (
    <div className="container mx-auto py-3">
      <div className="my-3 flex flex-col md:flex-row">
        <div className="left w-full flex-auto">
          <RowFilms title={`Search for: ${param}`} fetchUrl={`/search/movie?api_key=${API_THEMOVIEDB_KEY}&language=en-US&query=${param}&page=1&include_adult=false`}/>
        </div>
        <NewFilms/>
      </div>
    </div>
  );
}

export default Search;