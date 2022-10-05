const initialState = {

}

export default function setGameReducer(state = initialState, action) {
    switch (action.type) {
        case 'START':
            return {
                value: 'start'
            }
        case 'END':
            return {
                value: 'end'
            }
        default:
            return state;
    }
}