import React from 'react';
import Styles from './Hero.scss';
import Button from '../../components/Button/Button';

function Hero () {
  return (
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
  );
}

export default Hero;
