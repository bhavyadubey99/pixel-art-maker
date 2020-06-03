// Select color input
// Select size input
var tableWidth;
var tableHeight;
var colorChosen;


$('#sizePicker').submit(function (event){
  event.preventDefault();
  tableHeight = $('#inputHeight').val(); // getting height for table
  tableWidth =  $('#inputWidth').val(); // getting width for table
  makeGrid(tableHeight,tableWidth); // calling the function.
})


// h for height, w for width.
function makeGrid(h, w) {
  // My code goes here!
  $('tr').remove();
  for(var i = 1; i <= h; i++){
    $('#pixelCanvas').append('<tr id=row' + i + '></tr>');
    //using a nested for loop for making cells in row.
    for(var j = 1; j <= w; j++){
      $('#row' + i).append('<td></td>'); //to add the cell and giving name
    }
  }


// adding colors to the cell now!
 $('td').click(function addColor(){
   colorChosen = $('#colorPicker').val();

   /* for clicking the cell,
   if it is already colored, the color will be removed,
   else, it will be colored according to choice of user.
   hence, by clicking once it will get colored,
   twice, uncolored,
   thrice same or different color, but colored!
   This is done, just to erase a single cell, but not all.
   */
   if($(this).attr('style')){
     $(this).removeAttr('style')
   }
   else{
     $(this).attr('style', 'background-color:' + colorChosen);
   }
 })
}
