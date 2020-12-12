import { useSelector, useDispatch } from 'react-redux';
import { FunctionComponent } from 'react';
import { resetMovies } from 'src/slices/movie';

export const Movie: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { entities, totalEntities, error, loading } = useSelector((state) => state.movie);

  const onClick = (): void => {
    dispatch(resetMovies());
  };

  return <div onClick={onClick}>{JSON.stringify(entities)}</div>;
};

export default Movie;
