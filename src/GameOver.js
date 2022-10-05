import React from 'react';
import { useDispatch } from 'react-redux';
import { startGame } from './redux/actions';

export default function GameOver(props) {
    const dispatch = useDispatch();
    const inscriptions = {
        5: 'Чето слабо пусть лучше Кира попробует',
        10: 'Яша сказал что неплохо',
        15: 'Соколова харош',
        20: 'Ты че за легенда по братски',
        25: 'Королева лотошки',
    }

    return (
        <div className='modale modale_gameover'>
            <div className='modale__block gameover__block'>
                <h1 className='modale__title'>GAME OVER</h1>
                <p className='modale__select'>Ты набрала {props.score} {props.score != 1 ? 'очков' : 'очко'}</p>
                <p className='modale__select inscription'>
                    {props.score < 3 ? inscriptions[5] :
                        props.score < 6 ? inscriptions[10] :
                            props.score < 9 ? inscriptions[15] :
                                props.score < 14 ? inscriptions[20] :
                                inscriptions[25]
                }
                </p>
                <input type='button' value='Заново' onClick={() => dispatch(startGame())} />
            </div>
        </div>
    )
}