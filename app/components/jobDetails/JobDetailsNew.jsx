import React from 'react'
import Image from 'next/image'

// styles
import styles from './JobDetails.module.css'

const JobDetailsNew = ({employer, role, desc, quali, img, id}) => {
  return (
      <article className={styles.jobs_wrapper} key={id}>
          <div className={styles.img}>
            <Image
                src={img}
                alt={employer}
                  priority
                  fill
            />                 
          </div>
          <div className={styles.info}>
            <h2>{employer}</h2>
            <h4>{role}</h4>
            <p>{desc}</p>
            <p>{quali}</p>
            </div>
          </article>
  )
}

export default JobDetailsNew