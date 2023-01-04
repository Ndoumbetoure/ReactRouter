import ReactStars from 'react-stars'
import React from 'react';
import { Link} from 'react-router-dom';


const MovieCard = ({props}) => {
      
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }

    return(

        <>
           <div className="divPrincipal">
               <figure>
                    <img src={props.posterUrl} alt="my film"/>
                    <div className="divDescription">
                       <h4>{props.title}</h4>
                       <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24} color2={'#eb5e28'}
                            value={props.rate}
                       />

                         <Link to={`/data/${props.title}`}><button type='button'>see trailer</button></Link>
                         
                    </div>
               </figure>
           </div>
        </>
    )

}

export default MovieCard;