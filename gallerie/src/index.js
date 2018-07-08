import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './layout';

import App from './App';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/About';
import Demo from './components/pages/Demo/Demo';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';

import './index.css';


ReactDOM.render(
  <Layout>
    <Router>
      <div className="main">
        <Route path="/" component={App}></Route>
        <Route path="/welcome" component={Home}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/demo" component={Demo}></Route>
        <Route path="/notFound" component={NotFound}></Route>
      </div>
    </Router>
  </Layout>,
  document.getElementById('root'));
registerServiceWorker();
