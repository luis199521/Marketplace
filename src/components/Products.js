import React from "react";
import AddCartButton from "./AddCartButton";
import '../styles/products.css';
import ProductImage from '../images/Product/bedroom.jpg';
import ProductThumbnail from '../images/Product/bedroom-thumbnail.jpg';
import Colors from "./Colors";
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { useState, useEffect } from "react";



const Products = (props) => {

    const[quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(props.price);
  
    useEffect(() =>{
        setPrice(quantity * props.price);
  
    },[quantity, props.price])
  
   
    
  
    const handleQuantity = (event) =>{
      setQuantity(event.target.value)
  
    }



    return (
        <div id="wrapper">
            <Header />
            <Navigation />

            <main id="products">
                <article id="productTitle">
                    <h1>{props.title}</h1>
                </article>
                <article id="product-info">
                    <section id="product-photo">
                        <img src={ProductImage} alt={props.alt} />
                    </section>
                    <section id="product-thumbnail">
                        <img src={ProductThumbnail} alt={props.altthumb} />
                        <img src={ProductThumbnail} alt={props.altthumb} />
                        <img src={ProductThumbnail} alt={props.altthumb} />
                        <img src={ProductThumbnail} alt={props.altthumb} />
                    </section>
                    <section id="product-attribute">
                        <h2>Description</h2>
                        <p>{props.description}</p><br />
                        <h2>Colors</h2>
                        <Colors buttontype = "Green"/>
                        <Colors buttontype = "Black"/>
                        <h2>Quantity</h2>
                        <input type="number"  onChange={handleQuantity} min="1" max="99" />
                        <h2>Price</h2>
                        <h3>${price}</h3><br />
                        <AddCartButton />
                    </section>
                </article>
            </main>
            <Footer />
        </div>
    );

};


export default Products;