import React,{useState, useEffect} from 'react';
import PetCard from './PetCard';
import Navbar from './Navbar';
import Pricing from './Pricing'
import About from './About'
import './App.css';
import {BrowserRouter as Route, Router, Routes} from "react-router-dom"



function App() {

  const [results, setResults] = useState([])

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/images/search')
    .then(response => response.json)
    .then(data => console.log(data))
     }, [])

  
  return (
    <>
    <div className="App">
      <Navbar />
      <PetCard />
      <Routes>
      <Router>
        <Route path='/' exact component={Home}/>
        <Route path='/pricing' component={<Pricing />} />
        <Route path='/about' component={<About />} />
      </Router>
      </Routes>
    </div>
    </>
  );
}


const Home =() =>  {
  return (
    <h1>Home Page</h1>
  )
}

export default App;
