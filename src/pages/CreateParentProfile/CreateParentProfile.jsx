import styles from './CreateParentProfile.module.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// redux actions
import { setProfileAvatar } from '../../actions';

const CreateParentProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const profile = useSelector(state => state.profileReducer);


  const [avatar1, setAvatar1] = useState(`${styles.avatar}`);
  const [avatar2, setAvatar2] = useState(`${styles.avatar}`);
  const [avatar3, setAvatar3] = useState(`${styles.avatar}`);
  const [avatar4, setAvatar4] = useState(`${styles.avatar}`);

  const handleSetAvatar = () => {
    dispatch(setProfileAvatar(profile.user.profile, profile.profileAvatar))
    navigate('/createparentprofile/setup')
  }

  const handleProfileChange = (profile, avatar) => {
    console.log(profile, avatar)
    dispatch(setProfileAvatar(profile, avatar))

    switch (avatar) {
      case "/assets/Parent_Avatar_1.png":
        setAvatar1(`${styles.avatar} ${styles.active}`)
        setAvatar2(`${styles.avatar}`)
        setAvatar3(`${styles.avatar}`)
        setAvatar4(`${styles.avatar}`)
        break;
      case "/assets/Parent_Avatar_2.png":
        setAvatar1(`${styles.avatar}`)
        setAvatar2(`${styles.avatar} ${styles.active}`)
        setAvatar3(`${styles.avatar}`)
        setAvatar4(`${styles.avatar}`)
        break;
      case "/assets/Parent_Avatar_3.png":
        setAvatar1(`${styles.avatar}`)
        setAvatar2(`${styles.avatar}`)
        setAvatar3(`${styles.avatar} ${styles.active}`)
        setAvatar4(`${styles.avatar}`)
        break;
      case "/assets/Parent_Avatar_4.png":
        setAvatar1(`${styles.avatar}`)
        setAvatar2(`${styles.avatar}`)
        setAvatar3(`${styles.avatar}`)
        setAvatar4(`${styles.avatar} ${styles.active}`)
        break;
      default:
        setAvatar1(`${styles.avatar}`)
        setAvatar2(`${styles.avatar}`)
        setAvatar3(`${styles.avatar}`)
        setAvatar4(`${styles.avatar}`)
        break;
    }
  }

  return (
    <div className={styles.container}>
        <div className={styles.header}>
        <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" onClick={() => {navigate(-1)}} />
          <h1 className={styles.header_h1}>Parent Profile</h1>
          <p className={styles.header_p}>Choose an avatar</p>
        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src={profile.profileAvatar} alt={profile.profileAvatar}></img>
          <div className={styles.availableAvatar}>
            <div className={styles.gridCell}><img className={avatar1} src="/assets/Parent_Avatar_1.png" alt="choice-1-male" onClick={() => handleProfileChange(profile, "/assets/Parent_Avatar_1.png")} /></div>
            <div className={styles.gridCell}><img className={avatar2} src="/assets/Parent_Avatar_2.png" alt="choice-2-male" onClick={() => handleProfileChange(profile, "/assets/Parent_Avatar_2.png")} /></div>
            <div className={styles.gridCell}><img className={avatar3} src="/assets/Parent_Avatar_3.png" alt="choice-1-female" onClick={() => handleProfileChange(profile, "/assets/Parent_Avatar_3.png")} /></div>
            <div className={styles.gridCell}><img className={avatar4} src="/assets/Parent_Avatar_4.png" alt="choice-2-female" onClick={() => handleProfileChange(profile, "/assets/Parent_Avatar_4.png")} /></div>
          </div>
        </div>
      <div className={styles.nextBtn} onClick={handleSetAvatar} >Next</div>
    </div>
  )
}
export default CreateParentProfile
