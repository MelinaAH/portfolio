import React from 'react';
import picture from '../pics/aboutMe.png';
import './Aboutme.css';

const Aboutme = () => {
    return (
        <div>
            <div className='aboutme-information'>
                <h1 className='title'>About Me</h1>
                <p className='body-text'>
                    I’m Melina Aalto-Halme, a student of computing sciences from Tampere.
                    I started my studies because I would like to work as a front-end web developer
                    and UI/UX designer. I have studied at Tampere University since the autumn of 2020.
                    I know about React, JavaScript, HTML5, CSS, HTI and accessibility. Also, I have
                    some knowledge of Node.js, Python, C++ and C. For me, it is important to offer
                    solutions that both customers and users are satisfied with.
                    <br></br>
                    <br></br>
                    From my background, I am a graphic designer specializing in print media. 
                    I have worked for many years in advertising agencies and publishing companies. 
                    During my studies, I still have done some design work as a light entrepreneur. 
                    I master a wide range of print advertising tasks in the field. I have experience 
                    in logo design to the layout of magazines and books and the implementation of 
                    outdoor advertising. Like designing and implementing ads, customer service 
                    has been a big part of my job. I am familiar with the Adobe programs such as 
                    Photoshop, InDesign and Illustrator.
                    <br></br>
                    <br></br>
                    Past two years I have studied and worked remotely. Despite my good social skills, 
                    remote work suits me well. I am more effective when working at home.
                </p>
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

export default Aboutme;
