import React, { Component } from 'react';
import MovieElement from './MovieElement';

export default class MovieList extends Component {

  render() {
    return (
    <div className="w-75 d-flex  fle-row flex-wrap align-content-start">
        <MovieElement />
        <MovieElement />
        <MovieElement />
        <MovieElement />
        <MovieElement />
        <MovieElement />
        <MovieElement />
    </div>
    );
  }

}