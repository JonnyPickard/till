$(document).ready(function() {

  till = new Till();
  menu1 = new Menu();

  var obj = menu1.returnFoodList();
  var list = $('<ul />');

  extractResult(obj);
  $('#menuList').append(list);

  function extractResult(result){
    jQuery.each(result, function(index, value) {
        // create a LI for each iteration and append to the UL
        $('<li />', {text: index + ': \xA3' + value}).appendTo(list);
    });
  }

  $('#addItem').submit(function(event) {
    event.preventDefault();
    var food = $('#food').val();
    var price = $('#price').val();
    if(Math.floor(price) == price && $.isNumeric(price)) {
      // guard clause to only allow integers as prices
      menu1.addItem(food, price);
      // add new item as LI to list
      $('<li />', {text: food + ': \xA3' + price}).appendTo(list);
    } else {
      alert("This value must be numeric");
    }
  });

});
