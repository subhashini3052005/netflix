import logo from './logo.svg';
import './App.css';
import Frontpage from './pages/frontpage';
import Trending from './pages/trending';
import {Route,Routes}from "react-router-dom";
import Home from './home';
import Foot from './footer';

function App() {
  return (
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/signin'element={<Foot/>}/>
        
      
    </Routes>
  );
}

export default App;
