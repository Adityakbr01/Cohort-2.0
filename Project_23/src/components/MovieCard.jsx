function MovieCard({ movie, getColorBasedOnRating, removeMovie }) {
  return (
    <div className="movie-card overflow-hidden h-[26rem] rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <div className="top h-[55%] w-full overflow-hidden bg-gray-200">
        <img 
          className="h-full w-full transition-all object-cover object-center duration-500 ease-in-out" 
          src={movie.image} 
          alt={movie.title} 
        />
      </div>
      <div className="bottom p-4 flex flex-col justify-between h-[45%]">
        <div>
          <div className="title-rating flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold text-gray-800 truncate">{movie.title}</h2>
            <span 
              className="rating px-3 py-1 rounded-full text-white font-medium text-sm" 
              style={{ backgroundColor: getColorBasedOnRating(movie.rating) }}
            >
              {movie.rating}
            </span>
          </div>
          <div className="description">
            <p className="text-gray-600 line-clamp-3">{movie.description}</p>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button 
            onClick={() => alert(`You clicked on "${movie.title}"`)}
            className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
          >
            Read More
          </button>
          <button 
            onClick={() => removeMovie(movie.id)}
            className="flex-1 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors duration-300 font-medium"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
