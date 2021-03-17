import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* Components */
import App from './Components/App/App';
import OffersDeals from './Components/Offers/OffersDeals';

/* React-Router */
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

/* Components */
import ShoeBrands from './Components/Offers/ShoeBrands';
import Adidas from './Components/Brands/ShoeBrands/Adidas';
import Nike from './Components/Brands/ShoeBrands/Nike';
import Puma from './Components/Brands/ShoeBrands/Puma';
import FragranceBrands from './Components/Offers/FragrancesBrands';
import JeanPaul from './Components/Brands/FragranceBrands/JeanPaulGaultier';
import Versace from './Components/Brands/FragranceBrands/Versace';
import Prada from './Components/Brands/FragranceBrands/Prada';
import CapBrands from './Components/Offers/CapsBrands';
import Monster from './Components/Brands/CapBrands/Monster'
import RedBull from './Components/Brands/CapBrands/RedBull';
import Tmt from './Components/Brands/CapBrands/Tmt';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/offers" component={OffersDeals} />

        {/* Shoe routes */}
        <Route exact path="/offers/shoes" component={ShoeBrands} />
        <Route path="/adidas" component={Adidas} />
        <Route path="/nike" component={Nike} />
        <Route path="/puma" component={Puma} />

        {/* fragrances routes */}
        <Route path="/offers/fragrances" component={FragranceBrands} />
        <Route path="/jean-paul-gaultier" component={JeanPaul} />
        <Route path="/versace" component={Versace} />
        <Route path="/prada" component={Prada} />

        {/* Cap routes */}
        <Route path="/offers/caps" component={CapBrands} />
        <Route path="/monster" component={Monster} />
        <Route path="/red-bull" component={RedBull} />
        <Route path="/tmt" component={Tmt} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

