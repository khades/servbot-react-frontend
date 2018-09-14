
var initialState = {
    modChannels:[],
    username:"",
    avatarUrl: "",
    userID:""
}

const userInfo = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ROUTE':
            return action.route
        default:
            return state
    }
}

export default userInfo