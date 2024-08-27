import React from "react";
import '../styles/sales.css';
import Header from "./Header";
import Navigation from "./Navigation";
import MainSales from "./MainSales";
import Footer from "./Footer";



const Sales = () => {
    return (
        <div id="wrapper">
            <Header/>
            <Navigation/>
            <MainSales />
            <Footer/>

        </div>
    );
};

export default Sales;

