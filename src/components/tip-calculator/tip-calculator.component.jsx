import React, { useState, useEffect } from 'react';

import Input from '../input/input.component';
import TipPercentage from '../tip-percentage/tip-percentage.component';
import TipResult from '../tip-view/tip-view.component';

import './tip-calculator.styles.css'

import dollor from '../../images/icon-dollar.svg';
import person from '../../images/icon-person.svg';



const TipCalculator = () => {
    const [totalAmount, setTotalAmount] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [tipPercentage, setTipPercentage] = useState(0);
    const [totalAmountPerPerson, setTotalAmountPerPerson] = useState(0);
    const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0);
    const [activeButton, setActiveButton] = useState(0);
    const [customNumber, setCustomNumber] = useState("");


    useEffect(() => {


        if (numberOfPeople > 0) {
            setTotalAmountPerPerson((Number(totalAmount) + ((Number(totalAmount) * tipPercentage) / 100)) / numberOfPeople);
            setTipAmountPerPerson((Number(totalAmount) * tipPercentage) / 100 / numberOfPeople);
        }
    }, [numberOfPeople, tipPercentage, totalAmount]);

    const handleReset = () => {
        setTotalAmount("");
        setNumberOfPeople("");
        setTipPercentage("");
        setTotalAmountPerPerson(0);
        setTipAmountPerPerson(0);
        setActiveButton(0);
        setCustomNumber("");
    }

    return (
        <>

            <h1 className="logo">SPLI<br />TTER</h1>
            <div className="calculator-container">
                <div className="calculating-container">
                    <Input
                        imgUrl={dollor}
                        inputLabel="Bill"
                        setValue={setTotalAmount}
                        data={totalAmount} />
                    <TipPercentage setValue={setTipPercentage} activeButton={activeButton} customNumber={customNumber} setCustomNumber={setCustomNumber} setActiveButton={setActiveButton} />
                    <Input
                        imgUrl={person}
                        inputLabel="Number of People"
                        setValue={setNumberOfPeople}
                        data={numberOfPeople}
                    />

                </div>

                <TipResult totalAmountPerPerson={totalAmountPerPerson}
                    tipAmountPerPerson={tipAmountPerPerson}
                    handleReset={handleReset} />


            </div>

        </>
    )
}

export default TipCalculator;