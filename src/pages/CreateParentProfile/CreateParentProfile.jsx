import styles from './CreateParentProfile.module.css'

import { useState } from 'react'
//import { useDispatch, useSelector } from 'react-redux'

// components
import AssignedChores from '../../components/AssignedChores/AssignedChores'

const CreateParentProfile = ({profile, handleEditProfile}) => {
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

  const [form, setForm] = useState({
    avatar: profile.avatar,
  })

  const handleProfileChange = (avatar) => {
    setForm({ ...form, avatar })
    console.log('form', form)
    console.log('avatar:', avatar)
  }

  const handleProfileSubmit = (e) => {
    e.preventDefault()
    handleEditProfile(form)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" />
          <h1 className={styles.header_h1}>Parent Profile</h1>
          <p className={styles.header_p}>Choose an avatar</p>
        </div>
        <div className={styles.selectAvatar}>
          <div className={styles.chosenAvatar}></div>
          <div className={styles.availableAvatar}>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Parent_Avatar_1.png" alt="choice-1-male" onClick={() => handleProfileChange("/assets/Parent_Avatar_1.png")} /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Parent_Avatar_2.png" alt="choice-2-male" onClick={() => handleProfileChange("/assets/Parent_Avatar_2.png")} /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Parent_Avatar_3.png" alt="choice-1-female" onClick={() => handleProfileChange("/assets/Parent_Avatar_3.png")} /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Parent_Avatar_4.png" alt="choice-2-female" onClick={() => handleProfileChange("/assets/Parent_Avatar_4.png")} /></div>
          </div>
        </div>
      </div>
      <div className={styles.nextBtn} onClick={handleProfileSubmit}>Next</div>
    </div>
  )
}

export default CreateParentProfile
