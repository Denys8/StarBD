import React from 'react';

import './error_indicator.scss';
import icon from './death-star-boom.gif'

const ErrorIndicator = () => {
    return (
        <div className="error_indicator">
        <img src={icon} alt="death star"/>
            <h2>BOOM!</h2>
            <span className="error">
                Something has gone terribly wrong
            </span>
            <span>
                (But we already sent droids to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;