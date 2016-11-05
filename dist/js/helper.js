$(function () {
  //////////////////////////////////////////////////////////////////
  // After help modal is closed, focus remains on its caller button
  // and pressing spacebar reopens modal and starts the game
  // following code is to fix that condition
  $('#helpBtn').on('focus', function (e) {
    $('#helpBtn').blur();
  });

  $('#bestBtn').on('focus', function (e) {
    $('#bestBtn').blur();
  });
  //////////////////////////////////////////////////////////////////

  $('#highScore').on('shown', function (e) {
    $('#name').focus();
  });

  $('#saveHigh').on('click', function (e) {
    var user = $('#name').val();
    var score = $('#newScore').text();
    localStorage.setItem(user, score);
  });

  $('#bestBtn').on('click', function (e) {
    var key, val;
    var arr = [];
    var list = $('#scoreList');
    list.text('');
    for (var i = 0; i < localStorage.length; i++) {
      key = localStorage.key(i);
      val = parseInt(localStorage.getItem(localStorage.key(i)));
      arr.push([key, val]);
    }

    arr.sort(function (a, b) {
      return b[1] - a[1];
    });

    for (var i = 0; i < arr.length; i++) {
      list.append('<p>' + arr[i][0] + ' - ' + arr[i][1] + '</p>');
    }

    $('#scoreModal').modal('show');

  })
})

function updateLives (lives) {
  var num = $('.glyphicon-heart').length;
  var last;

  if (lives < num) {
    last = $('.glyphicon-heart').last();
    last.removeClass('glyphicon-heart');
    last.addClass('glyphicon-heart-empty');
  } else if (lives > num) {
    last = $('.glyphicon-heart-empty').first();
    last.removeClass('glyphicon-heart-empty');
    last.addClass('glyphicon-heart');
  }
}