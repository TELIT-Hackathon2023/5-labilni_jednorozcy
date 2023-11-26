import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CreateReservation() {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const roundToHour = (date) => {
        if (!date) return null;
        const roundedDate = new Date(date);
        roundedDate.setMinutes(0);
        return roundedDate;
     };
    
    const handleStartTimeChange = (newStartTime) => {
    const roundedStartTime = roundToHour(newStartTime);
    setStartTime(roundedStartTime);

    if (roundedStartTime.getTime() > endTime.getTime()) {
        setEndTime(new Date(roundedStartTime.getTime() + 60 * 60 * 1000));
    }
    };

    const handleEndTimeChange = (newEndTime) => {
    const roundedEndTime = roundToHour(newEndTime);
    setEndTime(roundedEndTime);
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    };

    const inputStyles = {
      };
    
    return (
        <div className="flex h-screen items-center justify-center bg-magenta">
             <div className="w-300 h-200 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'white', padding: '30px' }}>
                <form onSubmit={handleSubmit}>
                    <div className="w-60 h-30 p-2 pl-4 bg-white text-gray-600 rounded-full mt-4  flex flex-col items-center justify-center">
                    <p className="font-bold">Pick a car:</p>
                    <select className="appearance-none w-60 h-30 border bg-gray-300 rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline items-center text-center justify-center">
                    <option value="" disabled defaultValue>
                    Select a car
                    </option>
                    <option value="sedan">Auto 1</option>
                    <option value="suv">Auto 2</option>
                    <option value="truck">Auto 3</option>
                    <option value="coupe">Auto 4</option>
                    </select>
                    </div>
                    <div className="w-60 h-30 p-2 pl-4 bg-white text-gray-600 rounded-full mt-4  flex flex-col items-center justify-center ">
                    <p className="font-bold">Start of reservation:</p>
                    <DatePicker className='bg-gray-300 rounded-full p-3'
                        selected={startTime}
                        onChange={(date) => setStartTime(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={30}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        scrollableTimeDropdown
                        dropdownMode="scroll"
                        isClearable
                    />
                    </div>
                    <div className="w-60 h-30 p-2 pl-4 bg-white text-gray-600 rounded-full mt-4  flex flex-col items-center justify-center " >
                    <p className="font-bold">End of reservation:</p>
                    <DatePicker className='bg-gray-300 rounded-full p-3'
                        selected={endTime}
                        onChange={(date) => setEndTime(date)}
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={30}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        scrollableTimeDropdown
                        dropdownMode="scroll"
                        isClearable
                    />
                    </div>
                    <button className="bg-magenta border border-white hover:bg-white hover:text-magenta  hover:border hover:border-magenta text-white font-bold py-2 px-4 rounded-full w-full p-1 pl-3 mt-4" type="submit" style={inputStyles}>
                    Pick Time
                    </button>
                </form>
          </div>
        </div>
    );
    
    };