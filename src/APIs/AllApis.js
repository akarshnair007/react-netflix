const API_key = "821061591b6f73de7fa19e01d0dd4b5d";

const AllApis = {
  requestedPopularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=1`,
  requestedTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
  requestedTrendingMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&language=en-US&page=2`,
  requestedUpcomingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_key}&language=en-US&page=1`,
  requestedHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&language=en-US&sort_by=popularity.desc&with_genres=27&page=1`,
  requestedActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&language=en-US&sort_by=popularity.desc&with_genres=28&page=1`,
  requestedRomanticMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&language=en-US&sort_by=popularity.desc&with_genres=10749&page=1`,
  requestedRatedMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&language=en-US&sort_by=popularity.desc&certification_country=US&certification=R&page=1`,
  requestedAnimatedMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&language=en-US&sort_by=popularity.desc&with_genres=16&page=1`,

  requestedPopularSeries: `https://api.themoviedb.org/3/tv/popular?api_key=${API_key}&language=en-US&page=1`,
  requestedTopRatedSeries: `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_key}&language=en-US&page=1`,
  requestedTrendingSeries: `https://api.themoviedb.org/3/tv/popular?api_key=${API_key}&language=en-US&page=2`,
  requestedUpcomingSeries: `https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&language=en-US&sort_by=first_air_date.desc&first_air_date.gte=2024-01-01&page=1`,
  requestedComedySeries: `https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&language=en-US&sort_by=popularity.desc&with_genres=35&page=1`,
  requestedActionSeries: `https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&language=en-US&sort_by=popularity.desc&with_genres=10759&page=1`,
  requestedRomanticSeries: `https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&language=en-US&sort_by=popularity.desc&with_genres=10749&page=1`,
  requestedRatedSeries: `https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&language=en-US&sort_by=popularity.desc&certification_country=US&certification=TV-MA&page=1`,
  requestedAnimatedSeries: `https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&language=en-US&sort_by=popularity.desc&with_genres=16&page=1`,
};

export default AllApis;
