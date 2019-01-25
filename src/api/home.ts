import { api } from '@/utils/api';

// tslint:disable-next-line:only-arrow-functions
export const getMovieList = (cate: string) => {
  return api(`/api/movie/${cate}`);
};
