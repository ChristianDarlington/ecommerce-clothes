import PetCard from './PetCard';
import Navbar from './Navbar';
import Pricing from './pages/Pricing'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact';
import { Route, Routes} from "react-router-dom"



function App() {


  
  return (
    <>
    <div className="App">

      <Navbar />
      <PetCard />
      <div className='pages'>
      <Routes>
        <Route exact path='/Home' element={<Home />}/>
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      </div>
    </div>
    </>
  );
}


export default App;
