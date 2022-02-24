import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import styled from 'styled-components';

const Details = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);
  const [detailGenres, setDetailGenres] = useState([]);
  const newGenresArray = detailGenres.join(', ');
  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`, {
          method: 'GET',
        })
      ).json();
      setDetail(json.data.movie);
      setDetailGenres(json.data.movie.genres);
    };
    getMovie();
  }, [id]);
  console.log(newGenresArray);
  return (
    <div>
      <img src={detail.medium_cover_image} alt={detail.title} />
      <h1> {detail.title_long}</h1>
      <p>
        <strong>Genre:</strong> {newGenresArray}
      </p>
      <span>
        <strong>Description :</strong> {detail.description_full}
      </span>
    </div>
  );
};

export default Details;
