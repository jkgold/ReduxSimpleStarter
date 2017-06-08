import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY ='AIzaSyCbxqg1Jbzpor23IYRJGQIuLm9x9vDIpF8';

// create new component should produce html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos: [] };

    YTSearch({key: API_KEY, term: 'audiobooks'}, (videos) => {
      this.setState({ videos });
    });
  }
  render() {
  return (
        <div>
          <SearchBar />
          <VideoList videos={this.state.videos} />
        </div>
      );
    }
  }


// take component and put it on the page (in DOM)

ReactDOM.render(<App />, document.querySelector('.container') );
