class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: exampleVideoData,
      nowPlaying: exampleVideoData[0]
    };

    this.clickMethod = (event) => {
      var index = Number(event.dispatchMarker.split('.')[4].replace('$', ''));
      this.setState({
        videoList: this.state.videoList,
        nowPlaying: this.state.videoList[index]
      });
    };

    this.searchClick = (event) => {
      // console.log('Clicked Search.');
      var context = this;
      var results = document.getElementsByClassName('form-control')[0].value;
      searchYouTube({key: window.YOUTUBE_API_KEY, query: results}, function(data) {
        context.setState({
          videoList: data,
          nowPlaying: context.state.nowPlaying
        });
      });
    };
  }

  render() {
    return (
      <div>
        <Nav props={this.searchClick}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.nowPlaying}/>
        </div>
        <div className="col-md-5">
          <VideoList props={{videos: this.state.videoList, clickHandler: this.clickMethod}}/>
        </div>
      </div>
    );
  }
}
/*
var App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer video={exampleVideoData[1]}/>
    </div>
    <div className="col-md-5">
      <VideoList videos={exampleVideoData}/>
    </div>
  </div>
);
*/

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
