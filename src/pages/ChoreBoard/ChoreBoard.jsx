import styles from './ChoreBoard.module.css'

const ChoreBoard = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <img className={styles.back} src="/assets/Arrow.svg" alt="back-arrow" />
          {/* TODO: update the name to be for current child */}
          <h1 className={styles.header_h1}>Billy's Chore Board</h1>
        </div>
        <div className={styles.selectAvatar}>
          <img className={styles.chosenAvatar} src="/assets/Kid_4.png" alt="Kid_4_Image"></img>
          {/* TODO: Update this name for current profile */}
          <h1 className={styles.profileName}>Billy</h1>
        </div>

      </div>
    </div>
  )
}

export default ChoreBoard