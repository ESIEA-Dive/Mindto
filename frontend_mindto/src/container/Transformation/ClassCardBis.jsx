import React from 'react';

import './ClassCardBis.scss';
import images from '../../constants/images';

const ClassCardBis = () => {
    return (
        <div className='cardbis'>
            <div className='coachbis'>
                <p className='type-classbis'>Techniques de relaxation</p>
                <img className='picturebis' src={images.coach_bis} alt='coach'></img>

                <p className='with-coach'>WITH COACH</p>
                <p className='separationbis'></p>
                <p className='namebis'>olivia wilde</p>
            </div>
            <div className='logobis_background'>
                <p className='demi-background'></p>
                <img className='logobis' src={images.mindto_logo_card} alt='logobis'></img>
            </div>
            <div className='bottombis'>
                <p className='datebis'>16 JULY</p>
                <p className='places-left'>15 places left</p>
            </div>
        </div>
    );
};

export default ClassCardBis;