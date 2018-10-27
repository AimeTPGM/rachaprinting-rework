import React, { Component } from 'react';
import './App.css';
import 'bulma';
import Navbar from './component/navbar/navbar.component';
import AdsSlider from './component/ads-slider/ads-slider.component';
import ProductSlider from './component/product-slider/product-slider.component';
import HowTo from './component/how-to/how-to.component';
import Footer from './component/footer/footer.component';
import './Lib.scss';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AdsSlider />
        <ProductSlider />
        <HowTo />
        <Footer />
      </div>
    );
  }
}

export default App;
