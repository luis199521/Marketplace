import React from "react";
import '../styles/products.css'; 



const Colors = (props) =>{


    return(
        <button className ={(props.buttontype === 'Green') ? 'btnCart' :'btnB'}>{(props.buttontype === 'Green') ? 'Green' : 'Black'}</button>
    );
};

export default Colors;