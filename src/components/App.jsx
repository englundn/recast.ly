class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videoList: exampleVideoData,
      nowPlaying: exampleVideoData[0]
    };

    this.clickMethod = (event) => {
      var index = Number(event.dispatchMarker.split('$')[1].split('.')[0]);
      this.setState({
        videoList: exampleVideoData,
        nowPlaying: exampleVideoData[index]
      });
    };
  }

  render() {
    return (
      <div>
        <Nav />
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
