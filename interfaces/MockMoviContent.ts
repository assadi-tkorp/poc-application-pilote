export interface MockMovieInterface {
  id: string;
  title: string;
  url: string;
  posterUrl: string;
  vignetteUrl: string;
  isStereoscopic: boolean;
  synopsis: string;
  description: string;
}

export type MockMovieListInterface = Array<MockMovieInterface>;
