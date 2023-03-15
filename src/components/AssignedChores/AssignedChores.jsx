import styles from './AssignedChores.module.css'
import { Link } from 'react-router-dom'

const AssignedChores = (props) => {

  const progress = (props.data.coinsEarned / props.data.goalCost) * 100

  return (
    <Link className={styles.link} to="/tasklist">
      <div className={styles.task}> 
        <div className={styles.left}> 
          <h3>{ props.data.assgined }</h3>
          <p className={styles.amountTask}>{ props.data.amountOfTask } tasks</p>
        </div>
        <div className={styles.right}>
          <div class={`${styles.skillBar} ${styles.skill1}`}>
            <span class={ styles.skillCount1}></span>
          </div>
          <div className={styles.coinsEarned}>
            <img className={styles.coinImg} src="icons/coin.svg" alt="coin-img" />
            <p className={styles.coinsEarnedText}>{ props.data.coinsEarned } coins earned</p>
          </div>
          
        </div>
      </div>
    </Link>
  )
}

export default AssignedChores
