import { useEffect, useState } from "react";
import Login from "./Login";

import CarouselRenderer from "./CarouselRenderer";

export default function MoviesSection({
  setAnimeInfo,
        onOpenModal
}) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://consumet-api.herokuapp.com/meta/anilist/advanced-search?format=MOVIE")
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  return (
    <section className="section section-novies">
      {movies.length > 0 && (
        <CarouselRenderer
          finalQuery={movies}
          rowTitle="Top Movies"
          stretchedA={true}
          initialActiveIndex={2}
          setAnimeInfo={setAnimeInfo}
        onOpenModal={onOpenModal}
        ></CarouselRenderer>
      )}
    </section>
  );
}
