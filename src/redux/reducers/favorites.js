function favorites(state = [], action) {
    switch (action.type) {
        case 'SAVE_MOVIE':
            // Set the value to [ ...state.movies, action.movie ]. This will take all the values from the current state, "spread" (...) them into the new array ([ ]) and add the new movie that was passed through the action on the end (action.movie)
            return  [...state, action.movie]
            
        case 'REMOVE_MOVIE':
            // Set the value to [ ...state.movies, action.movie ]. This will take all the values from the current state, "spread" (...) them into the new array ([ ]) and add the new movie that was passed through the action on the end (action.movie)
            return state.filter((movie) => movie.imdbID !== action.movie.imdbID)
        default:
            return state;
    }
}

export default favorites;
// default export???