import { fetchMoviesByRating } from "./fetchMoviesByRating";

describe("fetchMoviesByRating", () => {
  it(`doit retourner une liste de films pour le genre "romance"`, async () => {
    const movies = await fetchMoviesByRating('romance');
    expect(movies).toBeInstanceOf(Array);
    expect(movies.length).toBeGreaterThan(0);
  });

  it(`doit retourner une erreur pour un genre non pris en charge`, async () => {
    await expect(fetchMoviesByRating(`inconnu`)).rejects.toThrow(`Genre "inconnu" non pris en charge.`);
  });
});