import React from 'react';

// Gif
import gif from '../gif/spinner.gif'

const Loading = () => {
     return (
          <div>
               <img src={gif} alt="gif" />
          </div>
     );
};

export default Loading;