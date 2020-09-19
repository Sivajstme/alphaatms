import React from "react";
import CardItem  from "./CardsItem";
import imag from "../../assets/images/img-9.jpg";
import "./Card.css";
import {CardData} from "./CardData";


function Cards() {
    console.log(CardData[0].src);
    const CardComponent = CardData.map((user,i) =>{
            return (
                <CardItem
                    key={i}
                    src={user.src}
                    text={user.text}
                    label={user.label}
                    path={user.path}
                />
            );



    })
    return(
        <div className="cards">
            <h1>Check out these EPIC Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">

                    <ul className="cards__items">
                        {
                        /* 
                        <CardItem
                            src={imag}
                        text= "Explore the hidden waterfall deep inside Amazon Jungle"
                        label = "Adventure"
                        path = "/services"
                        /> 
                        */
                        }
                    {CardComponent}
                        
                    </ul>
                </div>
            </div>
        
        
        </div>
    )
}

export default Cards;