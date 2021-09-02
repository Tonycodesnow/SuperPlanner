// var to store loop arrays
var eventData = [
    {
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

function addTimeBlock() {
    for (var i = 0; i < eventData.length; i++) {
        var time = eventData[i].hour+eventData[i].daytime
        var timeBlock = $("<div>").addClass("row");

        var hour = $("<div>").addClass("col-md-2 hour").text(time);
        var description = $("<textarea>").addClass("description col-md-9").attr("id", eventData[i].altHour);

        var saveBtn = $("<button>").addClass("saveBtn col-md-1");
        
        var icon = $("<i>").addClass("fas fa-save");
        saveBtn.append(icon)
        timeBlock.append(hour)
        timeBlock.append(description)
        timeBlock.append(saveBtn)
        // change color here

        $(".container").append(timeBlock)
    }
}
// data for header date
var now = moment()



// load header date

var displayTime = function(Time) {
    
}
// save data for local storage
// need to know what i can save
$(".saveBtn").on("click", function(){
    var value = $(this).siblings(".description").val()
    var time = $(this).siblings(".description").attr("id")
    localStorage.setItem(time,value)
})

// set data from local storage to view

$(".9").val(localStorage.getItem("9"))
// make a loop or write out multiple times
// save button



// scheduler data



// create visuals for scheduler body


addTimeBlock()
// create save button