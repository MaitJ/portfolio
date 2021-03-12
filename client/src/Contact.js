import React from 'react';
import './css/general.css';
import './css/contact.css';
const Contact = () => {

    return(
        <section className="contactForm">
            <label>Name:</label>
            <input type="text" required/>
            <label>Email:</label>
            <input type="email"/>
            <label>Comment or Message:</label>
            <input type="text"/>
        </section>
    );
}

export default Contact;