const start = document.getElementById("start");
const reset = document.getElementById("reset");
const show = document.getElementById("show");

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let timing = null;

const showTime = () => {
    show.textContent =
        String(hour).padStart(2, "0") + ":" +
        String(minute).padStart(2, "0") + ":" +
        String(second).padStart(2, "0") + ":" +
        String(millisecond).padStart(2, "0");
};

start.addEventListener("click", () => {

    if (timing === null) {

        start.textContent = "Stop";

        timing = setInterval(() => {

            millisecond++;

            if (millisecond > 10) {
                millisecond = 0;
                second++;
            }

            if (second >= 60) {
                second = 0;
                minute++;
            }

            if (minute >= 60) {
                minute = 0;
                hour++;
            }

            showTime();

        }, 100);



    } else {

        clearInterval(timing);
        timing = null;

        start.textContent = "Start";

    }

});

reset.addEventListener("click", () => {

    clearInterval(timing);
    timing = null;

    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;

    showTime();

    start.textContent = "Start";

});