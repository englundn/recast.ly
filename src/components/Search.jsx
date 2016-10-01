var Search = (props) => (
  <div className="search-bar form-inline">
    <span>
      <input className="form-control" type="text" onKeyUp={props.props.search} />
      <button className="btn hidden-sm-down" onClick={props.props.search}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
      Autoplay: <input className="autoPlay" type="checkbox" onClick={props.props.autoPlay}/>
    </span>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
