import './App.css'
import Cards from "./components/cards";
import Navbar from './components/nav';
import Generated from "./data/generated.json"

function App() {
  const datalist = Generated.map(v => {
    return <Cards title={v.numero} description={v.description}/>
  } )
  return ( 
    <div className="App">
      <div className='container' >
        <header><Navbar /></header>
       {datalist}
     </div>
    </div>
    
  )
  ;
}

export default App;
