export const setCurrentUser = ( initProfile, user ) => {
    let currentProfile = { ...initProfile, user }
    return {
        type: 'SET_CURRENTUSER',
        payload: currentProfile
    }
}

export const setOnboarding = ( profile, showOnboarding) => {
    let currentProfile = { ...profile, showOnboarding }
    return {
        type: 'SET_ONBOARDING',
        payload: currentProfile
    }
}

export const setShowCreateChild = ( profile, showCreateChild) => {
    let currentProfile = { ...profile, showCreateChild }
    return {
        type: 'SET_SHOWCREATECHILD',
        payload: currentProfile
    }
}

export const setProfileAvatar = (profile, profileAvatar) => {
    let currentProfile = { ...profile, profileAvatar }
    return {
        type: 'SET_AVATAR',
        payload: currentProfile
    }
}

export const setProfileName = (profile, name) => {
    let currentProfile = { ...profile, name }
    return {
        type: 'SET_NAME',
        payload: currentProfile
    }
}

export const setChildAvatar = (child, avatar) => {
    let currentChild = { ...child, avatar }
    return {
        type: 'SET_CHILD_AVATAR',
        payload: currentChild
    }
}

export const setChildName = (child, name) => {
    let currentChild = { ...child, name }
    return {
        type: 'SET_CHILD_NAME',
        payload: currentChild
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}
export const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}
