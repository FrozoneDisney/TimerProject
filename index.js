var timer = 60; //the current time of the timer
const maxTimer = 60; //maximum amount of time you want to have on the timer
const tpt = 1; //"TimePerTick", how many seconds you want to add per "tick" to the timer when player holds down their mousebtn
const tick = 500; //how many milliseconds you want a tick to last when a player holds down their mousebutton
var interval; //declared interval for later use, this is just to make it global so that more functions can access it
var intervalDwn
var btn = document.getElementById("btnTime"); //gets the element in the HTML that has the id of "btnTime"
var txt = document.getElementById("timer"); // gets the element in the HTML that has the id of "timer"

Interval();

//add a listner to when player holds down their mousebutton and assign it to a function
btn.addEventListener("mousedown", function(evt){
    console.log(evt);
    if(evt.button == 0)
    {
        addSecs();
    }
});

//add a event listner to the specified button when player releases mouse1 and assign it to a function
btn.addEventListener("mouseup", function(evt){
    if(evt.button == 0)
    {
        stop();
    }
});

//interval to count down a second, everything in here will occur in "specified" amount of milliseconds
//in this case, 1000 because a 1000ms is one second in case you didnt know :)
function Interval(){

    intervalDwn = setInterval(() => {
    decreaseTime();
    }, 1000);

}

//function to simply count down every second.
function decreaseTime()
{
        timer--; //timer -1
        txt.innerHTML = `Time left = ${timer}` //update the html value to display the time
}

//function to stop the interval which begins when the player holds down mouse1 on the btn
//this is to prevent the interval to exist after the player releases the mouse button
function stop()
{
    clearInterval(interval);
    Interval();
}

//funcntion to add seconds to timer
function addSecs()
{
    clearInterval(intervalDwn);
    //interval to make sure too much time is added, this button will then have a delay in milliseconds when pressed
    interval = setInterval(() => {
        //check if the current time plus the "timePerTick" value will make it higher than maximum timer value.
        //If true: then make the timer to intented maxValue, so that you can't add too much time.
        if((timer + tpt) >= maxTimer)
        {
            timer = maxTimer;
            txt.innerHTML = `Time left = ${timer}` //this is for updating the HTML code of the paragraph time is displayed in
        }
        //if the timer plus the "timepertick" value is less than the max value. We can safely add the intented amount of seconds without exceeding max Value
        else
        {
            timer += tpt;
            txt.innerHTML = `Time left = ${timer}` //this is for updating the HTML code of the paragraph time is displayed in
        }
        
    }, tick); //interval between ticks when holding down mouse buttons (How fast you want to add time to the timer when holdig down Mousebtn)
}



