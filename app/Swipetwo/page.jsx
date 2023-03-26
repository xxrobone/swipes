"use client"
import React from 'react'
import styles from './swipe.module.css'
import { Jobs } from '@/data/jobsArray'
import Swiper2 from '../components/swiper2/Swiper2'

export default function Swipetwo () {
  return (
      <div className={styles.swiperWrapper}>
          {Jobs.map(job => <Swiper2 key={job.id} {...job} />)}
    </div>
  )
}
