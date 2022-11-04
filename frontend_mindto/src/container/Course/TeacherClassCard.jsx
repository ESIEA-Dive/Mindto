import React, { Component } from 'react';

import './ClassCard.scss';
import images from '../../constants/images';

class ClassCard extends Component {
    render() {
        return (
            <div className='card-class-container'>
                <div className='card'>
                    <div className='coach'>
                        <p className='type-class teacher'>{this.props.title}</p>
                        <img className='picture' src={this.props.image} alt='coach'></img>
                        <p className='with-coach'>with TEACHER</p>
                        <p className='separation'></p>
                        <p className='name'>{this.props.coach_name}</p>
                    </div>
                    <div className='logo_background'>
                        <p className='demi-background'></p>
                        <img className='logo teacher' src={images.mindto_logo_card_teacher} alt='logo'></img>
                    </div>
                    <div className='bottom'>
                        <p className='date'>{this.props.date}</p>
                        <p className='places-left teacher'>{this.props.places_left} places left</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default ClassCard;