import React from "react";
import '../styles/main.css';
import '../styles/form.css';
import Header from "./Header";
import Navigation from "./Navigation";
import Form from "./Form";
import Footer from "./Footer";

const Contact = (props) =>{
  

    return(
		<div id="wrapper">
		<Header/>
		<Navigation/>
		<Form/>
		
		<Footer/>

	</div>
       

       
       



    );

};


export default Contact;