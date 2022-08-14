import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductInfo from './pages/ProductInfo'
function App() {
  return (
  <Router>  
    <>
    <Routes>
     <Route path = '/' element =  {<Home/>}/>
     <Route path = '/productlist' element =  {<ProductList/>}/> 
     <Route path = '/productinfo' element =  {<ProductInfo/>}/> 
    </Routes>
    </>
  </Router>    
  );
}

export default App;
