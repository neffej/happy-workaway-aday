// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var workingHours=[9,10,11,12,13,14,15,16,17]
var workingHoursText=['9 AM','10 AM','11 AM','12 PM','1 PM','2 PM','3 PM','4 PM','5 PM'];
var inputForm = `  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
<button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
</button>`
var inputDiv = '  <div class="col-2 col-md-1 hour text-center py-3"></div>'
var time = dayjs().hour()
console.log(time);
console.log(workingHours[0]);



$(function () {



// Create element rows for itinerary
for (i=0; i<workingHours.length; i++){
  var itemRowEl=$('<div>')
  itemRowEl.attr('id',"hour-"+workingHours[i]);
  itemRowEl.addClass('row time-block');

  // Add logic to decide if timeblock is past/present/future
  if(time>(workingHours[i])){
    itemRowEl.addClass('past')
  }else if(time===(workingHours[i])){
  itemRowEl.addClass('present');
  }else{itemRowEl.addClass('future')};

  itemRowEl.append($(inputDiv));
  itemRowEl.children().text(workingHoursText[i]);
  itemRowEl.append(inputForm);

  $('.container-lg').append(itemRowEl);
}

  // Click event -  save text area to storage
$('.fas').on('click',function(){

    var row = $(this).parent().parent().attr('id')
    var value = $(this).parent().siblings('.description').val();

    localStorage.setItem(row,value);
    console.log(localStorage.getItem(row,value));
})

$('#hour-10').children('textarea').val=('o')



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
