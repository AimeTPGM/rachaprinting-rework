import React, { Component } from 'react';
import Slider from 'react-slick';

class ProductSlider extends Component {
    render () {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            autoplay: true,
            speed: 7000,
            autoplaySpeed:  0,
            cssEase: "linear"
        };
        const products = [{}, {}, {}, {}, {}, {}, {}, {}, {}]
        return (<div className={'wrapper'}>
            <Slider {...settings}>
                {products.map((value,key) => {
                    return <div><h3>{key}</h3></div>;
                })}
            </Slider>
        </div>);
    }
}

export default ProductSlider;