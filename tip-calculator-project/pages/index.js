import Form from "../components/Form";
import Result from "../components/Result";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [billAmount, setBillAmount] = useState(0)

  return (
    <div className="container">
      <h1>Tip calculator</h1>
      <div className="wrapper">
        <Form />
        <Result />
      </div>
    </div>
  );
}
