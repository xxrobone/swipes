import React from 'react'
import { RiBookmarkLine, RiCloseLine } from 'react-icons/ri';
import { MdOutlineRefresh } from 'react-icons/md';

import styles from './SwipeButtons.module.css'

const SwipeButtons = () => {

    const Refresh = () => {
        console.log('to refresh jobs / cards');
      };
    
      const doSomething = () => {
        console.log('function to remove job from array goes here');
      };
    
      function handleSave() {
        console.log('Function for saving job to db or localstorage, cookie etc');
    }
    
  return (
    <div className={styles.iconsWrapper}>
    <div className={styles.iconWrapper}>
      <MdOutlineRefresh onClick={() => Refresh()} />
    </div>
    <div className={styles.iconWrapper}>
      <RiBookmarkLine onClick={() => handleSave()} />
    </div>
    <div className={styles.iconWrapper}>
      <RiCloseLine onClick={() => doSomething()} />
    </div>
  </div>
  )
}

export default SwipeButtons