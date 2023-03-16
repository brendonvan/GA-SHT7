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
          {/* Update this name for current profile */}
          <h1 className={styles.profileName}>Tammy</h1>
        </div>
        <div className={styles.childrenList}>
          <h1 className={styles.listLabel}>Kids</h1>
          <div className={styles.line}></div>

          {/* Map this for each child in array */}
          <div className={styles.kidItem}>
            <img className={styles.kidImg} src="/assets/Kid_3.png" alt="Kid_3_picture" />
            <p className={styles.kidName}>Billy</p>
          </div>

          <div className={styles.addChildButton}>
            <div className={styles.addBtn}>+</div>
            <div className={styles.addText}>Add Child</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentProfile