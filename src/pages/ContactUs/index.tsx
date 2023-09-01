import Typography from "@mui/material/Typography";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import "./contact.css";
import TextField from '@mui/material/TextField';
import { CustomButton } from "../../Components/Button/button";
import { db } from "../../firebase";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";


function ContactUs() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'contactUs'),
        {
          name: name,
          email: email,
          message: message
        });
     
        alert('Message has been submitted');

      setName(' ');
      setEmail(' ');
      setMessage(' ');
    } catch (error) {
      alert('Error sending message. Please try again later.');
    }
  };

  return (
    <section>
      <Typography variant="h1">Contact Us</Typography>
      <div className="page-container">
        <div className="container-info">
          <div className="info-text">
            <Typography variant="h2" className="text-h2">Contact Information</Typography>
            <p className="p-text">Fill up the form and our team will get back to you within 24 hours</p>
          </div>
          <div className="info-about">
            <a href="tel:+37499999999">
              <PhoneIcon className="icons" />
              <p>+37499999999</p>
            </a>

            <a href="mailto:toyland@gmail.com">
              <EmailIcon className="icons" />
              <p>toyland@gmail.com</p>
            </a>
          </div>

          <div>
            <div className="bigcircle"></div>
            <div className="smallcircle"></div>
          </div>
        </div>
        <div className="container-inputs" onSubmit={handleSubmit}>
          <div className="container-form">
          <TextField
            id="name"
            label="Name"
            variant="standard"
            className='textfield'
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <TextField
            id="email"
            label="Email"
            variant="standard"
            className='textfield'
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          <TextField
            id="message"
            label="Message"
            variant="standard"
            className='textfield'
            margin="normal"
            value={message}
            onChange={(e) => setMessage(e.target.value)} />

          <button className="submit-btn" onClick={handleSubmit} >Send</button>
        </div>
        </div>
      </div>
    </section>)
}

export default ContactUs; 