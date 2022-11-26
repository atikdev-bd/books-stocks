import React from 'react';
import { DotLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex justify-center items-center'>
           <div>
           <DotLoader color="#36d7b7" />
           </div>
        </div>
    );
};

export default Loader;