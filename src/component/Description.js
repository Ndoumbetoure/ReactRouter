import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { Donne } from '../Donne';

const Description = () => {


    const descStyle = {backgroundColor : "#403d39", minHeight: "100vh", textAlign : "center", color:'#fffcf2', paddingTop :"12.5px" }
    
    const {title} = useParams();



  return (
    <div style={descStyle}>
        
        <div>  
            <div>
                {
                   Donne
                     .filter((movie) => movie.title === title)
                       .map((movie, index) => (
                          <div key={index}> 
                              <h1>{movie.title}</h1>
                                 <p>{movie.description}</p>
                                    <div>{movie.trailer}</div>
                          </div>) )
                }
            </div>

            <Link to="/">
              <button className="btn" style={{marginTop : '30px'}}>
                  <i class="far fa-arrow-alt-circle-left"></i>Go Back Home
              </button>
           </Link>
        </div>

    </div>
  )
}

export default Description