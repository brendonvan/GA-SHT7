import styles from './CreateKidProfile.module.css'
//import { useDispatch, useSelector } from 'react-redux'

// components
import AssignedChores from '../../components/AssignedChores/AssignedChores'

const CreateKidProfile = () => {
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
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" />
          <h1 className={styles.header_h1}>Kid Profile</h1>
          <p className={styles.header_p}>Set up this profile with your child</p>
        </div>
        <div className={styles.selectAvatar}>
          <div className={styles.chosenAvatar}></div>
          <div className={styles.availableAvatar}>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Kid_1.png" alt="choice-1-girl" /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Kid_2.png" alt="choice-2-boy" /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Kid_3.png" alt="choice-1-girl" /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Kid_4.png" alt="choice-2-boy" /></div>
          </div>
        </div>
      </div>
      <div className={styles.nextBtn}>Next</div>
    </div>
  )
}

export default CreateKidProfile
