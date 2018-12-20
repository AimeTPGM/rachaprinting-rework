import React, { Component } from 'react';
import Product from '../shared/services/product';
import Utils from '../shared/services/util';
import './catalog.style.scss';
import { Link } from "react-router-dom";
class Catalog extends Component {
    renderImg(id) {
        return (<img src={Utils.getProductImg('img' + id)}></img>);
    }

    render () {
        const products = Product.getProducts();
        return (<div className={'wrapper'}>
            <div className={'header'}>{'สินค้าทั้งหมด'}</div>
            <div className={'catalog-wrapper'}>
                {products.map((product, key) => {
                    return (<div className={'catalog-item'}><Link to={`/order?productId=${key + 1}`}>{this.renderImg(key + 1)}</Link></div>);
                })}
            </div>
        </div>)
    }
}

export default Catalog;
