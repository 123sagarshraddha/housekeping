import React, { useState } from 'react';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FlexibleTable = () => {
  const [time, setTimes] = useState([]);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const times = ['Morning', 'Afternoon', 'Evening','Night'];

  const handleTimeChange = (day, time, value) => {
    const updatedTimes = [...time];
    const timeIndex = updatedTimes.findIndex((appt) => appt.time === time);

    if (value) {
      if (timeIndex !== -1) {
        // If the time slot is already in the Times array, update its day
        updatedTimes[timeIndex][day] = value;
      } else {
        // If the time slot is not in the Times array, add it with the day
        updatedTimes.push({ time, [day]: value });
      }
    } else {
      // If the checkbox is deselected, remove the day from the corresponding time slot
      if (timeIndex !== -1) {
        delete updatedTimes[timeIndex][day];
      }
    }

    setTimes(updatedTimes);
  };

  return (
    <form>
        <Table bordered hover>
       
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
                    value={day}
                    onChange={(e) => handleTimeChange(day, time.toLowerCase(), e.target.checked)}
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

export default FlexibleTable;