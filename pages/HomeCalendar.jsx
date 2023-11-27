import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
    const events = [
        {
            title: 'Event 1',
            start: new Date('2023-11-27'),
            image: 'https://via.placeholder.com/150' // Replace with your image URL
        },
        // Add more events as needed
    ];

    const eventStyleGetter = (event, start, end, isSelected) => {
        var style = {
            backgroundColor: 'white',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'black',
            border: '0px',
            display: 'block',
            backgroundImage: `url(${event.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };
        return {
            style: style
        };
    };

    return (
        <div style={{ height: '700px' }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                eventPropGetter={eventStyleGetter}
            />
        </div>
    );
};

export default MyCalendar;
