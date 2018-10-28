import React, {Component} from 'react';
import Utils from '../shared/services/util';

class Order extends Component {
    render() {
        const params = Utils.getQueryParamFromPath(this.props.location.search);
        console.log(params)
        return (<div className=''>{`this is order for product ${params.productId}`}</div>)
    }
}

export default Order;