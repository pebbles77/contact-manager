import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className='item'>
            <img className="ui avatar image" src={user} alt="user" style={{marginTop:"4px"}}/>
            <div className='ui content'style={{margin:"4px"}}>
                <div className='header'>{name}</div>
                <div>{email}</div>
            </div>
                <i className='trash alternate outline icon ui right floated'
                style={{color:"blue",marginTop:"10px"}} 
                onClick={() => props.clickhander(id)}></i>
        </div>
    );
};

export default ContactCard;