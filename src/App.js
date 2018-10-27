import React, { Component } from 'react';
import './App.css';
import 'bulma';
import './Lib.scss';
import Navbar from './component/navbar/navbar.component';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ContactUs from './component/contact-us/contact-us.component';
import Catalog from './component/catalog/catalog.component';
import Home from './component/home/home.component';
import Footer from './component/footer/footer.component';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/catalog" component={Catalog} />
          <Route exact path="/contact" component={ContactUs} />
          <Footer />
        </div>
      </Router>
      
    );
  }
}

export default App;
