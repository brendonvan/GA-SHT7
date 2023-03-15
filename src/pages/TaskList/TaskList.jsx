import styles from './TaskList.module.css'
//import { useDispatch, useSelector } from 'react-redux'

// components
import TaskItem from '../../components/Task/Task'

const TaskList = () => {

  const task = {
    assgined: "Billy"
  }

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.header}>{ task.assgined }'s List</h1>
        <div className={styles.line}></div>
        <div className={styles.taskList}>
          <TaskItem/>
        </div>
        <div className={styles.taskList}>
          <TaskItem/>
        </div>
      </div>
    </>
  )
}

export default TaskList
