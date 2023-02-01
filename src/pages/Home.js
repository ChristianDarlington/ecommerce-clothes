import './styles/Home.css'
const Home = ({setResults, results}) => {


  

  return ( 
    <>
    <h1>Available Items</h1>
    <div className='item-container'>
    {results && results.map(result => (
    <div className='item' key={result.id}>
        <h4 className='title'>{result.title}</h4>
        <h6 className='price'>${result.price}</h6>
      <div className='imgBx'>
        <img src={result.image} alt='pic'></img>
      </div>
      <div className='footer'>
      <button className='btn'>Purchase Product</button>
      </div>
    </div>
      ))}
      </div>
    </>
   );
}
 
export default Home;