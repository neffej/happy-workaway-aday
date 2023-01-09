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



// Retrieve information and populate textarea with LocalStorage values
function displayStorage(){
$('#hour-9').children('.description').text(localStorage.getItem('hour-9'))
$('#hour-10').children('.description').text(localStorage.getItem('hour-10'))
$('#hour-11').children('.description').text(localStorage.getItem('hour-11'))
$('#hour-12').children('.description').text(localStorage.getItem('hour-12'))
$('#hour-13').children('.description').text(localStorage.getItem('hour-13'))
$('#hour-14').children('.description').text(localStorage.getItem('hour-14'))
$('#hour-15').children('.description').text(localStorage.getItem('hour-15'))
$('#hour-16').children('.description').text(localStorage.getItem('hour-16'))
$('#hour-17').children('.description').text(localStorage.getItem('hour-17'))
};

displayStorage();

// Click event - clear localStorage and display empty itinerary
$('.clearBtn').on('click',function(){
  localStorage.clear();
  displayStorage();
  return;
})

// Display current date and time in header
$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY h:mm A'));
});
