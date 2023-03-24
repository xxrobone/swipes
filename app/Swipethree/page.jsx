"use client"
import React from 'react'
import { Jobs } from '../../data/jobsArray'
import styles from './swipe.module.css'
import Swiper3 from '../components/swiper3/Swiper3'


const OPTIONS = { axis: 'y' };

export default function Swipethree () {
  return (
    <div className={styles.swipe_wrapper}>
      <h1>Swiper 3</h1>
          <Swiper3 options={OPTIONS} data={Jobs}/>
    </div>
  )
}
