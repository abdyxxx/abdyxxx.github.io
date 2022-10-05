export function position(up, down) {
    return {
        type: 'POSITION',
        up,
        down,
    }
}
export function timerID(id) {
    return {
        type: 'TIMER',
        id
    }
}
export function selectCharacter(char) {
    return {
        type: 'CHAR',
        data: char
    }
}
export function birdCoords(data) {
    return {
        type: 'BIRD_COORDS',
        data
    }
}
export function startGame() {
    return {
        type: 'START'
    }
}
export function endGame() {
    return {
        type: 'END'
    }
}

