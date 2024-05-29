import React from "react";
import Main_series from "../Components/Main_series";
import AllApis from "../APIs/AllApis";
import Row from "../Components/Row";

const Series = () => {
  return (
    <>
      <Main_series />
      <Row title="Popular Series" fetchURL={AllApis.requestedPopularSeries} />
      <Row title="Trending Series" fetchURL={AllApis.requestedTrendingSeries} />
      <Row
        title="Top Rated Series"
        fetchURL={AllApis.requestedTopRatedSeries}
      />
      =
      <Row title="Comedy Series" fetchURL={AllApis.requestedComedySeries} />
      <Row title="Action Series" fetchURL={AllApis.requestedActionSeries} />
      <Row title="Romantic Series" fetchURL={AllApis.requestedRomanticSeries} />
      <Row title="R-Rated Series" fetchURL={AllApis.requestedRatedSeries} />
      <Row title="Animated Series" fetchURL={AllApis.requestedAnimatedSeries} />
    </>
  );
};

export default Series;
