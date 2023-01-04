import logo from '../image/kn (1).png';
import ReactStars from "react-stars";
import { Link} from 'react-router-dom'


const Navbar = ({filterByRate, filterByTitle}) => {

  const enteteStyle = {height : "50px", backgroundColor : '#eb5e28', marginTop : "-15px", marginLeft : -15, marginRight : -15, marginBottom: 40}
  const styleObject = {color : "#fffcf2", textAlign : "center", fontSize : "15px", paddingTop :"12.5px"}
  const star = {marginLeft : '-50px '}
  const linkStyle ={ textDecoration: 'none', color: 'whitesmoke', fontSize: 20, fontFamily: "Georgia, 'Times New Roman', Times, serif"}

  return (

     <div>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <div style={enteteStyle}>
            <h1 style={styleObject}>Regarder vos films préférés</h1>
          </div>
          <div className='navPrincipal'>
               <img src={logo} className="App-logo" alt="logo" />   
               <input
                  type="text"
                  placeholder="Search"
                  className="form-control"
                  onChange={filterByTitle}
               />
               <span style={star}>
                  <ReactStars
                  count={5}
                  size={24} color2={'#eb5e28'}
                  onChange={filterByRate}  
                  />
               </span>
             <ul className='usericon'>
                <li><a href="http://">Connexion</a><i class="fa fa-user"></i></li>
             </ul>
          </div>
          <div>
             <ul className='liStyle'>
                <li><Link to="/"  style={linkStyle}>Accueil</Link></li>
                <li><Link to="/Serie" style={linkStyle}>Series</Link></li>
                <li><Link to="Movies" style={linkStyle}>Movies</Link></li>
                <li><Link to="/Movieliste" style={linkStyle}>My liste</Link></li>
                <li><Link to="/AddMovie" style={linkStyle}>Add new movie</Link></li>

              </ul>
          </div> 

     </div>

  );
}

export default Navbar;