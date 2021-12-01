import React from 'react';
import ReactDOM from 'react-dom';
import Features from './components/features';
import Footer from './components/footer';
import Jumbotron from './components/jumbotron';
import Navbar from './components/navbar';
import './styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Jumbotron />
    <Features />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
