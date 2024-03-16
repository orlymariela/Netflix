import axios from 'axios'

import React, { useEffect, useState } from 'react'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Movie from './Movie'

const Row = ({ title, fecthURL, rowID }) => {
    const [movies, setMovies] = useState([])


    useEffect(() => {
        axios.get(fecthURL).then((response) => {
            setMovies(response.data.results);
        });
    }, [fecthURL]);
     //es un url de recuperación, cada vez que cambie la url se reactivara el componente
  
     const sliderLeft = () => {
        var slider = document.getElementById('slider' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
     };
     const sliderRight = () => {
        var slider = document.getElementById('slider'+ rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
     };
    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft 
                onClick={sliderLeft}
                className='absolute bg-white rounded-full opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
                <div id={'slider' + rowID} 
                className='relative left-0 w-full h-full overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((item, id) => (

                        <Movie key={id} item={item}/>

                    )
                    )}

                </div>
                <MdChevronRight
                 onClick={sliderRight}
                 className='absolute right-0 bg-white rounded-full opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            </div>
        </>
    )
}

export default Row
