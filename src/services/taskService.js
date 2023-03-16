import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/task`


async function create(profileId, childId, tasksData) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/${childId}/create`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tasksData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


async function updateTask(profileId, childId, taskId) {
  const res = await fetch(`${BASE_URL}/${profileId}/${childId}/${taskId}`, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function deleteTask(taskId) {
  try {
    const res = await fetch(`${BASE_URL}/${taskId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {

  }
}


export { 
  create,
  updateTask, 
  deleteTask }