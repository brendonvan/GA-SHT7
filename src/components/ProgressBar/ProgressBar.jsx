import styles from './ProgressBar.module.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProgressBar = (props) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress((props.score / props.price) * 100)
  }, [])
  

  return (
    <>
      <div className={styles.container}>
        <div className={styles.goalName}>
          <p>{props.goal}</p>
        </div>

        <div className={styles.progressBar}>
          <div className={`${styles.skillBar} ${styles.skill1} `} style={{width:`${progress}%`, backgroundColor: "#4DCC59"}}>
            <span className={ styles.skillCount1}></span>
          </div>
          <div className={`${styles.skillBar2} ${styles.skill2} `}>
            <span className={ styles.skillCount2}></span>
          </div>
        </div>
        
        <div className={styles.coinStatus}>
          <div className={styles.left}>
            <img className={styles.coinImg} src="/assets/Chore_coin.svg" alt="coin_amount" />
            <p className={styles.count}>{props.score}</p>
          </div>
          <div className={styles.right}>
            <img className={styles.coinImg} src="/assets/Chore_coin.svg" alt="goal_amount" />
            <p className={styles.count}>{props.price}</p>
          </div>
        </div>
      </div>
    </>       
  )
}

export default ProgressBar
