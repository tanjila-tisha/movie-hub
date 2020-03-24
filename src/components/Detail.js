import React from 'react';
import { connect } from "react-redux";
import Header from './Header';

const Detail = (props) => {
  const { videos } = props;
  if (!videos.length) {
    return null;
  }
  const video = videos.find(element => element.imdbID === props.match.params.imdbID);
  return (
    <div>
      <Header heading="ChrisMovie" />
      <div className="detail-item">
        <div className="detail-img"><img src={video.Poster} alt = {video.Title} /></div>
        <div className="detail-description">
          <div><strong>Title :</strong> {video.Title}</div>
          <div><strong>Year :</strong> {video.Year}</div>
          <div><strong>Type :</strong> {video.Type}</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { videos: state.videos };
};

export default connect(mapStateToProps)(Detail);
