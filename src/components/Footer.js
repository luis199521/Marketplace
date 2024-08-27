import React from "react";
import '../styles/footer.css';
import logo from '../images/Logo/the-marketplace-logo-2.jpg';
import Navigation from "./Navigation";


const Footer = () => {

    return (
        <footer>
            <section id="footer-content1">
                <img src={logo} alt=" The MarketPlace logo" />
                <h2>Australia's Largest Electronic and furniture retailer</h2>
            </section>
            <section id="footer-content2">
                <Navigation />
            </section>

        </footer>

    );

};

export default Footer;