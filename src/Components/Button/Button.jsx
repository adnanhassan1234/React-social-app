import React from 'react';
import './button.scss';

const Button = (props) => {
    return (
        <>
            <button type='button' className='btn btn-primary'>{props.title}</button>
        </>
    );
};

export default Button;