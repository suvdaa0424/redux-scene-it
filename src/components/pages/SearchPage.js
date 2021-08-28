import React from 'react'
import { useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { actionSaveMovie } from '../../redux/actions/favorites'
import { actionSetSearch } from '../../redux/actions/search'
import Header from '../Header'

function SearchPage() {

    const dispatch = useDispatch()
    
    const [movies, setMovies] = useState([])
    // const [input, setInput] = useState('') iim bsaniig doorh code-r solison
    const search = useSelector((state) => state.search)
    const uriInput = encodeURI(search)
    
    function handleSave(movie) {
        dispatch(actionSaveMovie(movie))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?apikey=59354c85&s=${uriInput}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                // checking what kind of data we should store
                setMovies(data.Search)
            })
    }
    return (
        <div>
            <Header />
            <h1>Movies</h1>
            
            <form onSubmit={handleSubmit}>
                <label>
                    Search Movies: &nbsp;
                    <input
                        value={search}
                        onChange={(e) => dispatch(actionSetSearch(e.target.value))}
                    />
                </label>
                
                <button type="submit">Search</button>
            </form>
            <br />
            <Container>
                <div className='row justify-content-around' style={{ display: "flex" }}>
                    {movies.map((movie, index) => {
                        return (
                            <Card className="col-sm-3" key={index} style={{ margin: '10px 0', width: '18rem' }}>
                                <Card.Img variant="top" src={movie.Poster} />
                                <Card.Body>
                                    <Card.Title>{movie.Title}</Card.Title>
                                    <Card.Text>
                                        Release Year : {movie.Year}
                                    </Card.Text>
                                    <Button onClick={() => {handleSave(movie)}} variant="primary">Save</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </div>
            </Container>
            <br />
        </div>
    )
}

export default SearchPage
