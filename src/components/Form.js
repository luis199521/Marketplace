import React from "react";
import '../styles/main.css';
import '../styles/form.css';
import { useState } from "react";

const Form = () =>{

	const[firstName, setFirstName] = useState('');
	const[city, setCity] = useState('');

	const getName = (event) =>{
		setFirstName(event.target.value)
	}
	const getCity = (event) =>{
		setCity(event.target.value)
	}

	const handleSubmit = (event) =>{
		event.preventDefault();
		if(firstName && city){
			alert(`${firstName} is From ${city}`);
		   }
	}
   
  

    return(
        <div className="form-container">
			<form action="#" method="post" id="theForm" onSubmit={handleSubmit}>
				<fieldset>
					<legend>Contact Form</legend>
					<p>All fields are required.</p>
					<div className="two"><label for="firstName">First Name</label><input type="text" name="firstName" onBlur={getName} id="firstName"/></div>
					<div className="two"><label for="lastName">Last Name</label><input type="text" name="lastName" id="lastName" /></div>
					<div className="two"><label for="email">Email Address</label><input type="email" name="email" id="email"/></div>
					<div className="two"><label for="phone">Phone Number<span className="tooltip">Your phone number should be in the format 041 234 5678</span></label><input type="text" name="phone" id="phone"/></div>
					<div className="two"><label for="city">City</label><input type="text" name="city" id="city"/></div>
					<div className="two"><label for="state">State</label><select name="state" id="state" onChange={getCity}>
							<option value="ACT">Australian Capital Territory</option>
							<option value="NSW">New South Wales</option>
							<option value="NT ">Northern Territory</option>
							<option value="QLD">Queensland</option>
							<option value="SA ">South Australia</option>
							<option value="TAS">Tasmania</option>
							<option value="VIC">Victoria</option>
							<option value="WA ">Western Australia</option>
						</select></div>
					<div className="two"><label for="zip">Post Code<span className="tooltip">In the format 4 digits 6000</span></label><input type="text" name="zip" id="zip"/></div><br/><br/><br/>
					<div className="one"><input type="checkbox" name="terms" id="terms"/> I agree to the terms, whatever they are.
					</div>
					<div className="one"><input type="submit"  value="Send" id="submit"/></div>
				</fieldset>
			</form>
        </div>

       
       



    );

};


export default Form;