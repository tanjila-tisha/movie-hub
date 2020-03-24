import React from 'react';
import {
  Link
} from "react-router-dom";

const ListItem = (props) => {
  return (
    <Link className="list-child-container" to={"/detail/" + props.video.imdbID}>
      <div><img className="list-img" src={props.video.Poster} alt={props.video.Title} /></div>
      <div className="list-title">{props.video.Title}</div>
    </Link>
  );
};

export default ListItem;
