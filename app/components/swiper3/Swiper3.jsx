import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

// styles
import styles from './Swiper3.module.css'


const Swiper3 = ({data, options}) => {
  const [emblaRef] = useEmblaCarousel(options)

  return (
      <div className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
              <div className={styles.embla__container}>
          {data.map(({employer, role, id, img}, idx) => (
            <Link href={'/Swipethree/' + id} className={styles.embla__slide} key={id}>
                  <div className={styles.embla__slide__number}>
                <span>{idx + 1}</span>
              </div>
              <Image
                      className={styles.embla__slide__img}
                src={img}
                alt={employer}
                priority
                  />
                  <div className={styles.info}>
                    <h2>{employer}</h2>
                    <h4>{role}</h4>
                </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Swiper3
