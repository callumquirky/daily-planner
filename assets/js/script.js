let currentDate = $('#currentDay');
let todayDate = moment().format("dddd, MMMM Do YYYY");
currentDate.text(todayDate);

blockTimes = [
    $('#9AM').text(moment("09:00:00", "hour").format("h A")),
    $('#10AM').text(moment("10:00:00", "hour").format("h A")),
    $('#11AM').text(moment("11:00:00", "hour").format("h A")),
    $('#12PM').text(moment("12:00:00", "hour").format("h A")),
    $('#1PM').text(moment("13:00:00", "hour").format("h A")),
    $('#2PM').text(moment("14:00:00", "hour").format("h A")),
    $('#3PM').text(moment("15:00:00", "hour").format("h A")),
    $('#4PM').text(moment("16:00:00", "hour").format("h A")),
    $('#5PM').text(moment("17:00:00", "hour").format("h A"))
     ]

blockList = [
    $('#9AM-textarea'),
    $('#10AM-textarea'),
    $('#11AM-textarea'),
    $('#12PM-textarea'),
    $('#1PM-textarea'),
    $('#2PM-textarea'),
    $('#3PM-textarea'),
    $('#4PM-textarea'),
    $('#5PM-textarea'),
]

for (let index = 0; index < blockTimes.length; index++) {
    if (moment().isBefore(blockTimes[index])) {
        blockList[index].toggleClass("future")
    }
    else if (moment().isAfter(blockTimes[index])) {
        blockList[index].toggleClass("past")
    }
    else {
        blockList[index].toggleClass("present")
    }
}

$('.saveBtn').on("click",function()
{
    // let saveText = $(this).parent().parent().children().eq(1).children().val();
   //  let appointmentTime = $(this).parent().parent().children().eq(1).children();
    let userSavedText = [{
        saveText:  $(this).parent().parent().children().eq(1).children().val()
        },
        {
        appointmentTime: $(this).parent().parent().children().eq(1).children().attr("id")
        },
    ] 

     localStorage.setItem("savedText", JSON.stringify(userSavedText))
})