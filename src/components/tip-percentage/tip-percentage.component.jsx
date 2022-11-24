import React, { useState } from 'react';

import './tip-percentage.styles.css'



const TipPercentage = ({ setValue, activeButton, setActiveButton, customNumber, setCustomNumber }) => {
    const percentages = [5, 10, 15, 25, 50];

    return (
        <div className="tip-percentage-container">
            <p>Select Tip %</p>
            <div className="tip-percentage-wrapper">
                {
                    percentages.map(percentage => {
                        return (
                            <button
                                key={percentage}
                                onClick={() => {
                                    setActiveButton(percentage)
                                    setValue(percentage)
                                }}
                                className={activeButton === percentage ? 'active' : ""}
                            >
                                {percentage}%
                            </button>

                        )
                    })
                }
                <input type="number" placeholder='CUSTOM' name='customNumber' className='custom-number' onChange={(e) => {
                    setCustomNumber(e.target.value)
                    setValue(e.target.value)
                }} value={customNumber}

                />

            </div>
        </div>

    )
}

export default TipPercentage