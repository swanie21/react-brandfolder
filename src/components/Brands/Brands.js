import React from 'react';
import Styles from './Brands.scss';

function Brands () {
  return (
    <div className={ Styles.brands }>
      <h4 className={ Styles.brands__title }>Strong brands live here.</h4>
      <div className={ Styles.brands__logos }>
        <img className={ Styles.brands__logo } src={'https://brandfolderwww.wpengine.com/wp-content/uploads/2016/05/unbounce-slack.png'} alt='Slack logo' />
        <img className={ Styles.brands__logo } src={'https://brandfolderwww.wpengine.com/wp-content/uploads/2016/05/under-armour.png'} alt='Under Armour logo' />
        <img className={ Styles.brands__logo } src={'https://brandfolderwww.wpengine.com/wp-content/uploads/2016/05/unbounce-opentable.png'} alt='OpenTable logo' />
        <img className={ Styles.brands__logo } src={'https://brandfolderwww.wpengine.com/wp-content/uploads/2016/05/loreal-326x200.gif'} alt='Loreal logo' />
        <img className={ Styles.brands__logo } src={'https://brandfolderwww.wpengine.com/wp-content/uploads/2016/05/shazam.png'} alt='Shazam logo' />
      </div>
    </div>
  );
}

export default Brands;
