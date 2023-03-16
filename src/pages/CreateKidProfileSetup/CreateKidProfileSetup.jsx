import styles from './CreateKidProfileSetup.module.css'
import { useState } from 'react';

const CreateKidProfileSetup = () => {

  const [firstName, setFirstName] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" />
          <h1 className={styles.header_h1}>Kid Profile</h1>
          <p className={styles.header_p}>Set up this profile with your child</p>
        </div>
        <div className={styles.selectAvatar}>
          {/* TODO: Update this name for current profile */}
          <img className={styles.chosenAvatar} src="/assets/Kid_4.png" alt="Kid_4_Image"></img>
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

export default CreateKidProfileSetup
