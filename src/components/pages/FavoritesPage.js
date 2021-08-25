import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { actionRemoveMovie } from '../../redux/actions/favorites'
import Header from '../Header'


function FavoritesPage() {

    const movies = useSelector(state => state.movies)
    const dispatch = useDispatch()

    function handleRemove(movie) {
        dispatch(actionRemoveMovie(movie))
    }
    return (
        <div>
            <Header />
            <br />
            <Container>
                <div className='row justify-content-space-between' style={{ display: "flex" }}>
                    {movies.map((movie, index) => {
                        return (
                            <Card className="col-3" key={index} style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={movie.Poster} />
                                <Card.Body>
                                    <Card.Title>{movie.Title}</Card.Title>
                                    <Card.Text>
                                        {movie.Year}
                                    </Card.Text>
                                    <Button onClick={() => { handleRemove(movie) }} variant="primary">Remove</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}

export default FavoritesPage
