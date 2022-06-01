import { Container, Button, Input, Form, Row, Col } from "reactstrap";
import React, { useState, useEffect } from "react";

// const apiKey = 'kP5tzfXV1T3W0J83DXmmC4WF1XbZ1V0KPpg5yIeJ';

//  cat facts ' https://alexwohlbruck.github.io/cat-facts/ ' 

const Fun = () => {

    const [facts, setFacts] = useState([]);

   const fetchCat = () => {
       fetch(`https://cat-fact.herokuapp.com/facts`, {
           method: 'GET'
       }) .then (res => res.json())
        .then(json => {
            console.log(json)
            setFacts(json);
        })
   }

   const factMapper = () => {

    return facts.map((fact, idx) => {
        return (
            <Row key={idx}>
                <div>
                    <p>{fact.text}</p>
                </div>
            </Row>
        )
    })
   }

    return (
        <div className="fun">
            <div className="mainDiv">
               <Button onClick={fetchCat}>cat facts</Button>
            </div>
            <div>
                <Col >
                    {factMapper()}
                </Col>
            </div>
        </div>
    );
};

export default Fun;