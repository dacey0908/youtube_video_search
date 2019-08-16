import React from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../APIS/YouTube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.onTermSubmit("Dogs");
  }

  onTermSubmit = async term => {
    /*we passed the updated state 
      via callback function and props. 
    we now have access to the updated term once submited*/

    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
