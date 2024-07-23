fetch('/data.json').then((request) => {
    if(!request.ok){
        console.log('failed to retrieve resource');
        return null;
    }

    return request.json()
}).then((data) => {

const dailyBtn = document.querySelector('#daily');
const weeklyBtn = document.querySelector('#weekly');
const monthlyBtn = document.querySelector('#monthly');

const currentYears = document.querySelectorAll('.current-year');
const previousYears = document.querySelectorAll('.previous-year')




dailyBtn.addEventListener('click', () => {
    for (let i = 0; i < data.length; i++){
        currentYears[i].innerText = `${data[i].timeframes.daily.current}hrs`;
         previousYears[i].innerText = `Last week - ${data[i].timeframes.daily.previous}hrs`;
    }
})

weeklyBtn.addEventListener('click', () => {
    for (let i = 0; i < data.length; i++){
        currentYears[i].innerText = `${data[i].timeframes.weekly.current}hrs`;
         previousYears[i].innerText = `Last week - ${data[i].timeframes.weekly.previous}hrs`;
    }
})

monthlyBtn.addEventListener('click', () => {
    for (let i = 0; i < data.length; i++){
        currentYears[i].innerText = `${data[i].timeframes.monthly.current}hrs`;
         previousYears[i].innerText = `Last week - ${data[i].timeframes.monthly.previous}hrs`;
    }
})
})



