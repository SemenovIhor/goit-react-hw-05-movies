import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import { useMovieDetails } from '../services/useHooks';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { movieDetails } = useMovieDetails(movieId);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <section>
      <Link to={backLinkHref}>Go back</Link>
      <div>
        <h2>
          {movieDetails.title} (
          {movieDetails.release_date
            ? movieDetails.release_date.substring(0, 4)
            : ''}
          )
        </h2>

        <img
          src={movieDetails.poster_path && `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.original_title}
        />

        <p>
          User Score:
          {movieDetails.vote_average
            ? Math.fround(movieDetails.vote_average * 10).toFixed(0)
            : ''}
          %
        </p>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>

        <h4>Genres</h4>
        <p>
          {movieDetails.genres
            ? movieDetails.genres.map(genre => genre.name).join(' ')
            : ''}
        </p>

        <p>Additional information</p>

        <ul>
          <li>
            <Link to="cast" state={{ from: backLinkHref}}>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: backLinkHref}}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};

export default MovieDetailsPage;
