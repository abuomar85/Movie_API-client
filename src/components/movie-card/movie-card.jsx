/* export const MovieCard = (movie) => {
  return <div> {movie.title} </div>;
};  */

export const MovieCard = ({movie, onMovieClick}) => {
  return <div  
          onClick={() => {
            onMovieClick(movie)
          }}
  >
         {movie.title} 
       </div>;
};