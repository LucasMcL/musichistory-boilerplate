var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

// Remove junk characters and replace > with -
for(var i = 0; i < songs.length; i++) {
  // The regular expression matches any number of instances of the
  // characters *, @, (, or ! and replaces them with empty strings
  songs[i] = songs[i].replace(/\*|@|\(|!/g, "");
  songs[i] = songs[i].replace(/>/, "-");
}

// Add songs to beginning and end
songs.unshift("Elephant in the Dock - by mewithoutYou on the album Ten Stories")
songs.push("Fourth of July - by Sufjan Stevens on the album Carrie and Lowell")

// Extract info from array
var re = /(.+)\s-\sby\s(.+)\son\sthe\salbum\s(.+)/i
var data = []
for(var i = 0; i < songs.length; i++) {
  var matches = songs[i].match(re);
  //Creates array of objects
  data.push({
    song: matches[1],
    artist: matches[2],
    album: matches[3]
    })
}

var listCounter = 0

// Initialize page with artist, album, and song data
for (var i = 0; i < data.length; i++) {
  var div = $(`<div id=${listCounter}></div>`)
  div.append(`<h2>${data[i].song}</h2>`)
  div.append(`<span>${data[i].artist}</span>`)
  div.append('<span>|</span>')
  div.append(`<span>${data[i].album}</span>`)
  div.append('<span>|</span>')
  div.append(`<span>Genre</span>`)

  $('#main-panel').append(div)

  listCounter++
}






















