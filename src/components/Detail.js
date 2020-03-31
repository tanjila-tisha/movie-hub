import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from './Header';
import { getVideoDetail, getVideoDetailErase } from '../modules/action';


class Detail extends Component {

  componentDidMount() {
    const { getVideoDetail } = this.props;
    getVideoDetail(this.props.match.params.imdbID);
  }
  componentWillUnmount(){
    const { getVideoDetailErase } = this.props;
    getVideoDetailErase();
  }

  render() {
    const { video } = this.props;
    
    return (
      <div>
        <Header heading="ChrisMovie" />
        <div className="detail-item">
        { Object.keys(video).length === 0 ? <div className="title"> Loading.....</div> :
          (<div className="detail-item">
            <div className="detail-img"><img src={video.Poster} alt={video.Title} /></div>
            <div className="detail-description">
            <div className="title"> {video.Title}</div>
            <div><strong>Release date :</strong> {video.Released}</div>
            <div><strong>Genre :</strong> {video.Genre}</div>
            <div><strong>Director :</strong> {video.Director}</div>
            <div><strong>Actors :</strong> {video.Actors}</div>
            <div><strong>Language :</strong> {video.Language}</div>
            </div> 
          </div>)}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { video: state.videoDetail };
};

const mapDispatchToProps = dispatch => ({
  getVideoDetail: (imdbID) => {
    dispatch(getVideoDetail(imdbID));
  },
  getVideoDetailErase: () => {
    dispatch(getVideoDetailErase());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
