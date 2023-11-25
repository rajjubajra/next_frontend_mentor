'use client';
import {useState} from 'react';


export const useCountdown = () => {


  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [launchMessage, setLaunchMessage] = useState('');



    /** Ref: https://www.w3schools.com/howto/howto_js_countdown.asp */
    /** Set the date we're counting down to */
    const [year, setYear] = useState(2025);
    const countdownDate = new Date(`Nov 25, ${year} 05:40:25`).getTime();

    /** Update countdown every one second */
    const x = setInterval(function(){

      // Get today's date and time
      let now = new Date().getTime();
      // Find the distance between now and the count down date
      let distance = countdownDate - now;

      // Time calculations for days, hours, minutes and seconds
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));


      // If the count down is finished, write some text
      if(distance < 0){
        clearInterval(x);
        //setLaunchMessage("Welcome to the Web world")
        setYear(year + 1);
      }

  },1000)

  return {days, hours, minutes, seconds, launchMessage}


}