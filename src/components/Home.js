import React, { Component } from 'react';
import { connect } from "react-redux";
import ListItem from './ListItem';
import Header from './Header';
import getVideosAction from '../modules/action';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { pageNo: 1 };
  }

  componentDidMount() {
    const { getVideos } = this.props;
    const { pageNo } = this.state;
    getVideos(pageNo);
  }

  goToPage = (pageNo) => {
    const { getVideos } = this.props;
    getVideos(pageNo);
    this.setState({ pageNo: pageNo });
  }

  render() {
    const { videos } = this.props;
    const videoList = videos.map(video => {
      return (<ListItem key={video.imdbID} video={video} />);
    });

  const maxPage = Math.ceil(this.props.totalResults / 10);

    return (
      <div>
        <Header heading="ChrisMovie" />
        <div className="paging"> 
          {this.state.pageNo > 1 && <span onClick={() => this.goToPage(this.state.pageNo - 1)} className="pointer">Previous</span>}
          <span>{this.state.pageNo}</span>
          {this.state.pageNo < maxPage && <span onClick={() => this.goToPage(this.state.pageNo + 1)} className="pointer">Next</span>}
        </div>
        <div className="list-container">
          {videoList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { videos: state.videos, totalResults: state.totalResults };
};

const mapDispatchToProps = dispatch => ({
  getVideos: (pageNo) => {
    dispatch(getVideosAction(pageNo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
