import React from 'react';
import { useDispatch } from 'react-redux';
import almira from './pics/almira.png'
import kapa from './pics/kapa.png'
import { selectCharacter, startGame } from './redux/actions';

export default function Modale(props) {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        props.setIsSelected(true)
        dispatch(selectCharacter(e.currentTarget.dataset.char));
        dispatch(startGame())
    }
    return (
        <div className='modale'>
            <div className='modale__block'>
                <h1 className='modale__title'>FLAPPY LOTOSHKA</h1>
                <p className='modale__select'>выберите игрока</p>
                <div className='modale__select-pers'>
                    <div className='alm' data-char="Альмира" onClick={handleClick}>
                        <div className='modale__character'>
                            <img src={almira} className='almira__img' />
                        </div>
                        <p>Альмира</p>
                    </div>
                    <div className='kap' data-char="Капа" onClick={handleClick}>
                        <div className='modale__character'>
                            <img src={kapa} className='kapa__img' />
                        </div>
                        <p>Капа</p>
                    </div>
                </div>
            </div>
        </div>
    )
}