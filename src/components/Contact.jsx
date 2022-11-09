import React, { useState } from 'react';
import emailjs from 'emailjs-com'
import picture from '../pics/home.png';
import './Contact.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import Button from "@material-ui/core/Button";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    // const [isEmailValid, setIsEmailValid] = useState(true);

    /*const checkEmail = email => {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(String(email).toLowerCase())) {
            return regex.test(String(email).toLowerCase());
        }
        else {
            setIsEmailValid(false);
            console.log('tulee tähän');
            alert('Invalid Email address')
        }
    };*/

    const submit = (e) => {
        e.preventDefault();

        if (name && email && message) {
            const serviceId = 'service_4p04fot';
            const templateId = 'template_iqox3ui';
            const userId = 'spUFpj2gdNr1NoAcf';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(res => console.log(res))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        }
        else {
            alert('Please fill in all the required fields.')
        }
    };

    return (
        <div>
            <div className='contact'>
                <div>
                    <h1 className='title'>Contact</h1>
                    <p className='body-text'>
                        Melina Aalto-Halme <br></br>
                        Tampere<br></br>
                        Tel. +358 40 595 6880<br></br>
                        <Link href='https://www.linkedin.com/in/melina-aalto-halme' target='_blank'>
                            <LinkedInIcon className='icons' />
                        </Link>
                        <Link href='https://github.com/MelinaAH/portfolio.git' target='_blank'>
                            <GitHubIcon className='icons' />
                        </Link>
                    </p>
                </div>
                <div className='contact-form'>
                    <label>Name</label><br></br>
                    <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required /><br></br>
                    <label>Email <address></address></label>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required /><br></br>
                    <label>Message <address></address></label>
                    <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} required /><br></br>
                    <Button  onClick={submit} className='send-button'>Send</Button>
                    <span className={emailSent ? 'visible' : null}>The message has been sent.</span>
                </div>
            </div>

            <div className='background-image'
                style={{
                    backgroundImage: `url(${picture})`,
                    backgroundPosition: 'left bottom',
                    backgroundAttachment: 'fixed',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    width: '100vw',
                    height: '100vh'
                }}>
            </div>
        </div>

    )
}

export default Contact;
