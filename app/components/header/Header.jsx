'use client'
import Image from "next/legacy/image"
import Link from 'next/link'
import styles from '../header/Header.module.css'


export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <nav>
        <ul>
          <Link className={styles.navItem}  href="/Swipe">Swipe1</Link>
          <Link className={styles.navItem}  href="/Swipetwo">Swipe2</Link>
          <Link className={styles.navItem}  href="/Swipethree">Swipe3</Link>
         {/*  <Link href="/">Swipe4</Link>
          <Link href="/">Swipe5</Link> */}
        </ul>
    </nav>
    </div>
  )
}