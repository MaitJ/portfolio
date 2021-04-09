import React, {useState} from 'react';
import './css/general.css';
import './css/contact.css';
const Contact = () => {
    const [status, setStatus] = useState("Submit");
    const [msgStatus, setMsgStatus] = useState(false);
    const [contactMessage, setContactMessage] = useState('Something went wrong');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const {name, email, message} = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:3001/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
      });
      setStatus("Submit");
      let result = await response.json();
      console.log(result.status);
      if(result.status == "Message Sent") {
        setContactMessage('Kiri saadetud!');
        setMsgStatus(true);
      };
    };

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