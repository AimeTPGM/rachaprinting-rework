import React, { Component } from 'react';
import Slider from 'react-slick';
import Utils from '../shared/services/util';
class ProductSlider extends Component {
    renderImg(id) {
        return (<img src={Utils.getProductImg('img' + id)}></img>);
    }
    render () {
        const settings = {
            dots: true,
            centerMode: true,
            centerPadding: "60px",
            slidesToShow: 1,
            speed: 500,
            rows: 2,
            slidesPerRow: 2
        };
        const products = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}, {}, {}, {}, {}, {}, {}]
        return (
            <div className={'white-bg'}>
                <div className={'wrapper'}>
                    <Slider {...settings}>
                        {products.map((value,key) => {
                            return <div>{this.renderImg(key+1)}</div>;
                        })}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default ProductSlider;