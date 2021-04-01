import React from 'react';
import './css/general.css';
import './css/contact.css';
const Contact = () => {

    return(
        <section className='contact'>
            <section className='heading'>
                <h1>Contact Me</h1>
            </section>
            <section className="contactForm">
                <label>Name</label>
                <input type="text" id='firstname' name='firstname' placeholder='Name...' required/>
                <label>Email</label>
                <input type="email" id='email' name='email' placeholder='E-mail...'/>
                <label>Subject</label>
                <input type="text" id='subject' name='subject' placeholder='Some text...'/>
                <button type='button' id='button' value='Submit'>Send</button>
            </section>
        </section>
    );
}

export default Contact;