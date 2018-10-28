import React, { Component } from 'react';
import Slider from 'react-slick';
import './ads-slider.style.scss'
import Utils from '../shared/services/util';

class AdsSlider extends Component {
    renderImg(id) {
        return (<img src={Utils.getLeaderboardBannerImg('leaderBoard' + id)}></img>);
    }
    render () {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const leaderBoards = [ {}, {}, {}, {}, {}]
        return (<div className={'ads-wrapper'}>
            <Slider {...settings}>
                {leaderBoards.map((value,key) => {
                   return <div>{this.renderImg(key+1)}</div>;
                })}
                
            </Slider>
        </div>);
    }
}

export default AdsSlider;