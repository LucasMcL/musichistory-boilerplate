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
