import React from 'react';
import picture from '../pics/aboutMe.png';
import './Aboutme.css';

const Aboutme = () => {
    return (
        <div>
            <div className='aboutme-information'>
                <h1 className='title'>About Me</h1>
                <p className='body-text'>
                    Hi there, I'm Melina Aalto-Halme. A tech enthusiast with a passion 
                    for both front-end web development and UX design. I embarked on 
                    my journey into the world of computing sciences at 
                    Tampere University in 2020.
                    <br></br>
                    <br></br>
                    My toolkit includes React, JavaScript, HTML5, CSS, HTI, and 
                    a strong focus on accessibility. I'm no stranger to Node.js, 
                    Python, C++, C and Java either. What drives me is the desire 
                    to create solutions that not only meet client requirements but 
                    also ensure a user-friendly experience.
                    <br></br>
                    <br></br>
                    Before diving into the tech world, I honed my design skills 
                    as a graphic designer, specialising in print media. 
                    Over the years, I've collaborated with advertising agencies 
                    and publishing companies, working on diverse projects, 
                    from logo design to magazine layouts and eye-catching 
                    outdoor advertisements. Providing top-notch customer service 
                    is ingrained in my professional DNA.
                    <br></br>
                    <br></br>
                    My proficiency extends to Adobe Creative Cloud tools 
                    like Photoshop, InDesign, Illustrator and XD, and 
                    Figma enabling me to bring creativity to life.
                    <br></br>
                    <br></br>
                    What's unique about me? Over the past few years, 
                    I've thrived in a remote work environment, harnessing 
                    my social skills and self-discipline to excel. 
                    Remote work isn't a necessity; but it's become my strength. 
                    At the same time, I value teamwork and am a strong advocate 
                    for effective collaboration.
                    <br></br>
                    <br></br>
                    My strengths include being an efficient problem solver, 
                    proactive, enthusiastic, eager to learn, and upholding 
                    a strong work ethic. I'm ready to embark on new challenges 
                    and explore the endless possibilities at the intersection 
                    of design and technology. If you're seeking a dynamic 
                    addition to your team who can bridge the worlds of design 
                    and development, I'd love to connect.
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
