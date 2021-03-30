function resetCalendar(){
    document.getElementById('title').innerText = '';
    document.getElementById('calendarDays').innerHTML = '';

}

function addDays(year, month){
    resetCalendar();

    let nameOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Avgust', 'September', 'October', 'November', 'December'];
    let currentMonth = nameOfMonths[month-1];
    
    let title = currentMonth + ' ' + year;
    document.getElementById('title').innerText = title;

    let first = new Date(year, month-1, 1);
    let last = new Date(year, month, 0);
    
    //odredjujemo prvi i poslednji dan
    let firstDayInWeek = first.getDay();
    if(firstDayInWeek == 0){firstDayInWeek = 7;}

    let lastDayInWeek = last.getDay();
    if(lastDayInWeek == 0){lastDayInWeek = 7;}
    
    let numOfDays = last.getDate();
   
    //upisujemo dane u niz
    let days = [];

    for(let i=1; i<firstDayInWeek; i++){
        days.push('');
    }

    for(let day=1; day<=numOfDays; day++){
        days.push(day);
    }

    for(let i=lastDayInWeek; i<7; i++){
        days.push('');
    }
   //console.log(days);

    //matrica
    let weeks = [];

    while(days.length > 0){
        let followWeek = days.splice(0, 7);
        weeks.push(followWeek);
    }

    fillCalendar(weeks);

}

function fillCalendar(weeks){

    for(let week of weeks){
        let row = document.createElement('tr');

        for(let day of week){
           let cell = document.createElement('td');
           cell.innerText = day;
           row.appendChild(cell);
        }
       
        document.getElementById('calendarDays').appendChild(row);
    }
}

window.addEventListener('load', main);

function main(){
    let now = new Date();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Avgust', 'September', 'October', 'November', 'December'];
    let currentDate = now.getDate() + '.' + ' ' + months[now.getMonth()];

    document.getElementById('date').innerText = currentDate;

    console.log(currentDate);
    addDays(now.getFullYear(), now.getMonth()+1);
}

