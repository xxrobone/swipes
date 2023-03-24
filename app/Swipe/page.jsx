"use client"
import React from 'react'
import Swiper from '../components/swiper/Swiper'
import { Jobs } from '../../data/jobsArray'
import styles from './swipe.module.css'
import Footer from '/app/components/footer/Footer.jsx'
import Header from '/app/components/header/Header.jsx'

export default function Swipe () {
  return (
      <div className={styles.swipe_wrapper}>
          <Header />
          <Swiper data={Jobs}  />
          <Footer />
    </div>
  )
}
