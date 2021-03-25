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
        <form onSubmit={handleSubmit}>
            <section className='contact'>
                { msgStatus ? <div className='contact-message'><h2>{contactMessage}</h2></div> : null}
                <section className='heading'>
                    <h1>Contact Me</h1>
                </section>
                <section className="contactForm">
                    <label>Name</label>
                    <input type="text" id='name' name='name' placeholder='Name...' required/>
                    <label>Email</label>
                    <input type="email" id='email' name='email' placeholder='E-mail...' required/>
                    <label>Message</label>
                    <input type="text" id='message' name='message' placeholder='Some text...' required/>
                    <button type='submit' id='button' value='Submit'>{status}</button>
                </section>
                
            </section>
        </form>
    );
}

export default Contact;