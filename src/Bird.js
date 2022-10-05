import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { birdCoords } from './redux/actions';

export default function Bird() {
    const dispatch = useDispatch();
    let positionState = useSelector(state => state.position.position);
    let characterState = useSelector(state => state.character.character)
    let birdRef = useRef(null);
    useEffect(() => {
        if (characterState === 'Альмира') {
            birdRef.current.className += ' bird__almira'
        }
        if (characterState === 'Капа') {
            birdRef.current.className += ' bird__kapa'
        }
    }, [characterState])

    useEffect(() => { 
        birdRef.current.style.bottom = positionState;
        dispatch(birdCoords(birdRef.current.getBoundingClientRect()))
     }, [positionState])

    
    return (
        <div className='bird' ref={birdRef} onClick={() => console.log(birdRef.current.getBoundingClientRect())}>
        </div>
    )
}