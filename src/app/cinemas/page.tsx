import { Cinema, fetchCinemas } from "../../lib/api";

export default async function CinemasPage() {
  try {
    const cinemas = await fetchCinemas();

    return (
      <div>
        <h1 className="text-4xl font-bold mb-8 text-white text-center">
          Cinemas
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {cinemas.map((cinema: Cinema) => (
            <div
              key={cinema.name}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={cinema.profileImageUrl}
                alt={cinema.name}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{cinema.name}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return <div>Error loading cinemas</div>;
  }
}
