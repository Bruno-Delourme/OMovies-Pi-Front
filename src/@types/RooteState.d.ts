import { MovieState } from './movies/types';
import { UserState } from './user/types';

export interface RootState {
  movies: MovieState;
  user: UserState;
}