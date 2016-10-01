var VideoDetails = (props) => (
  <div id="videoDetails">
    <span>{'View Count: ' + props.props.viewCount}</span>
  </div>
);


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoDetails = VideoDetails;


// Object {props: Object}
// props
// :
// Object
// commentCount
// :
// "61"
// dislikeCount
// :
// "35"
// favoriteCount
// :
// "0"
// likeCount
// :
// "545"
// viewCount
// :
// "100822"