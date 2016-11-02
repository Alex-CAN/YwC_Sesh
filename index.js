$(function() {
  let $btn = $('#request'),
      $bio = $('#bio');

  // Here we are making a "request" to the server by clicking the button
  $btn.on('click', function() {
    $(this).hide();
    /*
      the server carries out our request (first parameter),
      and a callback is provided as (second parameter) to execute
      after the bio has been loaded
    */
    $bio.load('./xzibitBio.txt', responseFunction);
  });

  //With response in hand, we act accordingly
  function responseFunction(responseText, textStatus, request) {
    $bio.css('border', '2px solid #9932CC');
    if (textStatus === 'error') {
      $bio.text(`An error occurred during your request: ${request.status} ${request.statusText}`);
    }
  }
})
