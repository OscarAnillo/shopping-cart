import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* Components */
import App from './Components/App/App';
import OffersDeals from './Components/Offers/OffersDeals';

/* React-Router */
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ShoeBrands from './Components/Offers/ShoeBrands';
import Adidas from './Components/Brands/ShoeBrands/Adidas';
import Nike from './Components/Brands/ShoeBrands/Nike';
import Puma from './Components/Brands/ShoeBrands/Puma';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/offers" component={OffersDeals} />
        <Route exact path="/offers/shoes" component={ShoeBrands} />
        <Route path="/adidas" component={Adidas} />
        <Route path="/nike" component={Nike} />
        <Route path="/puma" component={Puma} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

