import styles from './ChoreBoard.module.css'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link, useParams } from 'react-router-dom'

// services
import * as childService from '../../services/childService'

import ProgressBar from '../../components/ProgressBar/ProgressBar'
import { current } from '@reduxjs/toolkit'

const ChoreBoard = () => {
  const navigate = useNavigate()
  const childId = useParams().id

  const [child, setChild] = useState({});
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([])

  async function fetchChild() {
    setChild(await childService.show(childId))
    setTasks(await childService.indexTasks(childId))
    
  }

  useEffect(() => {
    fetchChild()
    handleTaskComplete()
  }, [])
  
  async function handleTaskComplete(){
    if(child.currentScore >= child.goalScore){
      await childService.update(childId, { currentScore: 0 })
      await childService.update(childId, { goalItem: "" })
    }
  }

  function handleSelectTask(task) {
    task.selected = !task.selected
    if (task.selected){
      setSelectedTasks(selectedTasks => [...selectedTasks, task])
    } else {
      setSelectedTasks(selectedTasks => selectedTasks.filter(t => t !== task))
    }
  }
  

  function handleCompleteTasks() {
    // add all selected tasks value to current score
    selectedTasks.forEach( async (task) => {
      setSelectedTasks(selectedTasks.filter((t) => t !== task))
      // add value to currentScore update in backend
      await childService.update(childId, { currentScore: child.currentScore + task.value })
      // delete task
      await childService.deleteTask(child._id, task._id)
    })

    fetchChild()
  }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
        <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" onClick={() => {navigate("/parentprofile")}} />   
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
            <h1 className={styles.taskList} >{tasks.map((task) => 
              <div key={task._id} className={styles.task} onClick={() => { handleSelectTask(task) }}>
                <div className={styles.taskItem} key={task._id} >
                  <div className={styles.checkcircle} >
                    <img className={`${styles.check} ${task.selected ? '' : styles.hide}`} src="/assets/check.svg" alt="selected-task" />
                  </div>
                  <h3 className={styles.taskName}>{task.name}</h3>
                  <h3 className={styles.taskValue}> {task.value} </h3>
                  <img className={styles.choreCoin}src='/assets/Chore_coin.svg'></img>
                </div>
              </div>)}
            </h1>) : (<div className={styles.taskItem}>No Tasks Today</div>) }
        { selectedTasks.length ? ( <div className={styles.completedBtn} onClick={handleCompleteTasks} >Chores complete</div> ) 
        : 
        ( <Link className={styles.add} to = {`/kidChores/${childId}`} >
          <div className={styles.addBtn}>+</div> Add Chores
        </Link> ) }
    </div>
  )
}

export default ChoreBoard