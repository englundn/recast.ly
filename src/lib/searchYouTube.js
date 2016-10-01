var searchYouTube = (options, callback) => {
  //GET https://www.googleapis.com/youtube/v3/search
  //options has query, max and key
  var dataObj = {
    part: 'snippet',
    videoEmbeddable: true,
    q: options.query,
    maxResults: options.max || 5,
    key: options.key,
    type: 'video'
  };
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: dataObj,
    success: function(data) {
      console.log(data.items);
      callback(data.items);
    }, 
    error: function(data) {
      console.log('Error');
      console.log(data);
    }
  });
};

window.searchYouTube = searchYouTube;
