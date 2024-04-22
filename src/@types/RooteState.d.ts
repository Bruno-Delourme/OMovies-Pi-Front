import { MovieState } from './movies/types';
import { UserState } from './user/types';
import { CommentState } from './comment/types';
import { LikeState } from './like/types';

export interface RootState {
  movies: MovieState;
  user: UserState;
  comment: CommentState;
  like: LikeState;
}