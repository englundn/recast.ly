var VideoDetails = (props) => (
  <div id="videoDetails">
    <span>{'View Count: ' + Number(props.props.viewCount).toLocaleString() + ' '}</span>
    <span>{'Likes: ' + Number(props.props.likeCount).toLocaleString() + ' '}</span>
    <span>{'Dislikes: ' + Number(props.props.dislikeCount).toLocaleString() + ' '}</span>
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