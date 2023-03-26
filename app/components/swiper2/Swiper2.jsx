'use client'
import Image from "next/image"
import dynamic from "next/dynamic"
import styles from './Swiper2.module.css'

const Swiper2 = ({ employer, role, img, id }) => {

    const TinderCard = dynamic(() => import('react-tinder-card'), {
        ssr: false
      });

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
      }

      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }

    return (
        <TinderCard
            className={styles.swiper}
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen('this id')}
            
        >
            <div className={styles.swiperImage} >
                <Image
                    className={styles.img}
                    src={img}
                    alt={role}
                    priority
                    fill
                />
            </div>
                    <div className={styles.info}>
                            <h2 className={styles.employer}>{employer}</h2>
                            <h4 className={styles.role}>{role}</h4>
                        
                    </div>
            
        </TinderCard>
    )
}

export default Swiper2