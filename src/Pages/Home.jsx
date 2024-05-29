import React from "react";
import Main from "../Components/Main";
import Row from "../Components/Row";
import AllApis from "../APIs/AllApis";

const Home = () => {
  return (
    <>
      <Main />
      <Row title="Trending Movies" fetchURL={AllApis.requestedTrendingMovies} />
      <Row title="Trending Series" fetchURL={AllApis.requestedTrendingSeries} />
      {/* <Row title="Upcoming Movies" fetchURL={AllApis.requestedUpcomingMovies} /> */}

      <Row
        title="Top Rated Series"
        fetchURL={AllApis.requestedTopRatedSeries}
      />
    </>
  );
};

export default Home;
