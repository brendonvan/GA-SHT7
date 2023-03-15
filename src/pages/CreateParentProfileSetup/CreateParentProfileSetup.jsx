import styles from './CreateParentProfileSetup.module.css'
import { useState } from 'react';
//import { useDispatch, useSelector } from 'react-redux'

// components
import AssignedChores from '../../components/AssignedChores/AssignedChores'

const CreateParentProfileSetup = () => {
  // test data

  const [firstName, setFirstName] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1 className={styles.header_h1}>Parent Profile</h1>
          <p className={styles.header_p}>Choose an avatar</p>
        </div>
        <div className={styles.selectAvatar}>
          <div className={styles.chosenAvatar}></div>
          <div>
            <form className={styles.formField}>
              <label className={styles.label}>First Name</label>
              <input
                className={styles.input}
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder=""
                type="text"
                name="firstName"
                required
              />
            </form>
          </div>
        </div>
      </div>
      <div className={styles.nextBtn}>Next</div>
    </div>
  )
}

export default CreateParentProfileSetup
