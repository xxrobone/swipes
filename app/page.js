import { Inter } from 'next/font/google';
import styles from './page.module.css';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Swipes</h1>
      <p>testing different swipes</p>
    </main>
  );
}
