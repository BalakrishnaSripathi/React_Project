import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';

// 1. Import styles
import 'react-big-calendar/lib/css/react-big-calendar.css';

// 2. Set up localizer
const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// 3. Define initial events
const myEvents = [
  {
    title: 'Team Standup',
    start: new Date(2026, 6, 28, 10, 0),
    end: new Date(2026, 6, 28, 11, 0),
  },
  {
    title: 'Project Demo',
    start: new Date(2026, 6, 29, 14, 0),
    end: new Date(2026, 6, 29, 15, 30),
  },
];

export default function CalendarApp() {
  return (
    // IMPORTANT: The parent container MUST have an explicit height
    <div style={{ height: '80vh', padding: '1rem' }}>
      <Calendar
        localizer={localizer}
        events={myEvents}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
      />
    </div>
  );
}