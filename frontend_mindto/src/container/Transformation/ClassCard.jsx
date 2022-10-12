import React from 'react';

import './ClassCard.scss';
import images from '../../constants/images';
import { BsStar, BsBookmarkCheck } from "react-icons/bs";
import { BiFootball } from "react-icons/bi";
import { MdSportsTennis } from "react-icons/md";

const ClassCard = () => {
    return (
        <div className='card'>
            <div className='coach'>
                <img className='picture' src={images.coach} alt='coach'></img>
                <p className='date'>
                    Mon.
                    <br></br>
                    <span className='day'>17</span>
                    <br></br>
                    Oct.
                </p>
                <p className='name'>M. Parker</p>
            </div>
            <div className='description'>
                <div className='big-line'>
                    <div className='line'>
                        <BsStar className='icon' />
                        <p className='notation'>4.7</p>
                    </div>

                    <div className='line'>
                        <div className='column'>
                            <p className='title'>Price</p>
                            <p className='cont'>10 $</p>
                        </div>
                        <div className='column'>
                            <p className='title'>Target</p>
                            <div className='gender'>
                                <BiFootball className='icon man' />
                                <MdSportsTennis className='icon woman' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='line'>
                    <img className='pillar-picture' src={images.physical} alt='coach'></img>
                    <p className='pillar-text'>Physical</p>
                </div>
                <p className='course-name'>Title of the class</p>
                <p className='course-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='line margin-30top'>
                    <div className='column align-right'>
                        <p className='title'>Max.</p>
                        <p className='cont light'>15 p.</p>
                    </div>
                    <div className='column'>
                        <p className='title'>Timing</p>
                        <p className='cont light'>45 min.</p>
                    </div>
                </div>
                <div className='big-line'>
                    <div className='line'>
                        <BsBookmarkCheck className='icon icon-click margin-30top' />
                    </div>
                    <div className='line'>
                        <div className='align-right'>
                            <button className="btn-join">Join</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClassCard;