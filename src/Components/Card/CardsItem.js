import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

function CardItem() {

    return (
        <>
            <li className="cards_item">
                <Link className="cards__item__link">
                    <figure className="cards__item__pic-wrap">
                        <img src="/" alt="Travel Image"
                            className="cards_item_img" />
                    </figure>
                    <div className="cards__item__img">
                        <h5 className="cards__item__text" />
                    </div>
                </Link>
            </li>
        </>
    )


}
export default CardItem;