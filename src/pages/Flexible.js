import React, { Component } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import FlexibleTable from "../Table/FlexibleTable";
import { Link } from "react-router-dom";


class Flexible extends Component {
  render() {
    const options = ["2 hours", "3 hours", "4 hours"];
    const defaultOption = options[0];

    return (
      <>

        <div className="dropdown">
          <Dropdown
            options={options}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option">

          </Dropdown>

        </div>

        <div style={{ marginTop: "10px" }}>
          <h5>Start Date</h5>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
              <DateTimePicker />
            </DemoContainer>
          </LocalizationProvider>
        </div>

        <div style={{ marginTop: "10px" }}>
          <FlexibleTable />
        </div>


        <Link to="/datalist">
          <button className="button">
            Next
          </button>
        </Link>

        {/* <Button onClick={handleChange}
          color="primary"
          tag="input"
          type="submit"
          value="Next"
        /> */}
      </>
    );
  }
}

export default Flexible;