import Image from 'next/legacy/image'
import Link from 'next/link'
import styles from '../footer/Footer.module.css'
import { RiUser3Fill } from 'react-icons/ri'
import { RiBookmarkFill } from 'react-icons/ri'
import jobFlowIcon from '/public/images/jobFlowIcon.svg'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.row}>
      <Link href='/Swipe'>
        <span className={styles.footerIcon1}>
            <Image src={jobFlowIcon} alt='project' width={31} />
          </span>
      </Link>
      </div>

      {/* <Link href='/Swipe'> */}
        <div className={styles.row}>
          <RiUser3Fill className={styles.footerIcon2} size={27}/>
        </div>
      {/* </Link> */}
      
      <Link href='/Savedpage'>
        <div className={styles.row}>
          <RiBookmarkFill className={styles.footerIcon2} size={27}/>
        </div>
      </Link>
    </div>
  )
}