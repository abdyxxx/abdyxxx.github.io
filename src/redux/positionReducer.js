const initialState = {
    position: '390px'
}

export default function positionReducer(state = initialState, action) {
    switch (action.type) {
        case 'POSITION':
            if (action.up) {
                if (action.up === 'stop') {
                    return initialState
                }
                return {
                    position: parseInt(state.position.replace(/[^\d]/g, '')) + parseInt(action.up.replace(/[^\d]/g, '')) + 'px'
                }
            }else if(action.down){
                return {
                    position: parseInt(state.position.replace(/[^\d]/g, '')) - parseInt(action.down.replace(/[^\d]/g, '')) + 'px'
                }
            }
        default:
            return state;
    }
}