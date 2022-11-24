import React from 'react';

import './tip-view.styles.css'

const TipResult = ({ totalAmountPerPerson, tipAmountPerPerson, handleReset }) => {

    return (
        <div className="result-container">
            <div className="result-container-inner">
                <div className="result">
                    <div className="result-title">
                        Tip Amount
                        <span>/ person</span>
                    </div>
                    <div className="result-amount">
                        {`$${tipAmountPerPerson.toFixed(2)}`}
                    </div>
                </div>
                <div className="result">
                    <div className="result-title">
                        Total
                        <span>/ person</span>
                    </div>
                    <div className="result-amount">
                        {`$${totalAmountPerPerson.toFixed(2)}`}
                    </div>
                </div>
            </div>

            <div className="reset-button" onClick={() => handleReset()}>
                Reset
            </div>

        </div>

    )

}

export default TipResult;