import React from "react";
import Main from "../Components/Main";
import Row from "../Components/Row";
import AllApis from "../APIs/AllApis";

const Movies = () => {
  return (
    <>
      <Main />
      <Row title="Popular Movies" fetchURL={AllApis.requestedPopularMovies} />
      <Row title="Trending Movies" fetchURL={AllApis.requestedTrendingMovies} />
      <Row
        title="Top Rated Movies"
        fetchURL={AllApis.requestedTopRatedMovies}
      />
      <Row title="Upcoming Movies" fetchURL={AllApis.requestedUpcomingMovies} />
      <Row title="Horror Movies" fetchURL={AllApis.requestedHorrorMovies} />

      <Row title="Action Movies" fetchURL={AllApis.requestedActionMovies} />
      <Row title="Romantic Movies" fetchURL={AllApis.requestedRomanticMovies} />
      <Row title="R-Rated Movies" fetchURL={AllApis.requestedRatedMovies} />
      <Row title="Animated Movies" fetchURL={AllApis.requestedAnimatedMovies} />
    </>
  );
};

export default Movies;
