import React, { useState } from 'react';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';


const RecurringTable = () => {
  const [Times, setTimes] = useState([]);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const times = ['Morning', 'Afternoon', 'Evening','Night'];

  const handleTimeChange = (day, time, value) => {
    const updatedTimes = [...Times];
    updatedTimes.forEach((appt) => {
      appt[day] = '';
    });
    const timeIndex = updatedTimes.findIndex((appt) => appt.time === time);
    if (timeIndex !== -1) {

      updatedTimes[timeIndex][day] = value;
    } else {
      updatedTimes.push({ time, [day]: value });
    }

    setTimes(updatedTimes);
  };

  return (
    <form>
      
     <Table bordered >
        <thead>
          <tr>
            <th>Time Slot</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td>{time}</td>
              {days.map((day) => (
                <td key={day}>
                  <input
                    type="radio"
                    name="Time-radio"
                    value={day}
                    checked={Times.find((appt) => appt[day] === day && appt.time === time)}
                    onChange={(e) => handleTimeChange(day, time.toLowerCase(), e.target.value)}
                    style={{ transform: 'scale(1.5)' }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        </Table>
     
    </form>
  );
};

export default RecurringTable;