"use client"
import React from 'react'
import styles from './swipe.module.css'
import { Jobs } from '@/data/jobsArray'
import Swiper2 from '../components/swiper2/Swiper2'

export default function Swipetwo() {
  const isBrowser = () => typeof window !== "undefined"

// node
isBrowser() // false

// browser
isBrowser() // true

  return (
      <div className={styles.swiperWrapper}>
          {Jobs.map(job => <Swiper2 key={job.id} {...job} />)}
    </div>
  )
}
