'use-strict';

$(document).ready(function(){
  // functions are called inside the document ready
  hideErrors();
  hideForm();
  addCommentListener();
  cancelListener();
  submitCommentListener();
});

// write your functions out here

function hideErrors() {
  $('#com-name-error').hide();
  $('#com-email-error').hide();
  $('#comment-error').hide();
}

function hideForm() {
  $('#add-comment').hide()
}

function addCommentListener() {
  $('#show-comment-form').click(function(){
    $('#add-comment').show()
  });
}

function cancelListener(){

}

function submitCommentListener() {
  $('input[type="submit"]').click(function(){
    if ($('#comment-name').val().length < 3) {
      $('#com-name-error').show();
    }
    if (!$('#com-email').val().match(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b/)) {
      $('#com-email-error').show();
    }
    if ($('#comment').val().length == 0) {
      $('#comment-error').show();
    }
    $('#posts').append("<div class='newcomment'>" + $('#comment').val() + "</div>");
  });
}
