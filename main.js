class DigitalClock{
    constructor(element){
        this.element = element;
    }

    start(){
        this.update();

        setInterval( () => {
            this.update();
        }, 500);
    }

    update(){
       const parts = this.getTimeParts();
       const minuteFormat = parts.minute.toString().padStart(2, "0");
       const timeFormat = `${parts.hour}:${minuteFormat}`;
       const amPm = parts.isAM ? "AM" : "PM";

       this.element.querySelector(".clock-time").textContent = timeFormat;
       this.element.querySelector(".clock-ampm").textContent = amPm;
    }

    getTimeParts(){
        const now = new Date();

        return{
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAM: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();