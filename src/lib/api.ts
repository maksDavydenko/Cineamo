export type Cinema = {
  name: string;
  profileImageUrl: string;
};

export type Movie = {
  title: string;
  backdropPath: string;
  posterPath: string;
};

export async function fetchCinemas(): Promise<Cinema[]> {
  const response = await fetch("https://api.cineamo.com/cinemas");
  const data = await response.json();
  return data._embedded.cinemas;
}

export async function fetchMovies(): Promise<Movie[]> {
  const response = await fetch("https://api.cineamo.com/movies");
  const data = await response.json();
  return data._embedded.movies;
}

export async function fetchCinemasAndMovies(): Promise<{
  cinemas: Cinema[];
  movies: Movie[];
}> {
  const cinemasResponse = await fetch("https://api.cineamo.com/cinemas");

  if (!cinemasResponse.ok) {
    throw new Error(
      `Failed to fetch cinemas: ${cinemasResponse.status} ${cinemasResponse.statusText}`
    );
  }

  const cinemasData = await cinemasResponse.json();

  if (!cinemasData._embedded || !cinemasData._embedded.cinemas) {
    throw new Error("No cinemas found in the response.");
  }

  const cinemas = cinemasData._embedded.cinemas;

  const moviesResponse = await fetch("https://api.cineamo.com/movies");

  if (!moviesResponse.ok) {
    throw new Error(
      `Failed to fetch movies: ${moviesResponse.status} ${moviesResponse.statusText}`
    );
  }

  const moviesData = await moviesResponse.json();

  if (!moviesData._embedded || !moviesData._embedded.movies) {
    throw new Error("No movies found in the response.");
  }

  const movies = moviesData._embedded.movies;

  return { cinemas, movies };
}
