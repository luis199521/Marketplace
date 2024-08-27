import React from "react";
import '../styles/navigation.css';
import { Link } from "react-router-dom";


const Navigation = () =>{

    return(
        <nav id="footer-nav">
        <ul>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/rooms">Rooms</Link></li>
        <li><Link to="/sales">Sales</Link></li>
        <li><Link to="/customer-support">Customer Support</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        </ul>
    </nav>

    );

};

export default Navigation;