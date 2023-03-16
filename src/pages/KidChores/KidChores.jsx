import styles from './KidChores.module.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

export default function KidChores() {

const navigate = useNavigate()

  const preDefinedTasks = [
    {
      id: "123123123",
      taskName: "Throw Trash",
      selected: true
    },
    {
      id: "123123123",
      taskName: "Clean Room",
      selected: false
    },
    {
      id: "123123123",
      taskName: "Wash Dishes",
      selected: true
    },
    {
      id: "123123123",
      taskName: "Fold Clothes",
      selected: false
    },
    {
      id: "123123123",
      taskName: "Vacuum House",
      selected: false
    },

  ]

  function handleSelectTask() {
    // TODO: update selected task to toggle
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
        <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" onClick={() => {navigate(-1)}} />
          <h1 className={styles.header_h1}>Kid Profile</h1>
          <p className={styles.header_p}>Select your Child's Primary Chores</p>
        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src="/assets/Kid_3.png" alt="Kid_3_Image"></img>
          <h1 className={styles.profileName}>Billy</h1>
          <div className={styles.tasklist}>
            <form className={styles.formField}>
              {preDefinedTasks.map((task) => 
                <div key={task.id} className={styles.task}>
                  <div className={styles.checkcircle} onClick={() => { handleSelectTask() }}>
                    <img className={`${styles.check} ${task.selected ? '' : styles.hide}`} src="/assets/check.svg" alt="selected-task" />
                  </div>
                  {task.taskName}
                </div>
              )}
            </form>
              <div className={styles.addTask}><div className={styles.addTaskCircle}>+</div>Create New Chore</div>
          </div>
        </div>
      </div>
      <button className={styles.save}>Save</button>
    </div>
  )

}


