import React from 'react';
import "./Button.css";
import { Link } from "react-router-dom";

const style = ["btn--primary","btn--outline"];
const sizes = ["btn--medium","btn--large"];



 const Button = ({children,type,onClick,buttonSize,buttonStyle}) => {
    
    const checkButtonStyle = style.includes(buttonStyle) ? buttonStyle : style[0];
    const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : style[0];


    return(
        
        <Link to="/sign-up" className='btn-mobile'>
            <button className={`btn ${checkButtonSize} ${checkButtonStyle}`}
                    onClick={onClick}
                    type = {type}
            >
            {children}
            </button>
        
        </Link>

    );
};

export default Button;