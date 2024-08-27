import React from "react";
import '../styles/sales.css';
import Cards from "./Cards";
import HomeImages from '../images/HomeImages';
import SalesImages from "../images/SalesImages";





const MainSales = () => {

    return (
       
            <main id="sales">
                <article id="hottestDeals">
                    <h1>Hottest Deals of the week</h1>
                    <p>The Market place offers a wide variety of weekly deals to help you get the most bang for your
                        buck.
                        Our weekly tech deals offer unbeatable prices on a wide variety of products!
                        And because we are The Market place you know that our weekly deals also include big brands.
                        Big brands mean top technology, top quality products and reliability.</p>
                </article>
                <article id="saleProducts">
                    <section className="cards">
                        <Cards
                            image={SalesImages.KingBed}
                            alt="King Bed"
                            title="King Bed"
                            price={1500}
                        />
                        <Cards
                            image={SalesImages.Fridge}
                            alt="Fridge"
                            title="Fridge"
                            price={3000}
                        />
                        <Cards
                            image={SalesImages.Vacumm}
                            alt="Vacumm"
                            title="Vacumm"
                            price={150}
                        />
                        <Cards
                            image={SalesImages.Washing}
                            alt="Washing Machine"
                            title="Washing Machine"
                            price={500}
                        />
                    </section>
                </article>

                <article id="saleProducts2">
                    <section className="cards">
                        <Cards
                            image={HomeImages.NewArrivals.Scooter}
                            alt="Scooter"
                            title="Scooter"
                            price={980}
                        />
                        <Cards
                            image={HomeImages.StarredProducts.HeadPhones}
                            alt="Head Phones"
                            title="Head Phones"
                            price={3000}
                        />
                        <Cards
                            image={HomeImages.SpecialDiscounts.Tv}
                            alt="Tv"
                            title="Tv"
                            price={65}
                        />
                        <Cards
                            image={HomeImages.SpecialDiscounts.Laptop}
                            alt="Laptop"
                            title="Laptop"
                            price={180}
                        />
                    </section>
                </article>
            </main>
     
    );
};

export default MainSales;