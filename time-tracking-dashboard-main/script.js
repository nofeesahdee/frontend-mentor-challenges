const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');

const dailyWork = document.querySelector('.daily-work')
const weeklyWork = document.querySelector('.weekly-work')
const monthlyWork = document.querySelector('.monthly-work')

const dailyPlay = document.querySelector('.daily-play')
const weeklyPlay = document.querySelector('.weekly-play')
const monthlyPlay = document.querySelector('.monthly-play')

const dailyStudy = document.querySelector('.daily-study')
const weeklyStudy = document.querySelector('.weekly-study')
const monthlyStudy = document.querySelector('.monthly-study')

const dailyExercise = document.querySelector('.daily-exercise')
const weeklyExercise = document.querySelector('.weekly-exercise')
const monthlyExercise = document.querySelector('.monthly-exercise')

const dailySocial = document.querySelector('.daily-social')
const weeklySocial = document.querySelector('.weekly-social')
const monthlySocial = document.querySelector('.monthly-social')

const dailySelfcare = document.querySelector('.daily-self-care')
const weeklySelfcare = document.querySelector('.weekly-self-care')
const monthlySelfcare = document.querySelector('.monthly-self-care')


daily.addEventListener('click', loadDaily);
weekly.addEventListener('click', loadWeekly)
monthly.addEventListener('click', loadMonthly)

function loadDaily(){
    daily.style.color = "white"

    dailyWork.style.display = "block"
    dailyPlay.style.display = "block"
    dailyStudy.style.display = "block"
    dailyExercise.style.display = "block"
    dailySocial.style.display = "block"
    dailySelfcare.style.display = "block"

    weeklyWork.style.display = "none"
    weeklyPlay.style.display = "none"
    weeklyStudy.style.display = "none"
    weeklyExercise.style.display = "none"
    weeklySocial.style.display = "none"
    weeklySelfcare.style.display = "none"

    monthlyWork.style.display = "none"
    monthlyPlay.style.display = "none"
    monthlyStudy.style.display = "none"
    monthlyExercise.style.display = "none"
    monthlySocial.style.display = "none"
    monthlySelfcare.style.display = "none"
}
function loadWeekly(){
    weekly.style.color = "white"

    weeklyWork.style.display = "block"
    weeklyPlay.style.display = "block"
    weeklyStudy.style.display = "block"
    weeklyExercise.style.display = "block"
    weeklySocial.style.display = "block"
    weeklySelfcare.style.display = "block"

    dailyWork.style.display = "none"
    dailyPlay.style.display = "none"
    dailyStudy.style.display = "none"
    dailyExercise.style.display = "none"
    dailySocial.style.display = "none"
    dailySelfcare.style.display = "none"

    monthlyWork.style.display = "none"
    monthlyPlay.style.display = "none"
    monthlyStudy.style.display = "none"
    monthlyExercise.style.display = "none"
    monthlySocial.style.display = "none"
    monthlySelfcare.style.display = "none"
}
function loadMonthly(){
    monthly.style.color = "white"

    monthlyWork.style.display = "block"
    monthlyPlay.style.display = "block"
    monthlyStudy.style.display = "block"
    monthlyExercise.style.display = "block"
    monthlySocial.style.display = "block"
    monthlySelfcare.style.display = "block"

    dailyWork.style.display = "none"
    dailyPlay.style.display = "none"
    dailyStudy.style.display = "none"
    dailyExercise.style.display = "none"
    dailySocial.style.display = "none"
    dailySelfcare.style.display = "none"

    weeklyWork.style.display = "none"
    weeklyPlay.style.display = "none"
    weeklyStudy.style.display = "none"
    weeklyExercise.style.display = "none"
    weeklySocial.style.display = "none"
    weeklySelfcare.style.display = "none"
}