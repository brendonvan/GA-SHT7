import styles from './TaskList.module.css'
//import { useDispatch, useSelector } from 'react-redux'

// components
import TaskItem from '../../components/Task/Task'

const TaskList = () => {
  // Test Data
  const task = {
    assgined: "Billy",
    amountOfTask: 2,
    coinsEarned: 10,
    goalCost: 100
  }
  const task2 = {
    assgined: "Jimmy",
    amountOfTask: 60,
    coinsEarned: 2,
    goalCost: 10
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>{ task.assgined }'s List</h1>
        <div className={styles.line}></div>
        <div className={styles.taskList}>
          <TaskItem data={ task }></TaskItem>
        </div>
        <div className={styles.taskList}>
          <TaskItem data={ task2 }></TaskItem>
        </div>
      </div>
    </>
  )
}

export default TaskList
