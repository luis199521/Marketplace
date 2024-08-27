import React from "react";
import SearchIcon from '../images/Icons/lookup.jpg'; 
import {useState} from "react";


const SearchForm = () => {

    const[inputValue, setInputValue] = useState('');

    const updateValue = (event) =>{
        setInputValue(event.target.value);

    }

    return (
        <form>
            <input type="text" value ={inputValue} placeholder="Search Products" name="search" onChange={updateValue}/>
            <img id="search-icon" src={SearchIcon} alt="search icon"/>
            
        </form>
       
        );
}

export default SearchForm;