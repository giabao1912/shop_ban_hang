import logo from './logo.svg';
import PageWrapper from './components/pageWrapper';
import './App.css';
import Home from './components/home';
import Shop from './components/shop';
import {
  Route,
  NavLink,
  HashRouter,
  Router,
  Routes
} from "react-router-dom";

import ProductDetails from './components/productDetails';
import ShoppingCart from './components/shopping-cart';
import Checkout from './components/checkout';

function App() {
  return (
    <>
    <HashRouter>
      <PageWrapper>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/shop-details/:productid' element={<ProductDetails/>} />
          <Route path='/shopping-cart' element={<ShoppingCart/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
      </PageWrapper>
    </HashRouter>
      <script  type="text/javascript" src="src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'"></script>
      <script  type="text/javascript" src="/js/owl.carousel.min.js"></script>
      <script  type="text/javascript" src="/js/jquery-3.3.1.min.js"></script>
      <script  type="text/javascript" src="/js/jquery.nice-select.min.js"></script>
      <script  type="text/javascript" src="/js/jquery.nicescroll.min.js"></script>
      <script  type="text/javascript" src="/js/jquery.magnific-popup.min.js"></script>
      <script  type="text/javascript" src="/js/jquery.countdown.min.js"></script>
      <script  type="text/javascript" src="/js/jquery.slicknav.js"></script>
      <script  type="text/javascript" src="/js/mixitup.min.js"></script>
      <script type="text/javascript" src="/js/main.js"></script>
      <script type="text/javascript" src="/js/bootstrap.min.js"></script>

    </>
  );
}

export default App;
