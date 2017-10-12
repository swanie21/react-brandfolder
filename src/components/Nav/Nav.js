import React from 'react';
import Styles from './Nav.scss';
import Button from '../Button/Button';

function Nav () {
  return (
    <nav className={ Styles.menu }>
      <div className={ Styles.menu__desktop }>
        <ul className={ Styles.menu__desktop_list }>
          <li className={ Styles.menu__desktop_list_item }>Product</li>
          <li className={ Styles.menu__desktop_list_item }>Industries</li>
          <li className={ Styles.menu__desktop_list_item }>Resources</li>
          <li className={ Styles.menu__desktop_list_item }>Pricing</li>
          <li className={ Styles.menu__desktop_list_item }>Blog</li>
        </ul>
        <Button
          color={ 'white' }
          label={ 'Sign In' }
        />
      </div>
      <div className={ Styles.menu__mobile }>
        <input className={ Styles.menu__mobile_input } id='hamburger-menu' type='checkbox' value='true' />
        <label className={ Styles.menu__mobile_label } htmlFor='hamburger-menu' value='true'>menu</label>
        <span className={ Styles.menu__mobile_span }></span>
        <span className={ Styles.menu__mobile_span }></span>
        <span className={ Styles.menu__mobile_span }></span>
        <ul className={ Styles.menu__mobile_list }>
          <li className={ Styles.menu__mobile_list_item }>Product</li>
          <li className={ Styles.menu__mobile_list_item }>Industries</li>
          <li className={ Styles.menu__mobile_list_item }>Resources</li>
          <li className={ Styles.menu__mobile_list_item }>Pricing</li>
          <li className={ Styles.menu__mobile_list_item }>Blog</li>
          <Button
            color={ 'white' }
            label={ 'Sign In' }
          />
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
