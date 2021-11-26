import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer';
import Headline from './components/headline';
import Navbar from './components/navbar';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Headline />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
