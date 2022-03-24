import {Button} from 'reactstrap';
import React, {useState, useEffect} from 'react';

const apiKey = 'kP5tzfXV1T3W0J83DXmmC4WF1XbZ1V0KPpg5yIeJ';

const Simple = () => {

    const [img, setImg] = useState('');
    let num = Math.floor(Math.random()*855);

    const fetchImage = () => {
        console.log('fetch image');

        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`, {
            method:'GET'
        }).then (res => res.json())
        .then (json => {
            console.log(json)
            setImg(json.photos[num].img_src);
            console.log(img);
             }
            )
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchImage();
    }, [])

    return(
        <div className="simple">
            <div className="mainDiv">
                {/* <Button onClick={() => fetchImage()}>Fetch!</Button> */}
                <img src={img} alt='mars img' width='50%' height='50%'/>
            </div>
        </div>
    );
};

export default Simple;

// kP5tzfXV1T3W0J83DXmmC4WF1XbZ1V0KPpg5yIeJ