import React from "react";
import AddCartButton from "./AddCartButton";
import '../styles/main.css';
import '../styles/sales.css';  


const SalesCards = (props) =>{
  

    return(
       
            <section>
                <h2 className="sale">ON SALE</h2>
                <img src={props.image} alt={props.alt} />
                <h2>{props.title}</h2>
                <h4>${props.price}</h4>
                <AddCartButton/>
            </section>
       



    );

};


export default SalesCards;