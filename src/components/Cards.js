import React from "react";
import AddCartButton from "./AddCartButton";
import '../styles/main.css';

const Cards = (props) =>{
  

    return(
       
            <section>
                <img src={props.image} alt={props.alt} />
                <h2>{props.title}</h2>
                <AddCartButton/>
            
            </section>
       



    );

};


export default Cards;