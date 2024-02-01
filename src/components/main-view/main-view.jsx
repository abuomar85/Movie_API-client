import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    { id: 1,
      title: "Inception",
      Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      Genre: "Action",
      Director: "Christopher Nolan",
      image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg?20170322172828"
    },
    { id: 2,
      title: "The Shawshank Redemption",
     Description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
     Genre: "Drama",
     Director: "Frank Darabont",
     image: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
   },
    { id: 3,
      title: "Gladiator",
    Description: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    Genre: "Action",
    Director: "Ridley Scott",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png"
  }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);
  
  if(selectedMovie) {
    return <MovieView movie= {selectedMovie} onMovieClick={() => setSelectedMovie(null)}/>
  }
  
  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    
    <div>
 
      {movies.map((movie) => (
        <MovieCard 
        key={movie.id} 
        movie={movie}
        onMovieClick = {(newSelectedMovie) => {
          setSelectedMovie(newSelectedMovie);
        }}
        />
      ))}
    </div>
  );
};