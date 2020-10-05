$(document).ready(function () {
  //global variable
  var blockContainer = $("#timeBlockContainer");
  // aray for hours
  var hours = [
    "9 am",
    "10 am",
    "11 am",
    "12 pm",
    "1 pm",
    "2 pm",
    "3 pm",
    "4 pm",
    "5 pm",
  ];
  var military = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
  // current time
  var currentTime = setInterval(function () {
    var time = moment().format("MMMM Do YYYY, h:mm:ss a");
    document.getElementById("currentDay").innerHTML = time;
  });
  function createTimeBlocks() {
    //dynamically create timeblocks
    for (var i = 0; i < hours.length; i++) {
      var row = $("<div>").addClass("time-block row").attr("id", military[i]);
      var hourSquare = $("<h3>").addClass("hour col-md-1").text(hours[i]);
      var description = $("<textarea>").addClass("description col-md-10");
      var button = $("<button>").addClass("saveBtn col-md-1").text("SAVE");
//append everything to the row
      hourSquare.appendTo(row);
      description.appendTo(row);
      button.appendTo(row);
//append row block container in html
      row.appendTo(blockContainer);
    }
  compareTime();
  }
  createTimeBlocks();
  //dont delete this


  //comparing the current time verse schedaul time. 
  function compareTime() {
    var currentHour = moment().hours();
    $(".time-block").each(function() {
      var blockHourId = parseInt($(this).attr("id"));
      if (blockHourId < currentHour) {
        $(this).addClass("past")
              
      }
      else if (blockHourId === currentHour) {
        $(this).removeClass("past")
        $(this).addClass("present")
      }
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

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
