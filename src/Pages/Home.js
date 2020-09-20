import React from 'react';
import "../App.css";
import MainSection from "../Components/MainPage/MainPage";
import Cards from "../Components/Card/Card";
import Footer  from "../Components/Footer/Footer";



function Home(){
    
    return(
        <>
            <MainSection />
            <Cards />
            <Footer />
        </>


    )
}

export default Home;