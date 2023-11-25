import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ReservationForm = ({ onReservationSubmit }) => {
    const [name, setName] = useState('');
    const [startTime, setStartTime] = useState(null); // Change here
    const [endTime, setEndTime] = useState(null); // Change here

  const roundToHour = (date) => {
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
    onReservationSubmit({ name, startTime, endTime });
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const inputStyles = {
    marginBottom: '10px',
  };

  return (
    <div className="flex h-screen items-center justify-center bg-magenta">
         <div className="w-300 h-200 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'white', padding: '30px' }}>
            <form onSubmit={handleSubmit}>
                <div className="w-60 h-30 p-2 pl-4 bg-white text-gray-600 rounded-full mt-4  flex flex-col items-center justify-center">
                <p className="font-bold">Pick a car:</p>
                <select className="appearance-none w-60 h-30 border bg-gray-300 rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline items-center text-center justify-center">
                <option value="" disabled selected>
                Select a car
              </option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="truck">Truck</option>
                <option value="coupe">Coupe</option>
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

export default ReservationForm;