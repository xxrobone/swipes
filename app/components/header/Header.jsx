import Image from "next/legacy/image"
import Link from 'next/link'
import styles from '../header/Header.module.css'


export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <nav>
        <ul>
          <Link href="/swipe">Swipe1</Link>
          <Link href="/swipetwo">Swipe2</Link>
          <Link href="/">Swipe3</Link>
          <Link href="/">Swipe4</Link>
          <Link href="/">Swipe5</Link>
        </ul>
    </nav>
    </div>
  )
}