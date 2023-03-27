import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { RiBookmarkLine, RiCloseLine, RiArrowRightLine } from 'react-icons/ri'
import {motion} from 'framer-motion'

// styles
import styles from './JobDetails.module.css'

const variants = {
    show: { opacity: 1, x: 0 },
    hide: { opacity: 0, x: 300 },
  }

const JobDetails = ({ employer, role, desc, quali, img, id }) => {   
    const [showMsg, setShowMsg] = useState(false)
    const [jobsLibrary, setJobsLibrary] = useState([])
    const router = useRouter()

    const saveJob = (id) => {
        let myjobs = JSON.parse(localStorage.getItem('myjobs') || "[]")
        let newJob;

          if (id) {
            newJob = {
              employer, role, desc, quali, img, id
            }
          } else {
            return
          }
    
        myjobs.push(newJob)
        
        window.localStorage.setItem('myjobs', JSON.stringify(myjobs))
    }
    
    function handleSave() {
        saveJob(id)
        setShowMsg(showMsg => !showMsg)
        console.log(showMsg)
        setTimeout(() => {
          setShowMsg(false)
        }, 3000)
    }

    /* checking jobs on localstorage */
    console.log('these are my jobs from library \n' + jobsLibrary.map((job) => console.log('\n ' + job.employer + job.role)))
    

    // getting the jobs from localstorage
    useEffect(() => {
        const myjobs = JSON.parse(localStorage.getItem('myjobs'));
        if (myjobs) {
          setJobsLibrary(myjobs);
        } else {
            setJobsLibrary([])
        }
    }, [])

  return (
      <article className={styles.jobsWrapper} key={id}>
          <div className={styles.iconsWrapper}>
              <RiBookmarkLine onClick={() => handleSave()}/>
              <RiCloseLine onClick={() => router.back()} />
          </div>
          <div className={styles.img}>
            <Image
                src={img}
                alt={employer}
                priority
            />                 
          </div>
          <div className={styles.info}>
            <h2>{employer}</h2>
        <h4>{role}</h4>
        <h3 className={styles.jobDesc}>Arbetsbeskrivning</h3>
            <p>{desc}</p>
        <p>{quali}</p>
        <h3 className={styles.jobDesc}>Lön</h3>
        <p>45.000</p>
        <h3 className={styles.jobDesc}>Anställningsform</h3>
        <p>Tillsvidareanställning</p>
          </div>
          <div>
        <motion.p
        variants={variants}
        animate={showMsg ? "show" : "hide"}
        >
          Saved job to library
        </motion.p>
      </div>
          </article>
  )
}

export default JobDetails