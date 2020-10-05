// aray for hours
var hours = ["9 am","10 am","11 am","12 pm","1 pm","2 pm","3 pm","4 pm","5 pm"]

// current time
var currentTime = setInterval( function() {
    var time = moment().format('MMMM Do YYYY, h:mm:ss a');
    document.getElementById("currentDay").innerHTML = time;
});

















//$each(hours, function(taskText, taskDate, taskList) {
    // create elements that make up a task item
   // var taskLi = $("<li>").addClass("row");
  
    //var taskSpan = $("<span>")
      //.addClass("hour")
      //.text(taskDate);
  
 //   var taskP = $("<p>")
   //   .addClass("description")
     // .text(taskText);
  //
    //// append span and p element to parent li
    //taskLi.append(taskSpan, taskP);
  
  
    // append to ul list on the page
    //$().append(taskLi);
    
   // console.log(this);

  //});
