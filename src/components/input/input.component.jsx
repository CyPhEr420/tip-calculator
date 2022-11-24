import React from 'react';


import './input.styles.css';

const Input = ({ imgUrl, inputLabel, setValue, data }) => {

    return (
        <div className="input-container" >
            <label className="input-label">{inputLabel}</label>
            <div className="input-wrapper">
                <div className="symbol"><img src={imgUrl} alt="symbol" /> </div>
                <input className="input-field" type="number" placeholder="0"
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    value={data}
                />
            </div>



        </div>
    )
}

export default Input;