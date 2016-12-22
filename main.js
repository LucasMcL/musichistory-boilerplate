// Add event listeners to navbar links
$('#link__list-music').click( function() {
  $('section').addClass('hidden')
  $('section.list-music').removeClass('hidden')
  $('#link__list-music').addClass('visible')
})

$('#link__add-music').click( function() {
  $('section').addClass('hidden')
  $('section.add-music').removeClass('hidden')
  $('#link__add-music').addClass('visible')
})

// When the add button is clicked
// Create new object containing song, artist, and album info
// Push new object to array of objects
$('input[name=add]').click( function() {
  var newInfo = {}
  newInfo.song = $('input[name=song]').val()
  newInfo.artist = $('input[name=artist]').val()
  newInfo.album = $('input[name=album]').val()
  data.push(newInfo)

  // Clear input fields
  $('input[name=song]').val('')
  $('input[name=artist]').val('')
  $('input[name=album]').val('')

  // Create h2 and p with song info
  var h2 = $(`<h2>${newInfo.song}</h2>`)
  var p = $('<p></p>')
  p.append(`<span>${newInfo.artist}</span>`)
  p.append(`<span class="bar">|</span>`)
  p.append(`<span>${newInfo.artist}</span>`)
  p.append(`<span class="bar">|</span>`)
  p.append(`<span>Genre</span>`)

  // Insert into main panel
  $('.main-panel').append(h2)
  $('.main-panel').append(p)
})











