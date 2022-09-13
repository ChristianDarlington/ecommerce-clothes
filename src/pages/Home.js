import { useState, useEffect } from "react"

const Home = () => {


  // const [results, setResults] = useState([])

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => console.log(data))
     }, [])


  return ( 
    <h1>Home page</h1>
   );
}
 
export default Home;