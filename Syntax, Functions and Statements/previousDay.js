function previousDay(year, month, day){
    let myDate = new Date(year,month - 1,day);
    myDate.setDate(myDate.getDate() - 1);
    console.log(myDate);
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);