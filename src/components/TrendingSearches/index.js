import React, { useEffect, useState } from "react";
import Category from "components/Category";
import getTrendingTerms from "services/getTrendingTerms";
import useNearScreen from "hooks/useNearScreen";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);
  useEffect(function () {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category options={trends} name='Tendencias'/>;
}



export default function LazyTrending() {
  const {isNearScreen, fromRef} = useNearScreen({distance: '100px'})

  return <div ref={fromRef}>
{isNearScreen ? <TrendingSearches /> : null}
  </div>
}