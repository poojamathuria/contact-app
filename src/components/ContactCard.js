import React from "react";
import { Link } from "react-router-dom";
import avatar from '../images/user.png';
const ContactCard = (props) => {

    const {id, name, email} = props.contact;

    return (
        <div className="item">
            <img className="ui avatar image" src={avatar} alt="user" />
            <div className="content">
                <Link to={`/contact/${id}`}>
                    <div className="header">
                        {name}
                    </div>
                    <div>{email}</div>
                </Link>
            </div>
            <i style={{color:"red", marginTop: "7px"}} className="trash alternate outline icon" onClick={() => props.clickHandler(id)}></i>
        </div>
    );
};

export default ContactCard;