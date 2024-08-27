import React from "react";
import logo from '../images/Logo/the-marketplace-logo-2.jpg';
import AccountIcon from '../images/Icons/user-icon.jpg';
import CartIcon from '../images/Icons/cart-icon.jpg';
import '../styles/header.css';
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";



const Header = () =>{

    return(
    <header>
         <Link to="/"><img src={logo} alt="Logo"/></Link>
         <SearchForm/>
         <section id="account">
                <img  src={AccountIcon} alt="account icon"/>
                <h2>Account</h2>
        </section>
         <section id="cart">
               <Link to="/cart"><img src={CartIcon} alt="cart-icon"/></Link>
                <h2>Cart</h2>
         </section>

    </header>

    );
}


export default Header;