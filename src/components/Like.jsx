import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {addFAvorites, removeFAvorites} from '../data/favorites'

export default imdbID => {
    const favorite = useSelector(state=>state.favorites);
    const dispatch = useDispatch()
    const liked = favorite.includes(imdbID)

    const changeHandler = e => {
        if(liked){
            dispatch(removeFAvorites(imdbID))
        } else{
           dispatch(addFAvorites(imdbID)) 
        }
    }

    return(
        <div>
            <input type="checkbox" checked={liked} onChange={changeHandler}/>
        </div>
    )
}