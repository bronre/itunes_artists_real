// use this JSON to fill in the HTML fields!
// use the example to see what it's supposed to look like

$.getJSON('https://itunes.apple.com/search?term=abba', function(musicPlaylist) {
for (var index = 0; index < musicPlaylist["results"].length; index++) {
  $(".song a").eq(index).attr("href", musicPlaylist["results"][index].previewUrl)};	
for (var index = 0; index < musicPlaylist["results"].length; index++) {
  $(".song .artist_name").eq(index).text(musicPlaylist["results"][index].artistName)};

 for (var index = 0; index < musicPlaylist["results"].length; index++) {
  $(".song .title").eq(index).text(musicPlaylist["results"][index].trackName)};

 for (var index = 0; index < musicPlaylist["results"].length; index++) {
  $(".song img").eq(index).attr("src", musicPlaylist["results"][index].artworkUrl100)};

  for (var index = 0; index < musicPlaylist["results"].length; index++) {
  $(".song a").eq(index).attr("href", musicPlaylist["results"][index].previewUrl)};

  for (var index = 0; index < musicPlaylist["results"].length; index++) {
  $(".song .popularity").eq(index).text(musicPlaylist["results"][index].trackPrice)};
});
