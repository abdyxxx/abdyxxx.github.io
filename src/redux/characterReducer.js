const initialState = {

}

export default function characterReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHAR':
            return {
                character: action.data
            }

        default:
            return state;
    }
}