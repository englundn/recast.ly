class App extends React.Component {
  constructor(props) {
    super(props);
    var context = this;

    this.state = {
      videoList: exampleVideoData,
      nowPlaying: exampleVideoData[0],
      lastTimeSearched: new Date().getTime(),
      videoStats: {viewCount: 0},
      autoPlay: false
    };

/*
    this.state = {
      videoList: undefined,
      nowPlaying: undefined,
      lastTimeSearched: undefined,
      videoStats: undefined
    };
  */

    searchYouTube({key: window.YOUTUBE_API_KEY, query: 'Hack Reactor'}, function(data) {
      context.setState({
        videoList: data,
        nowPlaying: data[0],
        lastTimeSearched: new Date().getTime()
      });
    });

    youtubeDetails({key: window.YOUTUBE_API_KEY, videoId: this.state.nowPlaying.id.videoId}, function(data) {
      context.setState({
        videoStats: data.items[0].statistics
      });
    });
    

    this.clickMethod = (event) => {
      var index = Number(event.dispatchMarker.split('.')[4].replace('$', ''));
      var newVideo = context.state.videoList[index];
      youtubeDetails({key: window.YOUTUBE_API_KEY, videoId: newVideo.id.videoId}, function(data) {
        context.setState({
          nowPlaying: newVideo,
          videoStats: data.items[0].statistics
        });
      });  
    };

    this.search = (event) => {
      var currentTime = new Date().getTime();
      if (currentTime - this.state.lastTimeSearched > 500) {
        var context = this;
        var results = document.getElementsByClassName('form-control')[0].value;
        searchYouTube({key: window.YOUTUBE_API_KEY, query: results}, function(data) {
          context.setState({
            videoList: data,
            nowPlaying: context.state.nowPlaying,
            lastTimeSearched: currentTime
          });
        });
      }
    };

    this.autoPlayToggle = () => {
      console.log('Toggling Autoplay');
      this.setState({
        autoPlay: !this.state.autoPlay
      });
    };
    // this.detailedSearch = (event) => {

      
    // this.searchClick = (event) => {
    //   this.search();
    // }

    // this.searchKeyUp = event => {
    //   this.searchClick(event);
    // };
    
  }

  render() {
    return (
      <div>
        <Nav props={{search: this.search, autoPlay: this.autoPlayToggle}}/>
        <div className="col-md-7">
          <VideoPlayer video={{video: this.state.nowPlaying, stats: this.state.videoStats, autoPlay: this.state.autoPlay}}/>
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
