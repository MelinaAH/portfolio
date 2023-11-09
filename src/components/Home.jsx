import React from 'react';
import picture from '../pics/home.png';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='home'>
                <div className='home-content'>
                    <h2 className='name'>Melina Aalto-Halme</h2>
                    <h1 className='header-light'>graphic designer</h1>
                    <h1 className='header-bold'>UX student</h1>
                    <p className='body-text'>
                        I'm a computing sciences student from Tampere, 
                        currently pursuing my Master's degree in 
                        Human-Technology Interaction. Throughout my 
                        academic journey, I've developed a keen interest in 
                        front-end web development and UX design. 
                        I'm passionate about both fields and aspire to work 
                        as a junior UX designer and front-end web developer.
                        <br></br>
                        <br></br>
                        My background as a graphic designer specializing
                        in print media gives me a great base for that job.
                    </p>
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

export default Home;
