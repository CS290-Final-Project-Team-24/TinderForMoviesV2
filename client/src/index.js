import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Login from './routes/login/Login';
import Home from "./routes/home/Home";
// import Navbar from './components/Navbar';
import FourOhFour from './routes/404/FourOhFour';
import Signup from './routes/signup/Signup';
import Logout from './routes/logout/Logout';
import Matches from './routes/matches/Matches';
import Swipe from './routes/swipe/Swipe';
import Nav from './components/Gation';

function TinderMovies() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<><FourOhFour/><Nav/></>} />
          <Route path="/" element={<><Home/></>}/>
          <Route path="/swipe" element={<><Swipe/><Nav/></>}/>
          <Route path="/login" element={<><Login/></>}/>
          <Route path="/signup" element={<><Signup/></>}/>
          <Route path="/matches" element={<><Matches/><Nav/></>}/>
          <Route path='/logout' element={<><Logout/></>}/>
          <Route path='/nav'  element={<><Nav/></>}/>
        </Routes>
      </BrowserRouter>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <TinderMovies />
);


