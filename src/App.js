import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import Sales from './components/Sales';
import Products from './components/Products';
import Cart from './components/Cart';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sales" element={<Sales />} />
        <Route path="/products" element={<Products
          title="King Bed"
          alt="King Bed"
          altthumb="King Bed Thumbnail"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro officiis ratione, ducimus ipsa, earum rem deserunt, veritatis voluptate magni quam nulla animi error dignissimos esse ullam maiores aut dolores in orem ipsum, dolor sit amet consectetur adipisicing elit. Porro officiis ratione, ducimus ipsa, earum rem deserunt, veritatis voluptate magni quam nulla animi error dignissimos esse ullam maiores aut dolores in orem ipsum, dolor sit amet consectetur adipisicing elit. Porro officiis ratione, ducimus ipsa, earum rem deserunt, veritatis voluptate magni quam nulla animi error dignissimos esse ullam maiores aut dolores in orem ipsum, dolor sit amet consectetur adipisicing elit. Porro officiis ratione, ducimus ipsa, earum rem deserunt, veritatis voluptate magni quam nulla animi error dignissimos esse ullam maiores aut dolores in"
          price={800}
        />}
        />
        <Route path="/cart" element={<Cart price={1500} /> } />
        <Route path="/contact" element={<Contact />} />
        <Route
          path='/'
          element={
            <div id='wrapper'>
              <Header account="Account" cart="Cart" />
              <Navigation />
              <Main />
              <Footer />
            </div>

          }
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}


export default App;
