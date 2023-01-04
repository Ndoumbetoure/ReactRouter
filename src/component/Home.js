import React from 'react'
import MovieListe from "./MovieListe"
import Footer from "./Footer"



function Home() {

    const bdStyle = {backgroundColor : "#403d39", minHeight: "100vh", paddingTop : '12px', paddingLeft : '20px', paddingRight : '20px'}
  

  return (
    <div>
        <header className="App-header"  style={bdStyle}>
            <MovieListe/>
        </header>
        <Footer/>
    </div>


  )
}

export default Home