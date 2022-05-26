import { Button } from "reactstrap";
import React, {useState} from "react";

// GIPHY API ' https://developers.giphy.com/ '

// api key ' 84t03ALHsqYZ6PuIEn3T6Y1evJxmqo2l '

const Dark = () => {

    const [img1, setImg1] = useState('');

    const fetchGif = () => {
        fetch('https://api.giphy.com/v1/gifs/random?api_key=84t03ALHsqYZ6PuIEn3T6Y1evJxmqo2l&limit=5&rating=g', {
            method: 'GET'
        }).then(res => res.json())
            .then(json => {
                console.log(json)
                setImg1(json.data.images.fixed_height.url);
                console.log(img1);
            })
            .catch((error) => console.log(error))
    }

    return (
        <div className="dark">
            <div className="mainDiv">
                <Button onClick={ fetchGif }>Fetch</Button>
                <img src={img1} alt='gif' width='20%' height='20%' />
            </div>
        </div>
    );
};

export default Dark;