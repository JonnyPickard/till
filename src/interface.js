$(document).ready(function() {

  var till = new Till();
  var menu = new Menu();
  var obj = menu.returnFoodList();
  var list = $('<ul />');

  extractResult(obj);
  $('#menuList').append(list);

  function extractResult(result){
    jQuery.each(result, function(index, value) {
        // create a LI for each iteration and append to the UL
        $('<li />', {text: index + ': \xA3' + value}).appendTo(list);
    });
  }
});
