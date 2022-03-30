import { Container, Button, Input, Form } from "reactstrap";
import React, {useState, useEffect} from "react";

const apiKey = 'kP5tzfXV1T3W0J83DXmmC4WF1XbZ1V0KPpg5yIeJ';

const Fun = () => {

    const [asteroids, setAsteroids] = useState([]);
    const [date, setDate] = useState();

    const fetchStuff = () => {
        console.log('fetch stuff');

        fetch (`https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-02-01&end_date=2021-02-01&detailed=true&api_key=${apiKey}`, {
            method: 'GET'
        }).then (res => res.json())
        .then(json => {
            console.log(json)
            setAsteroids(json.near_earth_objects)
        }).catch((err) => console.log(err))
    }

    return(
        <div className="fun">
            <div className="mainDiv">
                <Form>
                    <Input 
                        bsSize="lg"
                        type="number"
                        placeholder="23"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    />
                    <Button onClick={() => fetchStuff()}>Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default Fun;