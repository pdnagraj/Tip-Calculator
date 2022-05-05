import Form from "../components/Form";
import Result from "../components/Result";
import React, { useEffect, useState } from "react";

export default function Home() {

  const [state, setState] = useState({
    billAmount: 0,
    tipPercentage: 0,
    noOfPerson: 0,
  });

  const updateValues = (newState) =>{
    setState({
      ...state,
      ...newState,
    });
  };

  return (
    <div className="container">
      <h1>Tip calculator</h1>
      <div className="wrapper">
        <Form state={state} updateValues={updateValues}/>
        <Result state={state}/>
      </div>
    </div>
  );
}
