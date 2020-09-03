const initialState = {
    cities : [],
    city : {}
}

const citiesReducers = (state = initialState, action) => {
    switch (action.type) {
        case ('GETCITIES'):
            return{...state ,cities : action.payload}
        case ('GETCITY'):
            return{...state, city : action.payload}
        default:
            return state
    }

}

export default citiesReducers