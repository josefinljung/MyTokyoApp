import React from 'react';
import {Switch, Route } from 'react-router-dom';

import './Main.scss';
import About from '../src/components/About/About';
import Article from '../src/components/Article/Article';
import Inspiration from '../src/components/Inspiration/Inspiration'
import LandingPage from '../src/components/Landingpage/Landingpage'

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/inspiration" component={Inspiration} />
        <Route path="*" component={LandingPage} />
        <Route path="/" exact component={LandingPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
