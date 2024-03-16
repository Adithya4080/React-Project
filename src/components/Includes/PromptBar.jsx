import React, { useState, useEffect } from 'react'

    
const PromptBar = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 47,
        hours: 6,
        minutes: 52,
        seconds: 13
    });
  
    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
                clearTimeout(timer);
            } else {
                setTimeLeft(prevTime => {
                    let days = prevTime.days;
                    let hours = prevTime.hours;
                    let minutes = prevTime.minutes;
                    let seconds = prevTime.seconds - 1;
    
                    if (seconds < 0) {
                        seconds = 59;
                        minutes--;
                    }
    
                    if (minutes < 0) {
                        minutes = 59;
                        hours--;
                    }
    
                    if (hours < 0) {
                        hours = 23;
                        days--;
                    }
    
            return { days, hours, minutes, seconds };
        });
    }
    }, 1000);
    return () => clearTimeout(timer);      
    }, [timeLeft]);
    
    return (
        <div className='bg-purple-400 text-white py-2'>
            <div className="wrapper flex justify-evenly">
                <div>
                    <p className='font-bold'>Free delivery & 40% Discount for next 3 orders! Place your 1st order in.</p>
                </div>
                <div className='flex'>
                    <p>Until the end of the sale:</p>
                    <div className="flex  space-x-4 ml-2">
                        <span>{timeLeft.days} days</span>
                        <span>{timeLeft.hours} hours</span>
                        <span>{timeLeft.minutes} minutes</span>
                        <span>{timeLeft.seconds} sec.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromptBar