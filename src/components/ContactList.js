import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
     
    const renderContactList = props.contacts.map((contact) => {
        return (
        <ContactCard 
        contact={contact} 
        clickhander={deleteContactHandler} 
        key={contact.id}
        />);
    });

  return (
    <div className='ui main' style={{margin:"10px", paddingTop:"70px"}}>
        <div className='ui celled list'>
         <h2 style={{color:"teal"}}>Contact List
         <Link to="/add">
         <button className='ui button teal right floated'>Add Contact</button>
         </Link>
         </h2>
        {renderContactList}</div>
    </div>
  )
}

export default ContactList;