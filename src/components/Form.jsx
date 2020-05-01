import React from 'react';
import {useDispatch} from 'react-redux';
import {TextField, Button} from '@material-ui/core';

import {useField} from '../hooks';
import {getMovies} from '../data/movies'


export default () => {

    const {error, setError, setValue, ...field} = useField('', true);
    const dispatch = useDispatch()
    
    const submitHandler = e => {
        e.preventDefault();
        if(field.value === ""){
            setError(true);
        } else {
            setValue("");
            dispatch(getMovies(field.value))

        }
    }
    return(
        <form onSubmit={submitHandler}>
            <input
            type="text"
            {...field}
            className={error ? "error": ""} 
            />
            <input type="submit" value="Search"/>
        </form> 
    )
}