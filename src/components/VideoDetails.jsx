var VideoDetails = (props) => (
  <div id="videoDetails">
    <span>{'View Count: ' + Number(props.props.viewCount).toLocaleString() + ' '}</span>
    <span>{'Likes: ' + Number(props.props.likeCount).toLocaleString() + ' '}</span>
    <span>{'Dislikes: ' + Number(props.props.dislikeCount).toLocaleString() + ' '}</span>
    <span id="likeDislike" width="100px" height="20px">
      <span id="likeBar" style={{'backgroundColor': 'green', 'display': 'inline-block', 'width': Number(props.props.likeCount) * 100 / (Number(props.props.likeCount) + Number(props.props.dislikeCount)) + '%', 'height': '20px'}}/>
      <span id="dislikeBar"style={{'backgroundColor': 'red', 'display': 'inline-block', 'width': Number(props.props.dislikeCount) * 100 / (Number(props.props.likeCount) + Number(props.props.dislikeCount)) + '%', 'height': '20px'}} />
    </span>
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