import React from 'react';
import {Link} from "react-router-dom";

function FooterItems({link1, link2, link3, link4, headerText,
                    tolink1, tolink2, tolink3, tolink4})
                    {

    return(
            <>
                <h2>{headerText}</h2>
                <Link to={tolink1}>{link1}</Link>
                <Link to={tolink2}>{link2}</Link>
                <Link to={tolink3}>{link3}</Link>
                <Link to={tolink4}>{link4}</Link>
            </>
        //    </div>



    )
}

function SingleFooter({toSingleLink, linkSingleText,classes}){

    return(
        <Link to={toSingleLink} className= {classes}>{linkSingleText}</Link>


    )

}

function SocialMediaLinks({ classes, target, to, label,logo }){

    return (
        <Link 
            className ={classes}
            target = {target}
            to = {to}
            aria-label = {label}
        >{logo}
        </Link>



    )


}

export { FooterItems, SingleFooter, SocialMediaLinks};