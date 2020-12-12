import {useSelector, useDispatch} from 'react-redux'
import {resetMovies} from 'src/slices/movie'

export const Movie = () => {
    const dispatch = useDispatch()
                     const { entities, totalEntities, error, loading } = useSelector(
        (state) => state.movie,

      )

    const onClick = (): void => {
        dispatch(resetMovies())
    }

    
    return (
        <div onClick={onClick}>
            {JSON.stringify(entities)}
        </div>
    )
}

export default Movie