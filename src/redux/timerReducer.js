const initialState = {

}

export default function timerReducer(state = initialState, action) {
    switch (action.type) {
        case 'TIMER':
            return {
                id: action.id
            }

        default:
            return state;
    }
}