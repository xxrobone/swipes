'use client'
import Image from "next/image"
import dynamic from "next/dynamic"
import styles from './Swiper2.module.css'
import Link from "next/link"

const Swiper2 = ({ data }) => {
    

    const TinderCard = dynamic(() => import('react-tinder-card'), {
        ssr: false
    });
    
    const saveJob = ( employer, role, desc, quali, img, id) => {
                    
        let myjobs = JSON.parse(localStorage.getItem('myjobs') || "[]")
        console.log(myjobs)
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


      const onCardLeftScreen = (myIdentifier) => {
        console.log('id: ' + myIdentifier + ' left the screen')
    }
    
    const swiped = (dir,  employer, role, desc, quali, img, id) => {
        console.log('id is : ' + id, ' direction is : ' + dir)
        if (dir == 'up') {
            console.log('direction is up')
            saveJob( employer, role, desc, quali, img, id)
        }
      }

    return (
        <>
            <div className={styles.cardContainer}>
                {
                data.map(({  employer, role, desc, quali, img, id }) => (
                <div key={id}>
                    <Link href={'/Swipetwo/' + id}
                    className={styles.readmore}
                    
                >
                    read more
                        </Link>
                        
                    <TinderCard                            
                    className={styles.swiper}
                    onSwipe={(dir) => swiped(dir,  employer, role, desc, quali, img, id)}
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
                    </div>
                        <div className={styles.info}>
                                <h2 className={styles.employer}>{employer}</h2>
                                <h4 className={styles.role}>{role}</h4>
                            
                        </div>            
                    </TinderCard>
                </div>                        
                ))
                }
        </div>
        </>
    )
}

export default Swiper2