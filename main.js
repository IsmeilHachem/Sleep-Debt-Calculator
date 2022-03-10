// returns number of hours slept in a night
const getSleepHours = day => {
    switch(day){
        case "monday":
            return 9;
            break;
        case "tuesday":
            return 7;
            break;
        case "wednesday":
            return 9;
            break;
        case "thursday":
            return 7;
            break;
        case "friday":
            return 8;
            break;
        case "saturday":
            return 9;
            break;
        case "sunday":
            return 9;
            break;
        default:
            console.log("That's not a day");
            break;
    }
}

// implicitly return sum of hours slept
const getActualSleepHours = () => getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday")

// my ideal sleep hours per night multiplied by a week
const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
}

// calculate sleep debt
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
        console.log("User slept beautifully");
    }
    else if (actualSleepHours > idealSleepHours){
        let difference = actualSleepHours - idealSleepHours;
        console.log(`User knocked tf out. You slept ${difference} hours more than your ideal sleep schedule.`);
    }
    else{
        let difference = idealSleepHours - actualSleepHours;
        console.log(`You need sleep bruv. You're ${difference} hours shy of your ideal sleep schedule.`);
    }
}

//start program
calculateSleepDebt();
