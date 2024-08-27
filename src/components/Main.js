import React from "react";
import '../styles/main.css';
import Cards from "./Cards";
import HomeImages from '../images/HomeImages';




const Main = () =>{

    return(

        <main id="home">
                <article id="specialDiscounts">
                <h1>Special Discounts</h1>
                <section className="cards">
                <Cards
                image = {HomeImages.SpecialDiscounts.Beds}
                alt = "Beds"
                title = "Beds & Matresses"
                />
                 <Cards
                image = {HomeImages.SpecialDiscounts.Wardrobes}
                alt = "Wardrobes"
                title = "Wardrobes"
                />
                <Cards
                image = {HomeImages.SpecialDiscounts.Tv}
                alt = "Tv"
                title = "TV, Blu Ray & Home Theatre"
                />
                 <Cards
                image = {HomeImages.SpecialDiscounts.Laptop}
                alt = "Laptop"
                title = "Laptops"
                />
               </section>
            </article>

            <article id="starredProducts">
                <h1>Starred Products</h1>
                <section className="flex-container">
                <Cards
                image = {HomeImages.StarredProducts.Dinning}
                alt = "Dinning table"
                title = "Dinning table"
                />
                 <Cards
                image = {HomeImages.StarredProducts.Cofee}
                alt = "Cofee Maker"
                title = "Cofee Maker"
                />
                <Cards
                image = {HomeImages.StarredProducts.Waching}
                alt = "Waching Machine"
                title = "Waching Machine"
                />
                </section>
            </article>

            <article id="starredProducts2">    
            <section className="flex-container">
                <Cards
                image = {HomeImages.StarredProducts.Toilet}
                alt = "Toilet"
                title = "Toilet"
                />
                 <Cards
                image = {HomeImages.StarredProducts.HeadPhones}
                alt = "Head Phones"
                title = "Head Phones"
                />
                <Cards
                image = {HomeImages.StarredProducts.Sofa}
                alt = "Sofa"
                title = "Sofa"
                />
                </section>
            </article>
            <article id="newArrivals">
                <h1>New Arrivals</h1>
                <section className="flex-container">
                <Cards
                image = {HomeImages.NewArrivals.Scooter}
                alt = "Scooter"
                title = "Scooter"
                />
                 <Cards
                image = {HomeImages.NewArrivals.AirFryer}
                alt = "Air Fryer"
                title = "Air Fryer"
                />
                </section>
            </article>

            <article id="newArrivals2">    
                <section class="flex-container">
                <Cards
                image = {HomeImages.NewArrivals.HeadPhones}
                alt = "Head Phones"
                title = "Head Phones"
                />
                 <Cards
                image = {HomeImages.SpecialDiscounts.Wardrobes}
                alt = "Wardrobes"
                title = "Wardrobes"
                />
                   
                </section>
            </article>


        </main>

    );
};

export default Main;