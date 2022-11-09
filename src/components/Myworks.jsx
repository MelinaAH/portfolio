import React, { useState } from 'react';
import Data from './Data';
import './Myworks.css';
import CloseIcon from '@material-ui/icons/Close';

const Myworks = () => {
    const { works } = Data;
    const [model, setModel] = useState(false);
    const [tempImg, setTempImg] = useState('');

    const getImg = (image) => {
        setTempImg(image);
        setModel(true);
    }

    return (
        <div className='gallery'>
            <div className='myworks-information'>
                <h1 className='title'>My works</h1>
                <p className='body-text'>
                    Here are some of the works I have done over the years.
                </p>
            </div>
            <div className={model ? "model open" : "model"}>
                <img src={tempImg} alt='Some of the works' />
                <CloseIcon className='close-button' onClick={() => setModel(false)} />
            </div>
            <div className="myworks">
                {works.map((work) => (
                    <div key={work.id} className="card" onClick={() => getImg(work.image)}>
                        <div>
                            <img
                                className="image"
                                src={work.image}
                                alt={work.description}
                            />
                        </div>
                        <div className='description'>
                            {work.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Myworks;
