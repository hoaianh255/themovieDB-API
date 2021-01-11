import React from 'react';

function Loading(props) {
  return (
    <div className="container" style={{height: "100vh"}}>
        <div className="flex justify-center content-center h-full w-full">
          <h1 className="text-4xl text-yellow-500 font-bold">Loading....</h1>
        </div>
    </div>
  );
}

export default Loading;