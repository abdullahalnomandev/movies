import React from 'react';
import { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';




const Movies = () => {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=1fae8327')
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch((err) => {
                console.log("error", err);
            })
    }, [])

    console.log(movies);

    const { Title, Language, Actors, Poster, Country, BoxOffice } = movies;

    return (
        <section className="container mt-3">
            <div className="text-center">
                <Form.Control size="lg" type="text" placeholder="Search  Movi" style={{ width: '500px',margin:'auto' }} /> <br />
                <button className="btn-success">Search</button>
            </div>
            <div className="row mt-5">
                <div className="col-md-3">

                    <Card >
                        <Card.Img style={{ height: "250px" }} variant="top" src={Poster} />
                        <Card.Body>
                            <Card.Title>{Title}</Card.Title>
                            <Card.Text>
                                <h5> <span className="text-secondary">Actors:</span> {Actors} </h5>
                                <h5> <span className="text-secondary">Language :</span>  {Language}</h5>
                                <h5> <span className="text-secondary">Country :</span>  {Country}</h5>
                                <h5> <span className="text-secondary">Country :</span>  {BoxOffice}</h5>
                            </Card.Text>
                            <Button className="btn-success">Details</Button>
                        </Card.Body>

                    </Card>
                </div>
            </div>

        </section>
    );
};

export default Movies;