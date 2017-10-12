import React from 'react';
import Styles from './App.scss';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Brands from '../../components/Brands/Brands';

function App () {
  return (
    <div>
      <Header />
      <div className={ Styles['hero'] }>
        <div className={ Styles['hero__content'] }>
          <h1 className={ Styles['hero__content-title'] }>Powerfully Simple</h1>
          <h1 className={ Styles['hero__content-title'] }>Digital Asset Management</h1>
          <h3 className={ Styles['hero__content-sub-title'] }>A protected, consistent, and strikingly visual home for your brand.</h3>
          <Button
            color={ 'blue' }
            label={ 'Try Brandfolder' }
          />
        </div>
      </div>
      <Brands />
      <div className={ Styles.content }></div>
    </div>
  );
}

export default App;
