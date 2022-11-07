import React, { Component } from 'react';
import images from '../../constants/images';

import './ClassCard.scss';

class ClassCard extends Component {
    render() { 
        return (
            <div className='card-class-container'>
                <div className='card'>
                    <div className='coach'>
                        <p className={`type-class ${this.props.type}`}>{this.props.category}</p>
                        <img className='picture' src={this.props.image} alt='coach'></img>
                        <p className='pillar'>{this.props.pillar}</p>
                        <p className='separation'></p>
                        <p className='name'>{this.props.coach_name}</p>
                    </div>
                    <div className={`logo_background ${this.props.type}`}>
                        <img className={`logo ${this.props.type}`} src={images.mindto_logo_card} alt='logo'></img>
                    </div>
                    <div className={`bottom ${this.props.type}`}>
                        <div className='center-column'>
                            <p className='principal-info'>{this.props.date}</p>
                            <p className='secondary-info'>{this.props.hour}</p>
                        </div>
                        <div className='center-column'>
                            <p className='principal-info'>{this.props.places_left}</p>
                            <p className='secondary-info'>places left</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassCard;