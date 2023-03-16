import styles from './KidChores.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function KidChores() {

  const preDefinedTasks = [
    {
      taskName: "Throw Trash"
    },
    {
      taskName: "Clean Room"
    },
    {
      taskName: "Wash Dishes"
    },
    {
      taskName: "Fold Clothes"
    },
    {
      taskName: "Vacuum House"
    },

  ]

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.header_h1}>Kid Profile</h1>
          <p className={styles.header_p}>Select your Child's Primary Chores</p>
        </div>
        <div className={styles.selectAvatar}>
          <div className={styles.chosenAvatar}></div>
          <div>
            <label className={styles.label}>Billy</label>
            <form className={styles.formField}>
              {preDefinedTasks.map((task) => 
                <button className={styles.task}>{task.taskName}</button>
              )}
            </form>
              <button className={styles.addTask}><span>+</span>Create New Chore</button>
          </div>
          <button className={styles.save}>Save</button>
        </div>
      </div>
    </div>
  )

}


