import React,{useState,useEffect} from 'react';
import YouTube from "react-youtube";
import {useParams} from 'react-router-dom';
import movieTrailer from 'movie-trailer';
import axios, {API_THEMOVIEDB_KEY} from "../components/axios";

function SingleFilmPage() {
  const {id} = useParams();
  const [idUrl,setIdUrl] = useState(null);
  const [data, setData] = useState(null);
  const [error,setError] = useState(false);

   useEffect( () => {
    const getDetails = async () => {
     try{
       const fetchData = await axios.get(`/movie/${id}?api_key=${API_THEMOVIEDB_KEY}&language=en-USS`);
       setData(fetchData.data);
       movieTrailer( fetchData.data.name || fetchData.data.title ).then((url) => {
         const urlParams = new URLSearchParams(new URL(url).search);
         setIdUrl(urlParams.get('v'));
       }).catch(error => {
         if (error){
           setError(true)
         }
       })
       return  fetchData;
     }catch (error){
       if (error){
         setError(true)
       }
     }
    }
    getDetails();

  },[id])
  const opts = {
    height: '490',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <div className="container mx-auto">
      <div className="title bg-gray-900 mt-5 p-3 rounded-t">
        <h3 className="text-gray-100">Trailer & Description</h3>
      </div>
      <div className="description p-3" style={{backgroundColor: "#14181C"}}>
        <h6 className="text-gray-300 text-lg text-justify mb-3">{data && data.overview}</h6>
        <div className="trailer">
          {idUrl && <YouTube videoId={idUrl} opts={opts} /> }
          {error &&  <h1 className="text-3xl text-center text-gray-100">No trailer</h1>}
        </div>
      </div>
    </div>
  );
}

export default SingleFilmPage;