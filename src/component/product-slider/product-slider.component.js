import React, { Component } from 'react';
import Slider from 'react-slick';
import Utils from '../shared/services/util';
import Product from '../shared/services/product';
import './product-slider.style.scss';
import { Link } from "react-router-dom";
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
            slidesPerRow: 4
        };
        const products = Product.getProducts();
        return (
            <div className={''}>
                <div className={'wrapper'}>
                    <div className={'header'}>ผลิตภัณฑ์ของราชาการพิมพ์</div>
                    <Slider {...settings}>
                        {products.map((value,key) => {
                            return <div className={'product-slide'}><Link to={'/order?productId='+(key + 1)}>{this.renderImg(key + 1)}</Link></div>;
                        })}
                    </Slider>
                </div>
            </div>
        );
    }
}

export default ProductSlider;
