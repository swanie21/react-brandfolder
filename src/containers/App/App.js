import React from 'react';
import Styles from './App.scss';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Brands from '../../components/Brands/Brands';

function App () {
  return (
    <div>
      <Header />
      <Hero />
      <Brands />
      <div className={ Styles.content }></div>
    </div>
  );
}

export default App;
