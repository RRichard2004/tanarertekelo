import './main.css';
import AllRating from './allRating';
import SingleRating from './singleRating';
import { useEffect, useState } from "react"
import {BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className='header'>
          <Link className='navlink' to={'/'}>
            Összes Értékelés
          </Link>
        </div>
        <Routes>
          <Route exact path="/" element={<AllRating />} />
          <Route path="*" element={<AllRating/>} />
          <Route exact path="/teacher/:nev" element={<SingleRating/>} />        </Routes>
      </Router>
  );
}

export default App;
