import styles from './ProgressBar.module.css'
import { Link } from 'react-router-dom'

const ProgressBar = () => {
  {/* TODO: Update current coins */}
  {/* TODO: Update current goal amount */}

  const progress = (200 / 700) * 100

  return (
    <>
      <div className={styles.container}>
        <div className={styles.goalName}>
          {/* TODO: Update this to goal item */}
          <p>Nerf Gun</p>
        </div>

        <div className={styles.progressBar}>
          <div class={`${styles.skillBar} ${styles.skill1} `} style={{width:`${progress}%`}}>
            <span class={ styles.skillCount1}></span>
          </div>
          <div class={`${styles.skillBar2} ${styles.skill2} `}>
            <span class={ styles.skillCount2}></span>
          </div>
        </div>
        
        <div className={styles.coinStatus}>
          <div className={styles.left}>
            <img className={styles.coinImg} src="/assets/Chore_coin.svg" alt="coin_amount" />
            {/* TODO: Update current coins */}
            <p className={styles.count}>20</p>
          </div>
          <div className={styles.right}>
            {/* TODO: Update current goal amount */}
            <img className={styles.coinImg} src="/assets/Chore_coin.svg" alt="goal_amount" />
            <p className={styles.count}>700</p>
          </div>
        </div>
      </div>
    </>       
  )
}

export default ProgressBar
