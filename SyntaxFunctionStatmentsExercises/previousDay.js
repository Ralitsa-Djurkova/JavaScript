function solve(year, month, day){
  
    let date = year + '-' + month + '-' + day;
    let event = new Date(date);
    event.setDate(day - 1);
    console.log(event.getFullYear()+'-' + (Number(event.getMonth()) + 1)+ '-' + event.getDate());
}
solve(2016, 10, 1)