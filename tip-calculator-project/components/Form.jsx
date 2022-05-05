import React from "react";

// creating a function that returns the div container 'Form'
const Form = ({state, updateValues}) => {
    const {billAmount, tipPercentage} = state
    const percentages = [ 5, 10, 15, 20, 25]
    return (    
    <div className="input-container">
        <div className="input-group">
            <label htmlFor="billAmount">Bill Amount</label>
            <input onChange={(e)=>{
                updateValues({
                    billAmount: e.target.value,
                });
            }} type="number" id="billAmount"/>
        </div>

        <div className="percentage-list">
            {percentages.map((p)=> {
                return <div className="percentage-list__box"
                onClick={()=>{
                    updateValues({tipPercentage: p});
                }}
                key={p}>{`${p}%`}</div>})}
            <input onChange={(e) =>{
                updateValues({
                    tipPercentage: 
                        e.target.value < 0 
                        ? 0 
                        : e.target.value > 100 
                        ? 100
                        : e.target.value, 
                })
            }}
            value={tipPercentage} 
            max={100} 
            min={0} 
            type={"number"} 
            placeholder="custom"
            className="custom-tip-input"/>
        </div>
        
        <div className="input-group">
            <label htmlFor="noOfPerson">Number Of People</label>
            <input onChange={(e)=>{
                updateValues({
                    noOfPerson: e.target.value,
                });
            }} type="number" id="noOfPerson"/>
        </div>
    </div>
    );

};

// returns 
export default Form;