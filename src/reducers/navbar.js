const initialState = {
    show: false
}

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_NAVBAR':
            return { ...state ,
                show: action.payload.show}
        default: 
            return state;
    }
}

export default navbarReducer;