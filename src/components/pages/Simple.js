import {Button, Container} from 'reactstrap';
import React, {useState, useEffect} from 'react';

const apiKey = 'kP5tzfXV1T3W0J83DXmmC4WF1XbZ1V0KPpg5yIeJ';

const Simple = () => {

    const [img, setImg] = useState('');
    const [camera, setCamera] = useState('');
    const [rover, setRover] = useState('');
    const [date, setDate] = useState('');

    const [img1, setImg1] = useState('');
    const [camera1, setCamera1] = useState('');
    const [rover1, setRover1] = useState('');
    const [date1, setDate1] = useState('');

    const [img2, setImg2] = useState('');
    const [camera2, setCamera2] = useState('');
    const [rover2, setRover2] = useState('');
    const [date2, setDate2] = useState('');
    let num = Math.floor(Math.random()*855);
    const randomArray = []
    for(let i = -1; i<10; i++){randomArray.push(Math.floor(Math.random()*855))}; //generates ten random numbers
    // console.log(randomArray);

    const fetchImage = () => {
        console.log('fetch image');

        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`, {
            method:'GET'
        }).then (res => res.json())
        .then (json => {
            console.log(json)
            setImg(json.photos[randomArray[0]].img_src);
            setCamera(json.photos[randomArray[0]].camera.full_name);
            setRover(json.photos[randomArray[0]].rover.name);
            setDate(json.photos[randomArray[0]].earth_date);

            setImg1(json.photos[randomArray[1]].img_src);
            setCamera1(json.photos[randomArray[1]].camera.full_name);
            setRover1(json.photos[randomArray[1]].rover.name);
            setDate1(json.photos[randomArray[1]].earth_date);

            setImg2(json.photos[randomArray[2]].img_src);
            setCamera2(json.photos[randomArray[2]].camera.full_name);
            setRover2(json.photos[randomArray[2]].rover.name);
            setDate2(json.photos[randomArray[2]].earth_date);
            console.log(randomArray[0]);
            console.log(randomArray[1])
            console.log(img);
             }
            )
        .catch((err) => console.log(err))
    }

    function refreshPage  () {
        window.location.reload(false);
    }

    useEffect(() => {
        fetchImage();
    }, [])

    return(
        <div className="simple">
            <div className="mainDiv">
                <Container className='simpleContainer'>
                <img src={img} alt='mars img' width='300px' height='300px' />
                <h1>Info</h1>
                <h3>Camera: {camera}</h3>
                <h3>Rover: {rover}</h3>
                <h3>Date: {date}</h3>
                </Container>
                <Container className='simpleContainer'>
                <img src={img1} alt='mars img' width='300px' height='300px' />
                <h1>Info</h1>
                <h3>Camera: {camera1}</h3>
                <h3>Rover: {rover1}</h3>
                <h3>Date: {date1}</h3>
                </Container>
                <Container className='simpleContainer'>
                <img src={img2} alt='mars img' width='300px' height='300px' />
                <h1>Info</h1>
                <h3>Camera: {camera2}</h3>
                <h3>Rover: {rover2}</h3>
                <h3>Date: {date2}</h3>
                </Container>
                <Button onClick={refreshPage}>Refresh</Button>
            </div>
        </div>
    );
};

export default Simple;

// kP5tzfXV1T3W0J83DXmmC4WF1XbZ1V0KPpg5yIeJ