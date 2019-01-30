import React from 'react';

import './person_details.scss';

const PersonDetails = () => {
    return (
        <div className='card_person'>
            <img src="https:/starwars-visualguide.com/assets/img/characters/2.jpg" alt="" />
            <div className='info_person'>
                <h3>R2-D2</h3>
                <ul>
                    <li>
                        <span>
                            Gender
                    </span>
                        <span>
                            male
                    </span>
                    </li>
                    <li>
                        <span>
                            Birth Year
                    </span>
                        <span>
                            43
                    </span>
                    </li>
                    <li>
                        <span>
                            Eye Color
                    </span>
                        <span>
                            red
                    </span>
                    </li>

                </ul>
            </div>
        </div>
    )
};

export default PersonDetails;