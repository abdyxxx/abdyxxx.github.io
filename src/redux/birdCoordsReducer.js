const initialState = {

}

export default function birdCoordsReducer(state = initialState, action) {
    switch (action.type) {
        case 'BIRD_COORDS':
            return {
                coords: action.data
            }
        default:
            return state
    }
}