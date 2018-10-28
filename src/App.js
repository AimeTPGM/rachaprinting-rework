import React, { Component } from 'react';
import './App.css';
import 'bulma';
import './Lib.scss';
import Navbar from './component/navbar/navbar.component';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ContactUs from './component/contact-us/contact-us.component';
import Catalog from './component/catalog/catalog.component';
import Home from './component/home/home.component';
import Footer from './component/footer/footer.component';
import FAQ from './component/faq/faq.component';
import firebase from 'firebase';
import Order from './component/order/order.component';
import HowTo from './component/how-to/how-to.component';
import PaymentMethodInfo from './component/payment-method/payment-method.component';

class App extends Component {
  constructor(props){
    super(props);
    const config = {
      apiKey: "AIzaSyCflHCFwLBEL6__WGHLqVTDwLWyEmSl_ac",
      authDomain: "rachaprinting-ad05f.firebaseapp.com",
      databaseURL: "https://rachaprinting-ad05f.firebaseio.com",
      projectId: "rachaprinting-ad05f",
      storageBucket: "rachaprinting-ad05f.appspot.com",
      messagingSenderId: "137695178498"
    };
    firebase.initializeApp(config);
  }
  
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/faq" component={FAQ} />
          <Route path="/order" component={Order} />
          <Route path="/howto" component={HowTo} />
          <Route path="/paymentmethod" component={PaymentMethodInfo} />
          <Footer />
        </div>
      </Router>
      
    );
  }
}

export default App;
