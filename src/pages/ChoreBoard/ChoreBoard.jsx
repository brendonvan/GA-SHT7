import styles from './ChoreBoard.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate, Navigate, Link, useParams } from 'react-router-dom'

// redux actions
import { setProfileName } from '../../actions'

// services
import * as profileService from '../../services/profileService'

import ProgressBar from '../../components/ProgressBar/ProgressBar'

const ChoreBoard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const profile = useSelector(state => state.profileReducer)
  const childId = useParams().id

  const [child, setChild] = useState({});
  const [tasks, setTasks] = useState([]);

  async function fetchChild() {
    setChild(await profileService.showChild(profile.user.profile, childId))
    setTasks(await tasks)
  }

  useEffect(() => {
    fetchChild()
    console.log(child)
  }, [])
  

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
        <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" onClick={() => {navigate(-1)}} />          {/* TODO: update the name to be for current child */}
          <h1 className={styles.header_h1}>{child.name}'s Chore Board</h1>

        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src={child.avatar} alt={child.avatar}></img>
          <h1 className={styles.profileName}>{child.name}</h1>
        </div>
        <ProgressBar score={ 20} price={700} goal={"Nerf Gun"}/>
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
    </div>
  )
}

export default ChoreBoard