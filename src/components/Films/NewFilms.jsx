import React, {useEffect, useState} from 'react';
import axios, {API_THEMOVIEDB_KEY} from "../axios";
import Film from "./Film";

function NewFilms(props) {
  const [movies,setMovies] = useState([])
  useEffect(()=> {
    const fetchMovies = async () =>{
      const fetchData = await axios.get(`/movie/upcoming?api_key=${API_THEMOVIEDB_KEY}&language=en-US&page=${Math.floor(Math.random() * 10 + 1)}`);
      setMovies(fetchData.data.results);
    }
    fetchMovies();
  },[])
  return (
    <div className="right flex-auto w-2/6  lg:px-3 hidden lg:block">
      <h2 className="text-gray-500 text-xl md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 ml-2 md:ml-0">#Filter</h2>
      <form id="filterFilm">
        <div className="form-group">
          <label htmlFor="category" className="text-gray-300">
            Category
          </label>
          <select name="category" id="category" className="py-1 px-1.5 text-gray-300 bg-gray-600" >
            <option value="default">Default</option>
            <option value="action">Action</option>
            <option value="horror">Horror</option>
            <option value="history">History</option>
            <option value="fantasy">Fantasy</option>
            <option value="romance">Romance</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category" className="text-gray-300">
            Nation
          </label>
          <select name="category" id="category" className="py-1 px-1.5 text-gray-300 bg-gray-600" >
            <option value="default">Default</option>
            <option value="action">Action</option>
            <option value="horror">Horror</option>
            <option value="history">History</option>
            <option value="fantasy">Fantasy</option>
            <option value="romance">Romance</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category" className="text-gray-300">
            Sort by
          </label>
          <select name="category" id="category" className="py-1 px-1.5 text-gray-300 bg-gray-600" >
            <option value="default">Default</option>
            <option value="action">Action</option>
            <option value="horror">Horror</option>
            <option value="history">History</option>
            <option value="fantasy">Fantasy</option>
            <option value="romance">Romance</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category" className="text-gray-300">
            Sub
          </label>
          <select name="category" id="category" className="py-1 px-1.5 text-gray-300 bg-gray-600" >
            <option value="default">Default</option>
            <option value="action">Action</option>
            <option value="horror">Horror</option>
            <option value="history">History</option>
            <option value="fantasy">Fantasy</option>
            <option value="romance">Romance</option>
          </select>
        </div>
        <div className="button-filter flex justify-end">
          <button className="py-1.5 px-3 bg-gray-600 rounded text-white font-medium w-full">
            Submit
          </button>
        </div>
      </form>
      <h2 className="text-gray-500 text-xl md:text-xl lg:text-2xl mt-3 xl:text-3xl font-bold mb-4 ml-2 md:ml-0">#News movies</h2>
      <div className="grid grid-cols-1 justify-center md:grid-cols-2  md:gap-4">
        {movies && movies.map((data,index)=> index < 10 && <Film key={index} {...data}/> )}
      </div>
    </div>
  );
}

export default NewFilms;