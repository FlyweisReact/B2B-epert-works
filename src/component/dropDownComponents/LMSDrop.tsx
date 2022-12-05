import React from 'react';
import { useDispatch} from 'react-redux';

export const LMSDrop = () => {

    const dispatch = useDispatch();

    const mapDispatch = () => {dispatch({ type: 'TOGGLE_MENU', payload:'LMS' })}
    
    return (<a href='#' className='nav-list' onClick={mapDispatch}>LMS</a>);
    
}