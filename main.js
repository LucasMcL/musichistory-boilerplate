// To do:


/////////////////////////////////////
////////SPA Functionality////////////
/////////////////////////////////////

// Changes which sections are shown/hidden
// Changes which navbar link is targeted w/class viewing
$('#link__list-music').click( function() {
  $('section').addClass('hidden')
  $('section.list-music').removeClass('hidden')

  $('[id^=link__]').removeClass('viewing')
  $('#link__list-music').addClass('viewing')
})

// Changes which sections are shown/hidden
// Changes which navbar link is targeted w/class viewing
$('#link__add-music').click( function() {
  $('section').addClass('hidden')
  $('section.add-music').removeClass('hidden')

  $('[id^=link__]').removeClass('viewing')
  $('#link__add-music').addClass('viewing')
})

/////////////////////////////////////
////////Load Initial Songs///////////
/////////////////////////////////////

// This jQuery function gets the JSON data and populates the page
// Does not store the data in a global variable
var listCounter = 0
$.getJSON( "data/songs.json", function(songs) {
  for (var i = 0; i < songs.data.length; i++) {
    var div = $(`<div id=${listCounter}></div>`)
    div.append(`<h2>${songs.data[i].song}</h2>`)
    div.append(`<span>${songs.data[i].artist}</span>`)
    div.append('<span>|</span>')
    div.append(`<span>${songs.data[i].album}</span>`)
    div.append('<span>|</span>')
    div.append(`<span>Genre</span>`)
    div.append('<input type="button" value="delete" name="Delete" class="delete-btn hidden">')

    $('#main-panel').append(div)

    listCounter++

    activateDeleteButton($('#main-panel div').last())
  }
  // Create more songs button and add event listener to it
  $('#main-panel').append('<input type="button" value="more-songs" name="More songs" id="more-songs-btn">')
  $('#more-songs-btn').click( addMoreSongs )
})

/////////////////////////////////////
//////////Add More Songs/////////////
/////////////////////////////////////

function addMoreSongs() {
  $.getJSON('data/more-songs.json', function(songs) {
    for (var i = 0; i < songs.data.length; i++) {
      var div = $(`<div id=${listCounter}></div>`)
      div.append(`<h2>${songs.data[i].song}</h2>`)
      div.append(`<span>${songs.data[i].artist}</span>`)
      div.append('<span>|</span>')
      div.append(`<span>${songs.data[i].album}</span>`)
      div.append('<span>|</span>')
      div.append(`<span>Genre</span>`)
      div.append('<input type="button" value="delete" name="Delete" class="delete-btn hidden">')

      div.insertAfter($('#main-panel div').last())

      listCounter++

      activateDeleteButton($('#main-panel div').last())
    }
  })
  $('#more-songs-btn').attr('disabled', 'disabled')
}

/////////////////////////////////////
////////    Add Songs    ////////////
/////////////////////////////////////

// When the add button is clicked
// Create new object containing song, artist, and album info
$('input[name=add]').click( function() {
  // Could add this object to global data variable if we had one
  var newInfo = {}
  newInfo.song = $('input[name=song]').val()
  newInfo.artist = $('input[name=artist]').val()
  newInfo.album = $('input[name=album]').val()

  // Clear input fields
  $('input[name=song]').val('')
  $('input[name=artist]').val('')
  $('input[name=album]').val('')

  // Create div with song info
  var div = $(`<div id=${listCounter}></div>`)
  div.append(`<h2>${newInfo.song}</h2>`)
  div.append(`<span>${newInfo.artist}</span>`)
  div.append('<span>|</span>')
  div.append(`<span>${newInfo.album}</span>`)
  div.append('<span>|</span>')
  div.append(`<span>Genre</span>`)
  div.append('<input type="button" value="delete" name="Delete" class="delete-btn hidden">')

  listCounter++

  // Insert div into DOM after last div
  div.insertAfter($('#main-panel div').last())

  // Add event listeners to just added div
  activateDeleteButton($('#main-panel div').last())
})

// Function to activate a single delete button
// Takes a jQuery element as argument
function activateDeleteButton(jqObj) {
  jqObj.mouseover( function() {
    jqObj.find('.delete-btn').removeClass('hidden')
  })
  jqObj.mouseleave( function() {
    jqObj.find('.delete-btn').addClass('hidden')
  })
  jqObj.find('.delete-btn').click( function(clickEvt) {
    $(clickEvt.target.parentNode).remove()
  })
}











