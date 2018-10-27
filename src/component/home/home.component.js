import React, { Component } from 'react';
import AdsSlider from '../ads-slider/ads-slider.component';
import ProductSlider from '../product-slider/product-slider.component';
import HowTo from '../how-to/how-to.component';
import Footer from '../footer/footer.component';

class Home extends Component {
  render() {
    return (
        <div>
            <AdsSlider />
            <ProductSlider />
            <HowTo />
            <Footer />
        </div>
    );
  }
}

export default Home;
