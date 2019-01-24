export interface Irating {
  max: number;
  average: string;
  stars: number;
  min: number;
}

export interface Istart {
  alt: string;
  avatars: [];
  name: string;
  id: string;
}

export interface Imovie {
  name: string;
  rating: Irating[];
  genres: [];
  title: string;
  casts: Istart[];
  collect_count: number;
  original_title: string;
  subtype: string;
  directors: [];
  year: string;
  images: [];
  alt: string;
  id: string;
}

export interface IState {
  movieList?: Imovie[];
}
