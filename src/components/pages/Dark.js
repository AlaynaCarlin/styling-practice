import { Button, Input, Form, Col, Row, List } from "reactstrap";
import React, { useState, useEffect } from "react";

// GIPHY API ' https://developers.giphy.com/ '

// api key ' 84t03ALHsqYZ6PuIEn3T6Y1evJxmqo2l '

// ? Add a reFetch

const Dark = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchGifs, setSearchGifs] = useState([]);

    const fetchGif = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=84t03ALHsqYZ6PuIEn3T6Y1evJxmqo2l&q=${searchTerm}&limit=30&offset=2&rating=g&lang=en`, {
            method: 'GET'
        }).then(res => res.json())
            .then(json => {
                console.log(json)
                setSearchGifs(json.data);
                console.log(searchGifs);
            })
            .catch((error) => console.log(error))
    }

    const gifMapper = () => {
        console.log('gif map');

        return searchGifs.map((gif, idx) => {
            return (
                <Col key={idx}>
                    <div>
                        <List type="unstyled">
                            <img src={gif.images.fixed_height.url}/>
                        </List>
                    </div>
                </Col>
            )
        })
    }


    return (
        <div className="dark">
            <div className="mainDiv">
                <Form onSubmit={ e => { e.preventDefault(); fetchGif();}}>
                    <Row xs='1' md='3' xl='3'>
                        <Col>
                            <h4>Search for a Gif</h4>
                        </Col>
                        <Col>
                            <Input placeholder="search" onChange={(e) => setSearchTerm(e.target.value)} />
                        </Col>
                        <Col>
                            <Button type="submit">Search</Button>
                        </Col>
                    </Row>
                </Form>
                <hr/>
                {/* <img src={img1} alt='gif' width='20%' height='20%' /> */}
                <Row xs="1" md="2" xl="3" style={{ overflow: "scroll", height: "100vh" }} >
                    {gifMapper()}
                </Row>
            </div>
        </div>
    );
};

export default Dark;