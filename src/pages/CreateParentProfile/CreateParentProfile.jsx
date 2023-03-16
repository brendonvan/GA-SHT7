import styles from './CreateParentProfile.module.css'

const CreateParentProfile = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" />
          <h1 className={styles.header_h1}>Parent Profile</h1>
          <p className={styles.header_p}>Choose an avatar</p>
        </div>
        <div className={styles.selectAvatar}>
          {/* TODO: Update this name for current profile */}
          <img className={styles.chosenAvatar} src="/assets/Parent_Avatar_4.png" alt="Parent_Avatar_4_Image"></img>
          <div className={styles.availableAvatar}>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Parent_Avatar_1.png" alt="choice-1-male" /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Parent_Avatar_2.png" alt="choice-2-male" /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Parent_Avatar_3.png" alt="choice-1-female" /></div>
            <div className={styles.gridCell}><img className={styles.avatar} src="/assets/Parent_Avatar_4.png" alt="choice-2-female" /></div>
          </div>
        </div>
      </div>
      <div className={styles.nextBtn}>Next</div>
    </div>
  )
}

export default CreateParentProfile