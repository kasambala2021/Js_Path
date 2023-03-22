let day = prompt('Enter a day of the week');
let datLowerCase = day.toLowerCase();
switch(day){
    case "monday":
        alert("Today we go to tandale");
        break;
        case "tuesday":
        alert("Today we go to Tamisemi");
        break;
        case "wednsday":
        alert("Today we go to SATO");
        break;
        case "thursday":
        alert("Today we go to WASH");
        break;
        case "friday":
        alert("Today we go to TIA");
        break;
        default:
            console.error("try again")
}