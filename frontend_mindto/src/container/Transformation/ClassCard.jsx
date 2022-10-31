import React, { useState } from 'react';

import './ClassCard.scss';
import images from '../../constants/images';

const ClassCard = () => {

    const [flip, setFlip] = useState(false);

    return (
        <div className='card-class-container' onClick={() => setFlip(!flip)}>
            <div className='card'>
                <div className='coach'>
                    <p className='type-class'>Techniques de relaxation</p>
                    <img className='picture' src={images.coach_bis} alt='coach'></img>

                    <p className='with-coach'>WITH COACH</p>
                    <p className='separation'></p>
                    <p className='name'>olivia wilde</p>
                </div>
                <div className='logo_background'>
                    <p className='demi-background'></p>
                    <img className='logo' src={images.mindto_logo_card} alt='logo'></img>
                </div>
                <div className='bottom'>
                    <p className='date'>16 JULY</p>
                    <p className='places-left'>15 places left</p>
                </div>
            </div>
        </div>

    );
};

export default ClassCard;