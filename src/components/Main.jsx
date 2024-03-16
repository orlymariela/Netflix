import React, { useEffect, useState } from 'react'
import request from '../Request'
import axios from 'axios'
const Main = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(request.requestPopular).then((response) => {
            setMovies(response.data.results);
            setLoading(false); // Se completa la carga
        })
    }, []);
    
    if (loading) {
        return <p>Loading...</p>;
    }
    // Ya hemos verificado que no estamos cargando, por lo que movies no está vacío aquí
  const movie = movies[Math.floor(Math.random() * movies.length)];

  const trucateString = (str, num) =>{
    if(str.length > num){
        return str.slice(0, num)+ '...';
    }else {
        return str
    }
  }

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                <img className="w-full h-full object-cover"
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>
              <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie.title}</h1>
              <div className='my-4'>
                    <button className='border bg-gray-300 text-black px-5 py-2'>Play</button>
                    <button className='border  text-white px-5 py-2 ml-4'>Watch later</button>
                </div>
                <p className='text-gray-400 text-sm '>Relased: {movie.release_date}</p>
                <p className='text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%]'>
                    {trucateString(movie.overview , 200)}
                </p>
              </div>
 </div>

        </div>
    )
}

export default Main
