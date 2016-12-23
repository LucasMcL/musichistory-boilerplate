// To do: add event listener to newly created song info
  // for delete button upon div creation

// Add event listeners to navbar links

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

  // Insert div into DOM
  $('#main-panel').append(div)

  // Add event listeners to just added div
  $('#main-panel div').last().mouseover( function() {
    $(this).find('.delete-btn').removeClass('hidden')
  })

  $('#main-panel div').last().mouseleave( function() {
    $(this).find('.delete-btn').addClass('hidden')
  })
})

// Delete buttons appear on hover
$('.main-panel div').mouseover( function() {
  $(this).find('.delete-btn').removeClass('hidden')
})

$('.main-panel div').mouseleave( function() {
  $(this).find('.delete-btn').addClass('hidden')
})

// Removes parent div when delete button is clicked
$('.main-panel .delete-btn').click( function(clickEvt) {
  $(clickEvt.target.parentNode).remove()
})











