"use client"
import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion'
import Image from 'next/image'
import { RiArrowRightLine, RiBookmarkFill } from 'react-icons/ri'
import styles from './Swiper.module.css'
import SwipeButtons from './SwipeButtons'
import { Jobs } from '@/data/jobsArray'

// added these randomized images, employees and roles, so it will be (infinite swipeable)

const Images = [Jobs[0].img, Jobs[1].img, Jobs[2].img, Jobs[3].img, Jobs[4].img, Jobs[5].img, Jobs[6].img, Jobs[7].img];

const Employer = [Jobs[0].employer, Jobs[1].employer, Jobs[3].employer, Jobs[6].employer, Jobs[10].employer, Jobs[12].employer]

const Role = [Jobs[1].role, Jobs[0].role, Jobs[2].role, Jobs[5].role, Jobs[9].role, Jobs[3].role]

// random image for infinite swipe

const randomImage = current => {
  while (true) {
    const index = Math.floor(Math.random() * Images.length);
    if (current != Images[index]) {
      return Images[index];
    } 
  }
}
const randomEmployer = current => {
  while (true) {
    const index = Math.floor(Math.random() * Employer.length);
    if (current != Employer[index]) {
      return Employer[index];
    } 
  }
}
const randomRole = current => {
  while (true) {
    const index = Math.floor(Math.random() * Role.length);
    if (current != Role[index]) {
      return Role[index];
    } 
  }
}

const randomId = (max) => {    
    const index = Math.floor(Math.random() * max);
    return index
}

const newId = randomId(100)
console.log('random id: ' + newId)
// the card

const Card = ({ card, style, onDirectionLock, onDragStart, onDragEnd, animate }) => {
  
    return (    
    <motion.div
        className={styles.card}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragDirectionLock
        onDirectionLock={onDirectionLock}
        onDragStart={(e) => {
            e.stopPropagation()
            /* console.log(e.target.attributes) */
        }}
        onDragEnd={onDragEnd}
        animate={animate}
        style={{ ...style }}
        transition={{ ease: [.6, .05, -.01, .9] }}
      whileTap={{ scale: .98 }}
    >
        <RiBookmarkFill className={styles.saved}  />
        <div className={styles.info}>
              <h2>{card.employer}</h2>
              <h4>{card.role}</h4>
          </div>
          
            <div className={styles.img}>
        <Image
              src={card.img}
              alt={`${card.role}`}
                    priority
                    fill
                    sizes="(max-width: 768px) 90%,
                    (max-width: 1200px) 50vw,
                    33vw"
        />
            </div>
    </motion.div>
)}

const Swiper = ({ data }) => {
    const [cards, setCards] = useState(data);
    
    const [dragStart, setDragStart] = useState({
        axis: null,
        initial: {opacity: 0},
        animation: { x: 0, y: 0 }
    });

    

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const scale = useTransform(dragStart.axis === 'x' ? x : y, [-200, 0, 200], [1, .9, 1]);
    const shadowBlur = useTransform(dragStart.axis === 'x' ? x : y, [-200, 0, 200], [0, 25, 0]);
    const shadowOpacity = useTransform(dragStart.axis === 'x' ? x : y, [-200, 0, 200], [0, .4, 0]);
    const boxShadow = useMotionTemplate`0 ${shadowBlur}px 25px -5px rgba(0, 0, 0, ${shadowOpacity})`;
    const onDirectionLock = axis => setDragStart({ ...dragStart, axis: axis });
    const animateCardSwipe = animation => {
      setDragStart({ ...dragStart, animation });        
      setTimeout(() => {
        setDragStart({ axis: null, animation: { x: 0, y: 0 } });
        x.set(0);
        y.set(0);
        setCards([{ 
            employer: randomEmployer(cards[0].employer), 
            role: randomRole(cards[0].role),
            img: randomImage(cards[0].role),
          }, ...cards.slice(0, cards.length - 1)]);
      }, 200);
    }


    const onDragEnd = (info) => {
      if (dragStart.axis === 'x') {
        if (info.offset.x >= 100) 
          animateCardSwipe({ x: 360, y: 0 });
        else if (info.offset.x <= -100)
          animateCardSwipe({ x: -360, y: 0 }); 
      } else {
          if (info.offset.y >= 300) {
              console.log('will delete from deck')
            animateCardSwipe({ x: 0, y: 260 }); 
        }
         
        else if (info.offset.y <= -300) {
              console.log('will save to job')
              console.log(info)
            animateCardSwipe({ x: 0, y: -260 }); 
        }
      }
    }
    
    const doSomething = () => {
        console.log('function to remove job from array goes here');
      };
      
    const renderCards = () => {     
        return cards.map((card, index) => {
            const { employer, role, desc, quali, id, img} = card

            const saveJob = (cardId) => {
                    
                let myjobs = JSON.parse(localStorage.getItem('myjobs') || "[]")
                console.log(myjobs)
                let newJob;
            
                  if (cardId) {
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

          if (index === cards.length - 1) {
            return (
              <Card 
                card={card}
                key={index}
                style={{ x, y, zIndex: index }}
                onDirectionLock={axis => onDirectionLock(axis)}
                    onDragEnd={(e, info) => {
                        onDragEnd(info)
                        if (info.offset.y <= -300) {
                            console.log(card.id + ' is the card id to match with data, to save to saved jobs')
                            saveJob(card.id)
                          animateCardSwipe({ x: 0, y: -260 }); 
                        } else {
                          doSomething()
                      }
                    }}
                animate={dragStart.animation}
              />
            )
          } else return (
            <Card 
                card={card}
                key={index}
                style={{
                scale, 
                boxShadow,
                zIndex: index
              }}
            />
          )
        })
      }
      return (
          <div className={styles.swipe}>
              <p className={styles.save}>Saved</p>
              {renderCards()}
              <p className={styles.throw}>Throw</p>
              <div className={styles.arrowIcon}>
                <RiArrowRightLine />
              </div>  
              <SwipeButtons />
              <div className={styles.overlay}></div>
        </div>
          
          )
}

export default Swiper