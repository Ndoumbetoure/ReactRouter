import './App.css'; 
 import { Route,Routes} from "react-router-dom";
 import Description from './component/Description';
 import Home from './component/Home';


function App() {
  


  return (

  <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/data/:title" element={<Description/>}/>
              
      </Routes>
  </>
  );
}

export default App;


  