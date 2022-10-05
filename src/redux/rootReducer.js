import { combineReducers } from "redux";
import birdCoordsReducer from "./birdCoordsReducer";
import characterReducer from "./characterReducer";
import positionReducer from "./positionReducer";
import setGameReducer from "./setGameReducer";
import timerReducer from "./timerReducer";

export const rootReducer = combineReducers({
    position: positionReducer,
    timerID: timerReducer,
    character: characterReducer,
    birdCoords: birdCoordsReducer,
    game: setGameReducer
})