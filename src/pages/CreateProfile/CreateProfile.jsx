import styles from './CreateProfile.module.css'
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
        <div className={styles.header}>
          <h1 className={styles.header_h1}>Parent Profile</h1>
          <p className={styles.header_p}>Choose an avatar</p>
        </div>
      </div>
    </>
  )
}

export default Dashboard
