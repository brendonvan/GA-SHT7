import styles from './ChoreBoard.module.css'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link, useParams } from 'react-router-dom'

// services
import * as childService from '../../services/childService'

import ProgressBar from '../../components/ProgressBar/ProgressBar'

const ChoreBoard = () => {
  const navigate = useNavigate()
  const childId = useParams().id

  const [child, setChild] = useState({});
  const [tasks, setTasks] = useState([]);

  async function fetchChild() {
    setChild(await childService.show(childId))
    setTasks(await tasks)
  }

  useEffect(() => {
    fetchChild()
  }, [])
  

  return (
    <div className={styles.container}>
        <div className={styles.header}>
        <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" onClick={() => {navigate("/parentprofile")}} />          {/* TODO: update the name to be for current child */}
          <h1 className={styles.header_h1}>{child.name}'s Chore Board</h1>

        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src={child.avatar} alt={child.avatar}></img>
          <h1 className={styles.profileName}>{child.name}</h1>
        </div>
        <ProgressBar score={child.currentScore} price={child.goalScore} goal={child.goalItem}/>
        <div className={styles.question}>
          <p>Did {child.name} complete their tasks today? &nbsp;<Link to ={`/kidChores/${childId}`}><img className={styles.pencil} src="/assets/Pencil.svg"></img></Link></p>
        </div>
        { tasks.length ? (
          <h1 className={styles.taskList}>{tasks.map((task) => 
            <div>{task.name}</div>
            )}</h1>
        ) : (<div className={styles.taskList}>No Tasks Today</div>) }
        <Link className={styles.chores} to = {`/kidChores/${childId}`} >
          <div className={styles.addBtn}>+</div> Add Chores
        </Link>
    </div>
  )
}

export default ChoreBoard