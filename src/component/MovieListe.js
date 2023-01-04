import React from 'react'
import { useState } from 'react'
import MovieCard from './MovieCard'
import {Donne} from "../Donne";
import AddMovie from "./AddMovie"
import Navbar from "./Navbar"



const MovieListe = () => {

    const [data, setData] = useState(Donne);
   //const {title} = useParams();

    //add movie

    const handleAdd = (newmovie) =>
    {
        setData([...data, newmovie])
    }
 
    //Filter by rate

    function filterByRate(newRate) {
      setData(Donne.filter((e) => e.rate === newRate));
     }


     //Filter by title

     function filterByTitle(e){
       setData(Donne.filter((movie) => movie.title.toLowerCase().includes(e.target.value.toLowerCase())))
     }

  return (
    <div>    
        

            <div>
                 <Navbar filterByRate={filterByRate} filterByTitle={filterByTitle}/>
            </div>


            <div>
            {
               data.map((item) => 
              (<MovieCard props={item} key={item.id}/>)
              )
            }
            </div>

            <div>
               <AddMovie handleAdd={handleAdd} />
            </div>

    </div>
  )
}

export default MovieListe

