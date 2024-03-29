import React, {useState, useEffect} from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth} from '../context/AuthContext'
import {db} from '../firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import {AiOutlineClose} from 'react-icons/ai';
 
const SavedShows = () => {
     const [movies, setMovies] = useState([]);
     const { user } = UserAuth();
   
     const sliderLeft = () => {
       var slider = document.getElementById('slider');
       slider.scrollLeft = slider.scrollLeft - 500;
     };
     const sliderRight = () => {
       var slider = document.getElementById('slider');
       slider.scrollLeft = slider.scrollLeft + 500;
     };
   
     useEffect(() => {
       onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
         setMovies(doc.data()?.savedShows);
       });
     }, [user?.email]);

     const movieRef = doc(db, 'users', `${user?.email}`)

     const deleteShow = async (passedID) =>{
        try {
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(movieRef, {
                savedShows: result
            })

        } catch (error){
            console.log(error)
        }
     }
 
    return (
        <>
        <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                    onClick={sliderLeft}
                    className='absolute bg-white rounded-full opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
                <div id={'slider'}
                    className='relative left-0 w-full h-full overflow-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((item, id) => (

                        <div 
                        key={item.id}
                        className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2'>
                            <img className='w-full h-auto block'
                                src={`https://image.tmdb.org/t/p/w500/${item.img}`} alt={item.title} />
                            <div className='absolute top-0 left-0 w-full h-full opacity-0 text-white hover:bg-black/80 hover:opacity-100'>
                                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full'>{item.title}</p>
                                <p onClick={() => deleteShow(item.id)}
                                className='absolute text-gray-400 top-4 right-4'><AiOutlineClose/></p>
                            </div>
                        </div>
                    ))}
                </div>
                <MdChevronRight
                    onClick={sliderRight}
                    className='absolute right-0 bg-white rounded-full opacity-40 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
            </div>

        </>
    )
}

export default SavedShows
