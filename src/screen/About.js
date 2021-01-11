import React from 'react';

function About(props) {
  return (
    <div className="container mx-auto p-1 lg:p-5">
        <div className="content w-2/3 mx-auto min-h-screen">
          <h2 className="text-gray-300 font-medium mb-4 text-xl lg:text-3xl text-center">About Me</h2>
         <div className="text-gray-300 lg:text-base text-sm">
           <p> I am a final year student at FPT College.</p>
           <div className="space my-2 lg:my-5">
           </div>
           <p>
             I have code knowledge in several languages and frameworks like HTML5, CSS3, REACTJS, JAVASCRIPT, JQUERY, BOOTSTRAP, MYSQL, PHP, LARAVEL.
           </p>
           <div className="space my-2 lg:my-5">
           </div>
           <p>
             And here is a website written by me.
           </p>
           <div className="space my-2 lg:my-5">
           </div>
           <p className="text-red-400">
             If you find me suitable for the job for the company you are hiring, please contact me.
           </p>
           <p className="text-red-400">
             My Email: hoaianh0123450@gmail.com
           </p>
           <p className="text-red-400">
             My phone: 0862223710
           </p>
         </div>
        </div>
    </div>
  );
}

export default About;