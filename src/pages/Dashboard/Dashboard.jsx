import styles from './Dashboard.module.css'
//import { useDispatch, useSelector } from 'react-redux'

// components
import AssignedChores from '../../components/AssignedChores/AssignedChores'

const Dashboard = () => {
  // test data
  const taskList = {
    assgined: "Billy",
    amountOfTask: 2,
    coinsEarned: 10,
    goalCost: 100
  }
  const taskList2 = {
    assgined: "Jimmy",
    amountOfTask: 60,
    coinsEarned: 2,
    goalCost: 10
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>Chore Board</h1>
        <div className={styles.line}></div>
        <div className={styles.taskList}>
          <AssignedChores data={ taskList }></AssignedChores>
        </div>
        <div className={styles.taskList}>
          <AssignedChores data={ taskList2 }></AssignedChores>
        </div>
        <div className={styles.addTaskBtn}>
          +
        </div>
      </div>
    </>
  )
}

export default Dashboard
