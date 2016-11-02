let $btn = $('#request'),
    $bio = $('#bio');

$btn.on('click', function() {
  $(this).hide();
  $bio.load('./xzibitBio.txt', responseFunction);
});

function responseFunction(responseText, textStatus, request) {
  $bio.css('border', '1px solid #e8e8e8');
  if(textStatus == 'error') {
      $bio.text(`An error occurred during your request: ${request.status} ${request.statusText}`);
  }
}
