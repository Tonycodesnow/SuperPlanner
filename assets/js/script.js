// var to store loop arrays
var eventData = [{
        hour: "9",
        daytime: "am",
        altHour: 9
    },
    {
        hour: "10",
        daytime: "am",
        altHour: 10
    },
    {
        hour: "11",
        daytime: "am",
        altHour: 11
    },
    {
        hour: "12",
        daytime: "pm",
        altHour: 12
    },
    {
        hour: "1",
        daytime: "pm",
        altHour: 13
    },
    {
        hour: "2",
        daytime: "pm",
        altHour: 14
    },
    {
        hour: "3",
        daytime: "pm",
        altHour: 15
    },
    {
        hour: "4",
        daytime: "pm",
        altHour: 16
    },
    {
        hour: "5",
        daytime: "pm",
        altHour: 17
    },

]
// present time 
var showTime = moment().format("dddd, MMMM Do YYYY")
// current time at the
var currentTime = moment().format("H")

$(document).ready(function () {
    
    
    $("#nowTime").text(showTime);
    // create visuals for scheduler time, description and save btn icon
    function addTimeBlock() {
        for (var i = 0; i < eventData.length; i++) {
            var time = eventData[i].hour + eventData[i].daytime
            var timeBlock = $("<div>").addClass("row");

            var hour = $("<div>").addClass("col-md-2 hour").text(time);
            var description = $("<textarea>").addClass("description col-md-9 " + eventData[i].altHour).attr("id", eventData[i].altHour);

            var saveBtn = $("<button>").addClass("saveBtn col-md-1");

            var icon = $("<i>").addClass("fas fa-save");
            saveBtn.append(icon)
            timeBlock.append(hour)
            timeBlock.append(description)
            timeBlock.append(saveBtn)
            
            $(".container").append(timeBlock)
            // change color here
            if (eventData[i].altHour < currentTime ){
                description.addClass("past")
            } else if (eventData[i].altHour === +currentTime) {
                description.addClass("present")
            } else description.addClass("future")
            console.log(eventData[i].altHour,currentTime)
            
            $(saveBtn).on("click", function () {
                // save button
                var value = $(this).siblings(".description").val()
                var time = $(this).siblings(".description").attr("id")
                console.log(time, value)
                localStorage.setItem(time, value)
            })
            
        }
        
    }
    addTimeBlock()
    // set data from local storage to view
    
    $(".9").val(localStorage.getItem("9"))
    $(".10").val(localStorage.getItem("10"))
    $(".11").val(localStorage.getItem("11"))
    $(".12").val(localStorage.getItem("12"))
    $(".13").val(localStorage.getItem("13"))
    $(".14").val(localStorage.getItem("14"))
    $(".15").val(localStorage.getItem("15"))
    $(".16").val(localStorage.getItem("16"))
    $(".17").val(localStorage.getItem("17"))
})
