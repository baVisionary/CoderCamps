

$('input[type=range]').change(function(e) {

  // console.log($(this)[0].name + ' ' + $(this).val());
  var elementID = '#' + $(this)[0].name[0] + 'Val';
  var value = '000'.slice(0,3-$(this).val().toString().length) + $(this).val();
  $(elementID).html(value);

  elementID = '#' + $(this)[0].name[0] + 'Div';
  value = 'rgb(';
  switch ($(this)[0].name[0]) {
    case 'r':
        value += $(this).val() + ', 0, 0)';
      break;
    case 'g':
        value += '0, ' + $(this).val() + ', 0)';
      break;
    case 'b':
        value += '0, 0, ' + $(this).val() + ')';
      break;
  }
  $(elementID).css('background-color', value);

  var r = parseInt($('#rVal').html());
  var g = parseInt($('#gVal').html());
  var b = parseInt($('#bVal').html());
  var rgbValue = 'rgb( ' + r + ', ' + g + ', ' + b + ' )'

  $('#colorPicker').css('background-color', rgbValue);
  $('#rgbVal').html(rgbValue);

  // checking whether to change the rgb text to white
  var l = Math.max (r, g, b) + Math.min(r, g, b);
  l /= 255;
  l /= 2;
  // console.log(rgbValue + 'l: ' + l);
  var rgbText = 'black';

  if (l<0.5) {
    rgbText = 'white';
  }
  $('#rgbVal').css('color', rgbText);

})

function SavedColor(name, rgbVal) {
  this.name = name;
  this.rgbVal = rgbVal;
}


$('[name="saveColor"]').on('click', function(e) {
  e.preventDefault;
    var name = $('input[name="colorName"]').val();
    var newColor = new SavedColor(name, $('#rgbVal').html());
    console.log(newColor.name + ': ' + newColor.rgbVal);
});
