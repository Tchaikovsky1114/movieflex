import React from 'react';
import { useEffect, useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
const ImageBox = styled.li`
  list-style: none;
`;
const Title = styled.li`
  text-align: center;
  display: block;

  font-size: 1.2rem;
  font-weight: 700;
  margin: 0% 20%;
  padding: 10px;
  a {
    text-decoration: none;
    color: black;
  }
`;
const Summary = styled.li`
  list-style: none;
  font-size: 0.9rem;
  margin: 0% 10%;
`;
const Image = styled.img`
  display: inline-block;
  margin-left: 30%;
  width: 40%;
  height: 40vw;
  border: 3px solid lightcyan;
  box-shadow: 1px 2px 5px;
`;

const Button = styled.a`
  display: inline-block;
  text-align: center;
  font-size: 0.5rem;
  border: 1px solid salmon;
  background-color: rgb(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 5px;
  margin-bottom: 20px;
  color: lightcoral;
  font-weight: bold;
  margin: 0px 5px;
  cursor: pointer;
`;
const LoadingWrap = styled.div`
  margin-top: 20rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Movies = (props, { id }) => {
  return (
    <div>
      {props.loading ? (
        <LoadingWrap>
          <ReactLoading type={'spin'} color={'blue'} height={100} width={100} />
        </LoadingWrap>
      ) : (
        props.movies.map((movie) => (
          <section key={movie.id + '/' + movie.title}>
            <article className="card-container">
              <ul className="card-box">
                <ImageBox>
                  <Image
                    className="card-image"
                    src={movie.medium_cover_image}
                    alt={movie.title}
                  />
                </ImageBox>
                <Title>
                  <Link to={`/movie/${movie.id}`}>
                    {movie.title} {movie.year}
                  </Link>
                  <Button target="_blank" rel="noreferrer" href={movie.url}>
                    다운로드
                  </Button>
                </Title>
              </ul>
            </article>
          </section>
        ))
      )}
    </div>
  );
};

export default Movies;
