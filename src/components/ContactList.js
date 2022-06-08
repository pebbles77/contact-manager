import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
       
    const renderContactList = props.contacts.map((contact) => {
        return (<ContactCard contact={contact} clickhandler={deleteContactHandler} key={contact.id}/>);
    });

  return (
    <div className='ui main'>
        <div className='ui celled list'>
         <h2 className='ui teal message'>Contact List</h2>
        {renderContactList}</div>
    </div>
  )
}

export default ContactList;