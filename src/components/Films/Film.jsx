import React from 'react';
import {Link} from 'react-router-dom';
function Film(data) {
  return (
    <div className="block-film p-5 md:p-0 w-5/6 mx-auto md:w-full">
      <Link to={`/film/${data.id}`}>
        <div className=" relative h-96 md:h-44 lg:h-56 shadow-2xl rounded overflow-hidden" >
          <div className="thumbnail transform hover:scale-125 w-full h-full absolute top-0 transition-all left-0 z-0" style={{backgroundImage: data.poster_path && `url(https://image.tmdb.org/t/p/w500/${data.poster_path})`,backgroundSize:"cover"}}>

          </div>
          <div className="info absolute top-0 left-0">
            <p ><span className="text-yellow-500"><i className="fas fa-star"> {data.vote_average}</i></span></p>
            <p><span className="text-yellow-500"><i className="fas fa-heart"></i> {data.popularity}</span></p>
          </div>
        </div>
      </Link>
      <h3 className="text-gray-100 font-medium my-1 text-xl text-center"><a href="#" className="hover:underline">{data.name || data.original_name || data.title || data.original_title }</a></h3>
    </div>
  );
}

export default Film;