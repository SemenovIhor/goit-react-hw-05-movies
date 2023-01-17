// import { useSearchParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import * as API from '../../services/apiMDB';
// import TrendingList from '../TrendingList/TrendingList';

// const SearchBox = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     setSearchParams({ query: evt.target[0].value });

//     return;
//   };

//   useEffect(() => {
//     const movieTitle = searchParams.get('query');
//     if (movieTitle) {
//       API.searchMovies(movieTitle).then(ret => setMovies(ret));
//     }
//   }, [searchParams]);

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Search..."
//           autoComplete="off"
//           autoFocus
//         />

//         <button type="submit">Search</button>

//         {/* <ToastContainer /> */}
//       </form>
//       <TrendingList movies={movies} />
//     </div>
//   );
// };

// export default SearchBox;
