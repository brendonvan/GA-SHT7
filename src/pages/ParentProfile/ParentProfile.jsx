import styles from './ParentProfile.module.css'
//import { useDispatch, useSelector } from 'react-redux'

// components
import AssignedChores from '../../components/AssignedChores/AssignedChores'

const ParentProfile = () => {


  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" />
          <h1 className={styles.header_h1}>Parent Profile</h1>
        </div>
        <div className={styles.selectAvatar}>
          <div className={styles.chosenAvatar}></div>

        </div>
      </div>
      <div className={styles.nextBtn}>Next</div>
    </div>
  )
}

export default ParentProfile