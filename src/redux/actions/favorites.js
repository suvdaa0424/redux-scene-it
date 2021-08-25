export function actionSaveMovie(movie) {
    return {
        type: 'SAVE_MOVIE',
        movie: movie
    }
}

export function actionRemoveMovie(movie) {
    return {
        type: 'REMOVE_MOVIE',
        movie: movie
    }
}