import './App.css';

const movies = [
  {
    id: 1,
    title: "Inception",
    image: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
    description: "A skilled thief leads a team into people's dreams to steal secrets.",
    rating: 8.8
  },
  {
    id: 2,
    title: "The Dark Knight",
    image: "https://imgs.search.brave.com/Gk8lNNEm6bmFKu-em4VBSlePYjtTrFzk9HwixINB3N0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/MS8xYy9UaGVfRGFy/a19LbmlnaHRfJTI4/MjAwOF9maWxtJTI5/LmpwZy81MTJweC1U/aGVfRGFya19Lbmln/aHRfJTI4MjAwOF9m/aWxtJTI5LmpwZw",
    description: "Batman faces the Joker, a criminal mastermind terrorizing Gotham City.",
    rating: 9.0
  },
  {
    id: 3,
    title: "Interstellar",
    image: "https://imgs.search.brave.com/5vg7VOYnTJmAmw1yhYd_BWmzynXcL6_hzvrpihPbgkc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vYi9iYy9J/bnRlcnN0ZWxsYXJf/ZmlsbV9wb3N0ZXIu/anBn",
    description: "A team of explorers travel through a wormhole in space in search of a new home for humanity.",
    rating: 1.6
  },
  {
    id: 5,
    title: "The Matrix",
    image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg",
    description: "A hacker discovers the true nature of reality and his role in the war against its controllers.",
    rating: 8.7
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
    description: "The Avengers assemble once more to reverse the damage caused by Thanos.",
    rating: 8.4
  },
  {
    id: 8,
    title: "Titanic",
    image: "https://imgs.search.brave.com/aT5pwu5flAAkBa2TxKdrMARqNNdIIifL_HJ0wqCY8m4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZiLzlh/L2I5L2ZiOWFiOTJi/NTM1YzkyOTQ0M2Y2/NTcxNTBiZDUxM2Fl/LmpwZw",
    description: "A young couple falls in love aboard the ill-fated RMS Titanic.",
    rating: 7.8
  }
];


const getColorBasedOnRating = (rating) => {
  if (rating >= 8) {
    return 'green';
  } else if (rating >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
} 



function App() {
  return (
    <div className="app p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-100">Movie Gallery</h1>
      <div className="movie-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card overflow-hidden h-[26rem] rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
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
              <button 
                onClick={() => alert(`You clicked on "${movie.title}" - ${movie.description}`)}
                className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
