function applyHtml(stream) {
  var url = "https://wind-bow.glitch.me/twitch-api/streams/" + stream + "?callback=?"
  $.ajax({
    url: url,
    dataType: 'jsonp',
    async: false,
    success: function(data) {
      if (data.stream !== null){
        //console.log(data);
        $('#' + stream).html(`
            <a href='https://www.twitch.tv/'` + stream + `>
            <img src='` + data.stream.preview.medium + `' height='60%' width='100%'>
            <h3>` + stream.toUpperCase() + `
            <h5>` + data.stream.game + `</h5>
            </a>
          `)
        }
    }
  })
}

applyHtml('cyanideplaysgames')
applyHtml('shroud')
