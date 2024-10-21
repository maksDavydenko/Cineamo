import { fetchMovies, Movie } from "../../lib/api";
export default async function MoviesPage() {
  try {
    const movies = await fetchMovies();

    return (
      <div>
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Movies
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {movies.map((movie: Movie) => (
            <div
              key={movie.title}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={`https://image.tmdb.org/t/p/original${movie.posterPath}`}
                alt={movie.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{movie.title}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return <div>Error loading movies</div>;
  }
}
