import React , {useState, useEffect} from 'react';
import Navbar from './Navbar';
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact';
import { Route, Routes} from "react-router-dom"



function App() {

  const [results, setResults] = useState([])

  const URL_KEY = `https://fakestoreapi.com/products`

  useEffect(() => {
    fetch(URL_KEY)
    .then(response => response.json())
    .then(data => setResults(data))
     }, [])
  
     console.log(results)

  return (
    <>
    <div className="App">

      <Navbar />
      <div className='pages'>
      <Routes>
        <Route exact path='/Home' element={<Home setResults={setResults} results={results}/>} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      </div>
    </div>
    </>
  );
}


export default App;
