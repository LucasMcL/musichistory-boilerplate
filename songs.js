//////////////////////////////////////////////////////
/////////           OBJECTIVES             ///////////
//////////////////////////////////////////////////////

// Use regular expressions to replace bad characters
// Use regular expressions to replace > with -
// Add song to beggining and end
// Link to main content area
  // Loop through array, pull out artist, song, and album info
  // Dynamically generate html from that


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

var mainPanelEl = document.getElementById('main-panel')
// <h1>Song Name</h1><p><span>Artist</span> |
// <span>Album</span> | <span>Genre</span></p>


for (var i = 0; i < data.length; i++) {
  var h2 = document.createElement("h2")
  var h2Text = document.createTextNode(data[i].song)
  h2.appendChild(h2Text)
  mainPanelEl.appendChild(h2)
  var p = document.createElement("p")
  mainPanelEl.appendChild(p)
  p.innerHTML = "<span>" + data[i].artist + "</span> | " +
                "<span>" + data[i].album + "</span> | " +
                "<span>" + "Genre" + "</span>";
}





















