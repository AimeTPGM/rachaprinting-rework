import React, { Component } from 'react';
import Slider from 'react-slick';
import './ads-slider.style.scss'

class AdsSlider extends Component {
    
    render () {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (<div className={'ads-wrapper'}>
            <Slider {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
            </Slider>
        </div>);
    }
}

export default AdsSlider;