'use client'
import Image from "next/image"
import dynamic from "next/dynamic"
import styles from './Swiper2.module.css'
import Link from "next/link"

const Swiper2 = ({ data }) => {
    

    const TinderCard = dynamic(() => import('react-tinder-card'), {
        ssr: false
    });
    
    const saveJob = (employer, role, id, img, desc, quali) => {
                    
        let myjobs = JSON.parse(localStorage.getItem('myjobs') || "[]")
        console.log(myjobs)
        let newJob;
    
          if (id) {
            newJob = {
                id,
                employer,
                role,
                desc,
                quali,
                img
            }
          } else {
            return
          }
    
        myjobs.push(newJob)                
        window.localStorage.setItem('myjobs', JSON.stringify(myjobs))
    }


      const onCardLeftScreen = (myIdentifier) => {
        console.log('id: ' + myIdentifier + ' left the screen')
    }
    
    const swiped = (dir, employer, role, id, img, desc, quali) => {
        console.log('id is : ' + id, ' direction is : ' + dir)
        if (dir == 'up') {
            console.log('direction is up')
            saveJob(employer, role, id, img, desc, quali)
        }
      }

    return (
        <>
            <div className={styles.cardContainer}>
                {
                    data.map(({ employer, role, id, img, desc, quali }) => (
                        
                        <TinderCard
                            key={id}
            className={styles.swiper}
            onSwipe={(dir) => swiped(dir, id, employer, role, id, img, desc, quali)}
            onCardLeftScreen={() => onCardLeftScreen(id)}
            
            >
            <div className={styles.swiperImage} >
                <Image
                    className={styles.img}
                    src={img}
                    alt={role}
                    priority
                    fill
                    />
                    <Link href={'/Swipetwo/' + id}
                                    className={styles.readmore}
                    >
                        read more
                     </Link>
            </div>
                    <div className={styles.info}>
                            <h2 className={styles.employer}>{employer}</h2>
                            <h4 className={styles.role}>{role}</h4>
                        
                    </div>
            
        </TinderCard>
                    ))
                }
        </div>
        </>
    )
}

export default Swiper2