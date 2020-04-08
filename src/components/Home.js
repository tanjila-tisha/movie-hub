import React, { Component } from 'react';
import { connect } from "react-redux";
import ListItem from './ListItem';
import Header from './Header';
import SearchForm from './SearchForm';
import Pager from './Pager';
import { getVideosAction , getSearchItemAction } from '../modules/action';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { pageNo: 1 };
  }

  goToPage = (pageNo) => {
    const { getVideos, searchItem } = this.props;
    getVideos(searchItem, pageNo);
    this.setState({ pageNo: pageNo });
  }

  inputHandler = (event) => {
    
    const { getSearchItem } = this.props;
    getSearchItem(event.target.value);
  }

  searchHandler = () => {
    const { getVideos, searchItem } = this.props;
    getVideos(searchItem, 1);
    this.setState({ pageNo: 1 });
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
        <SearchForm 
          inputHandler={this.inputHandler} 
          searchHandler={this.searchHandler} 
          inputValue={this.props.searchItem}
        />
        <Pager 
          maxPageNo={maxPage} 
          pageNo={this.state.pageNo}
          goToPage={this.goToPage} 
          />
        <div className="list-container">
          {videoList}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { videos: state.videos, totalResults: state.totalResults, searchItem: state.searchItem };
};

const mapDispatchToProps = dispatch => ({
  getVideos: (searchItem, pageNo) => {
    dispatch(getVideosAction(searchItem, pageNo));
  },
  getSearchItem: (searchItem) =>{
    dispatch(getSearchItemAction(searchItem)); 
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
