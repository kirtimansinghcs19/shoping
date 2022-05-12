import './App.css';
import NavBar from './components/Navbar';
import ProductsContextProvider from './Global/ProductsContext';
import ProductsContext from './Global/ProductsContext';
import Products from './components/Products';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import CartContextProvider from './Global/CartContext';

function App() {   
  return (
    <div>
      <ProductsContextProvider> 
      <CartContextProvider>
        <Router>
        <NavBar />
         <Switch>
            <Route path="/" exact component={Products}/>
            <Route path="/cart" exact component={Cart}/>
            <Route exact component={NotFound}/>
           </Switch> 
        </Router>
        </CartContextProvider> 
      </ProductsContextProvider>
    </div>
  );
}

export default App;
