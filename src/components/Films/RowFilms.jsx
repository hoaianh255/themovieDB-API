import React,{useState,useEffect} from 'react';
import axios from "../axios";
import Film from "./Film";
function RowFilms({title,fetchUrl}) {
  const [movies,setMovies] = useState([])
  useEffect(()=> {
    const fetchMovies = async () =>{
      try {
        const fetchData = await axios.get(fetchUrl);
        setMovies(fetchData.data.results);
      }catch (e){

      }
    }
    fetchMovies()
  },[fetchUrl])
  return (
    <>
      <h2 className="text-gray-500 text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 ml-2 md:ml-0">#{title}</h2>
      <div className="grid grid-cols-1 justify-center md:grid-cols-5  md:gap-4">
        {movies && movies.map((data,index)=> index < 10 && <Film key={index} {...data}/> )}
      </div>
    </>
  );
}

export default RowFilms;