import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MyCalendar() {
  const [value, setValue] = useState(new Date());

  return (
    <div className="bg-[#f3f6f8] p-4 ">
      <Calendar
        onChange={setValue}
        value={value}
        className="!border-0 !shadow-none"
      />
    </div>
  );
}
