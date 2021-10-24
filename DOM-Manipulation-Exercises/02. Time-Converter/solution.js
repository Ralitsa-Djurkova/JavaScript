function attachEventsListeners() {
   const ratios = {
       days: 1,
       hours: 24,
       minutes: 1440,
       seconds: 86400
   };
   
   function convert(value, unit){
       const inDay = value / ratios[unit];

       return{
           days: inDay,
           hours: inDay * ratios.hours,
           minutes: inDay * ratios.minutes,
           seconds: inDay * ratios.seconds
       };
   }

   const daysInput = document.getElementById('days');
   const hoursInput = document.getElementById('hours');
   const minutesInput = document.getElementById('minutes');
   const secondsInput = document.getElementById('seconds');

   document.getElementById('daysBtn').addEventListener('click', onConvert);
   document.getElementById('hoursBtn').addEventListener('click', onConvert);
   document.getElementById('minutesBtn').addEventListener('click', onConvert);
   document.getElementById('secondsBtn').addEventListener('click', onConvert);
   function onConvert(e){
        const input = e.target.parentElement.querySelector('input[type="text"]');
        const time = convert(Number(input.value), input.id);
        daysInput.value = time.days;
        hoursInput.value = time.hours;
        minutesInput.value = time.minutes;
        secondsInput.value = time.seconds;
   }
}