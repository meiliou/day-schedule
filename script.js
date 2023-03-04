// Use Moment to get today's date
var today = moment().format('LLL');
$("#currentDay").html(today);

$(function() {
    // // Clicking away from input does not save
    // $(".description").on("blur", function(event) {
    //     event.stopPropagation();
    //     alert("item not saved, please click save icon");
    // });

    // Save button event listener
    $(".saveBtn").on("click", function() {
        // get nearby values of hour and description
        var text = $(this).parent().attr("id");
        var time = $(this).siblings(".description").val().trim();
        
        // save text to local storage
        localStorage.setItem(time, text);
    })


    $("#hour09 .description").val(localStorage.getItem("hour09"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
})
