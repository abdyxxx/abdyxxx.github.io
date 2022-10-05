import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bird from './Bird';
import CasinoBottom from './CasinoBottom';
import CasinoTop from './CasinoTop';
import GameOver from './GameOver';
import Modale from './Modale';
import { endGame, position, startGame, timerID } from './redux/actions';

export default function Gamezone() {
    const dispatch = useDispatch();

    const positionState = useSelector(state => state.position.position);
    const timerIdState = useSelector(state => state.timerID.id);
    const birdPosition = useSelector(state => state.position.position);
    const coordsBird = useSelector(state => state.birdCoords.coords);
    const gameStatus = useSelector(state => state.game.value);

    const background = useRef(null)
    const casinoBottomRef = useRef(null)
    const casinoTopRef = useRef(null)

    const [isSelected, setIsSelected] = useState(false);
    const [distance, setDistance] = useState();
    const [score, setScore] = useState(0);
    const [canSetScore, setCanScore] = useState(true);

    useEffect(() => {
        if (gameStatus === 'start') {
            setScore(0)
            timerIdState ? console.log('') : dispatch(timerID(setInterval(() => dispatch(position(null, '1px')), 4)));
            background.current.style.animationName = 'move';
            casinoBottomRef.current.style.animationName = 'moveCasino';
            casinoTopRef.current.style.animationName = 'moveCasino';
        }
        else if (gameStatus === 'end') {
            clearInterval(timerIdState);
            dispatch(position('stop'));
            dispatch(timerID(false))
            background.current.style.animationName = '';
        }
    }, [gameStatus])

    useEffect(() => {
        // console.log(gameStatus)
        if (casinoBottomRef.current) {
            let casinoBottomCoords = casinoBottomRef.current.getBoundingClientRect();
            let casinoTopCoords = casinoTopRef.current.getBoundingClientRect();
            if (casinoBottomCoords.left > 271) {
                setCanScore(true)
            }
            if (casinoBottomCoords.left <= 417 && casinoBottomCoords.left >= 267) {
                if (casinoBottomCoords.top < coordsBird.bottom) {
                    dispatch(endGame())
                } else if (casinoTopCoords.bottom > coordsBird.top) {
                    dispatch(endGame())
                } else if (casinoBottomCoords.left < 270) {
                    if (canSetScore) setScore(score + 1)
                    setCanScore(false)
                }

            }
        }
    }, [positionState])

    
    useEffect(() => {
        if (score % 2){
            setTimeout( () => {
                casinoBottomRef.current.style.bottom = '-40px';
                casinoTopRef.current.style.top = '-200px';
            }, 400)
        }else if (score % 3){
            setTimeout( () => {
                casinoBottomRef.current.style.bottom = '-200px';
                casinoTopRef.current.style.top = '-40px';
            }, 400)
        }else if(score !== 0){
            setTimeout( () => {
                casinoBottomRef.current.style.bottom = '-120px';
                casinoTopRef.current.style.top = '-120px';
            }, 400)
        }
    }, [score])

    const handleClick = () => {
        if (isSelected && gameStatus !== 'end') {
            dispatch(startGame())
        }
        if (gameStatus === 'start') {
            dispatch(position('70px'));
        }
    }
    return (
        <div className='game-zone' onClick={handleClick} ref={background}>
            {gameStatus === 'start' ?
                <React.Fragment>
                    <p className='score'>{score}</p>
                    <Bird />
                    <CasinoBottom casinoRef={casinoBottomRef} />
                    <CasinoTop casinoRef={casinoTopRef} />
                </React.Fragment>
                : gameStatus === 'end' ?
                    <GameOver score={score} /> : ''
            }

            {isSelected ? '' : <Modale setIsSelected={setIsSelected} />}
        </div>
    )
}