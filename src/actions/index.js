export const setCurrentUser = (username, userId, watchlistId) => {
    let currentUser = { username, userId, watchlistId }
    return {
        type: 'SET_CURRENTUSER',
        payload: currentUser
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

// counter actions for demoing redux purposes
// define an action creator for incrementing
export const incAction = () => {
    return {
      type: 'INCREMENT'
    };
};

// define an action creator for decrementing
export const decAction = () => {
    return {
      type: 'DECREMENT'
    };
};
