import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Saved.module.css'

const Saved = ({ save }) => {
    
    if (save) {
        return (
          <AnimatePresence>
          <motion.div className={styles.saved}
              initial={{ x: 0, y: 0, opacity: [0, 1] }}
              animate={{x: [0, 0], y: [0, -300], opacity: [1, 0]}}
              transition={{delay: 0.2, duration: 1.2}}
          >
              <h2 className={styles.saveText}>Saved</h2>
          </motion.div>            
          </AnimatePresence>
      )        
    } else
        return (
            <div></div>
        )
}

export default Saved