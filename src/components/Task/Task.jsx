import styles from './Task.module.css'
import { Link } from 'react-router-dom'

const Task = (props) => {

  const task = {
    location: "Kitchen",
    taskName: "Sweep Floors",
    reward: 5
  }

  return (
    <Link className={styles.link} to="/tasklist">
      <div className={styles.task}> 
        <div className={styles.left}> 
          <h3>{task.location}</h3>
          <div className={styles.approveBtn}>
            Approve
          </div>
        </div>
        <div className={styles.right}>
          <p>{task.taskName}</p>
          <div className={styles.reward}>
            <img className={styles.coinImg} src="icons/coin.svg" alt="coin-img" />
            <p className={styles.coinsEarnedText}>{task.reward}</p>
          </div>
          
        </div>
      </div>
    </Link>
  )
}

export default Task
