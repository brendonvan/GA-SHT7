import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/child`


async function create(profileId, childData) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(childData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function index(profileId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function show(profileId, childId) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/${childId}`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}


async function update(profileId, childId, childData) {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}/${childId}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(childData)
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
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
  index,
  show,
  update,
  
}