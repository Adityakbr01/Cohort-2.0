import './App.css';
import { useState } from 'react';
import MovieCard from './components/MovieCard';

const moviesData = [
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
  }
];

const getColorBasedOnRating = (rating) => {
  if (rating >= 8) return 'green';
  if (rating >= 5) return 'orange';
  return 'red';
};

function App() {
  const [movies, setMovies] = useState(moviesData);

  const removeMovie= (id) => {
    const filteredMovies = movies.filter(movie => movie.id !== id);
    setMovies(filteredMovies);
  }
  return (
    <div className="app p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-100">Movie Gallery</h1>
      <div className="movie-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {movies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie} 
            getColorBasedOnRating={getColorBasedOnRating} 
            removeMovie={removeMovie} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
