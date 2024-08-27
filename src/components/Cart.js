import React, { useEffect } from "react";
import CheckoutButton from "./CheckoutButton";
import '../styles/cart.css';
import ProductThumbnail from '../images/Product/bedroom-thumbnail.jpg';
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useState } from "react";



const Cart = (props) => {

  const[quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(props.price);

  useEffect(() =>{
    setSubtotal(quantity * props.price);

  },[quantity, props.price])

 
  

  const handleQuantity = (event) =>{
    setQuantity(event.target.value)

  }


    return (
        <div id="wrapper">
            <Header />
            <Navigation />

            <main id="cart-page">
            <article  id="myCart">
            <section>
                <h2>My Cart</h2>
                <h3>{props.title}</h3>
                <img src={ProductThumbnail} alt="King Bed Thumbnail"/>
            </section>
        </article>

      
        <article  id="quantity">
            <section>
                <h2>Quantity</h2>
                <input type="number" value={quantity} onChange={handleQuantity} min="1" max="99"/>
            </section>
        </article>

        <article  id="total">
            <section>
                <h2>Total</h2>
                <h3>{props.price}</h3>
                <h4>Subtotal <b>${subtotal}</b></h4><br/>
                <CheckoutButton/>
             
            </section>
        </article>
              
            </main>
            <Footer />
        </div>
    );

};


export default Cart;