import React, {  useEffect, useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import RecurringTable from "../Table/RecurringTable";


const Recurring =()=>{

    const options = ["2 hours", "3 hours", "4 hours","5 hours",];
    const defaultOption = options[0];
    const option = ["Daily", "Weekly", "Monthly"];
    const defaultOptions = option[0];
    const[selectedDate,setSelectedDate]=useState()
    const[hours,setHours]=useState("2hr")
    const[type,setType]=useState("daily")
    const [Times, setTimes] = useState([]);

    useEffect(()=>{
      const obj={
        sheduleType:"recurring",
        hours,
        type,
        date:selectedDate,
        time:Times
      }
      console.log("obj:::",obj);
    },[hours,type,selectedDate,Times])

    const handleTimeChange = (day, time) => {
    
  
      setTimes([day,time]);
    };

    return (
      <>

        <div className="dropdown" >
          <Dropdown 
            options={options}
            onChange={(e)=>setHours(e.value)}
            value={defaultOption}
            placeholder="Select an option">

          </Dropdown>
          
          <Dropdown 
            options={option}
            onChange={(e)=>setType(e.value)}
            value={defaultOptions}
            placeholder="Select an option">

          </Dropdown>
        </div>
        <div style={{marginTop:"10px"}} >
          <h5>Start Date</h5>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
              <DateTimePicker onChange={(e)=>setSelectedDate(e.toISOString())}/>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div style={{marginTop:"10px"}} >
          <RecurringTable handleTimeChange={handleTimeChange} Times={Times} />
        </div>
      </>
    );
  }


export default Recurring;