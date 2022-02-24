import React from 'react';
import { useEffect, useState, useParams } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Movies from '../Movies';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
      )
    ).json();

    setMovies(json.data.movies);
  };
  useEffect(() => {
    getMovies();
    setLoading(false);
  }, [setLoading]);
  console.log(movies);
  return (
    <div>
      <Movies
        id={movies.id}
        movies={movies}
        loading={loading}
        detailPageHandler={setMovies}
      />
    </div>
  );
};

export default Home;
