import axios from "axios";
import React, { useState, useEffect } from "react";
import moment from 'moment';
import { itIT } from "@mui/x-date-pickers";

const baseURL = "https://631945908e51a64d2be10770.mockapi.io/api/v1/products";

export default function GetData() {
  const [post, setPost] = useState([]);

  const fetchAllData = async () => {
    try {
      const response = await axios.get(baseURL);
      setPost(response.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  if (!post) return null;

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Schedule</th>
          <th>Hours</th>
          <th>Date</th>
          <th>Time</th>
          <th>Days</th>
          <th>Shift</th>
          <th>Weekday</th>
          <th>Occurrence</th>
        </tr>
      </thead>
      <tbody>
        {post.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{JSON.stringify(item.schedule)}</td>
            <td>{item.hours}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.days}</td>
            <td>{item.Shift}</td>
            <td>{item.weekday}</td>
            <td>{item.occurrence}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
