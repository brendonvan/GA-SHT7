import styles from './Chores.module.css'

export default function Chores() {

  return  (
    <main className={styles.container}>
      <h1>Chore Goals</h1>

      <form>
        <h1>Child's Name</h1>
        <input></input>
        <h1>Coin Goal</h1>
        <select>
          <option selected disabled>Please Select a Value</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        <h1>Item Wanted</h1>
        <input></input>
      </form>
      <h1>Add Picture <button>+</button></h1>
      <button>Save</button>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <hr></hr>
      <h1>Chores</h1>

      <form>
        <h1>Room</h1>
        <select>
          <option selected disabled>Please Select a Value</option>
          <option>Kitchen</option>
          <option>Living Room</option>
          <option>Restroom</option>
        </select>
        <h1>Clean Toliet
        <input type="checkbox"/>
        </h1>
        <h1>Throw Trash
        <input type="checkbox"/>
        </h1>
        <h1>Wash Dishes
        <input type="checkbox"/>
        </h1>
        <br></br>
        <h1>Assigned To</h1>
        <select>
          <option selected disabled>Please Select a Value</option>
          <option>Child #1</option>
          <option>Child #2</option>
          <option>Child #3</option>
        </select>
      </form>
      <h1>Add Picture <button>+</button></h1>
      <button>Save</button>
    </main>
  )
}

