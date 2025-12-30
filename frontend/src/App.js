import logo from './logo.svg';
import './App.css';
import Frontpage from './pages/frontpage';
import Trending from './pages/trending';
import {Route,Routes}from "react-router-dom";
import Home from './home';
import Signin from './pages/signin';

function App() {
  return (
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/signin'element={<Signin/>}/>
        
      
    </Routes>
  );
}

export default App;
