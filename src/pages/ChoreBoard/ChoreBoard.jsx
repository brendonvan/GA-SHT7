import styles from './ChoreBoard.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import ProgressBar from '../../components/ProgressBar/ProgressBar'

const ChoreBoard = () => {
  const [name, setName] = useState("Billy");
  const navigate = useNavigate();

  const tasks = [
    {
      name: "Ian"
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
        <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" onClick={() => {navigate(-1)}} />          {/* TODO: update the name to be for current child */}
          <h1 className={styles.header_h1}>{name}'s Chore Board</h1>
        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src="/assets/Kid_3.png" alt="Kid_3_Image"></img>
          {/* TODO: Update this name for current profile */}
          <h1 className={styles.profileName}>{name}</h1>
        </div>
        <ProgressBar />
        <div className={styles.question}>
          <p>Did {name} complete his tasks today? <Link to ="/kidChores"><img className={styles.pencil} src="/assets/Pencil.svg"></img></Link></p>
        </div>
        { tasks.length ? (
          <h1 className={styles.taskList}>{tasks.map((task) => 
            <div>{task.name}</div>
            )}</h1>
        ) : (<div className={styles.taskList}>No Tasks Today</div>) }
        <Link className={styles.chores} to = "/kidChores" >
          <div className={styles.addBtn}>+</div> Add Chores
        
        </Link>
      </div>
    </div>
  )
}

export default ChoreBoard