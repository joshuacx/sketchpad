$(document).ready(function() {
  createGrid(16);
});

function clearGrid() {
  do {
  var newgrid = prompt("What number of sides would you like the new grid to be?");
} while(isNaN(newgrid) || newgrid > 100);

  $('#container').empty();
  createGrid(parseInt(newgrid));
}

function createGrid(size) {
  var divContainer = $('div#container');
  for (var i = 0; i < size; i++) {
    divContainer.append("<div class=row></div>");
    for (var j = 0; j < size; j++) {
      $('div.row:last-child').append("<span class='square'></span>");
    }
  }
  $(".square").height(($('#container').height()/size)-2); // -2 for border size 1px on each side of each square
  $(".square").width(($('.row').width()/size)-2);
  $(".row").height($('#container').height()/size);
}

$(document).on('mouseenter', '.square',function(){$(this).css('background-color','#969696')})
