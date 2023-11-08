// EventTable.js (create a new file for this component in your components directory)
import React, { useEffect, useState } from 'react';
import styles from '../styles/EventTable.module.css'; // Import the CSS module you will create
import axios from 'axios';
const EventTable = ({events}) => {
// const [events, setEvents] = useState([])

  console.log("Events inside the component",  events)

  // Check if the events prop is an array before rendering
  if (!Array.isArray(events)) {
    console.error('The events prop is not an array.', events);
    return <p>Error: The provided events data is not valid.</p>;
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Contact Phone Number</th>
            <th>Main Photo</th>
            <th>Location</th>
            <th>Schedules</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.name}</td>
              <td>{event.contact_phone_number || 'N/A'}</td>
              <td>
                {event.media && event.media.event_main_photo ? (
                  <img src={event.media.event_main_photo.url} alt={event.name} className={styles.eventImage} />
                ) : (
                  'No photo'
                )}
              </td>
              <td>
                {event.venue_location ? (
                  `${event.venue_location.city}, ${event.venue_location.country}`
                ) : (
                  'No location provided'
                )}
              </td>
              <td>
                {event.schedules && event.schedules.length > 0 ? (
                  event.schedules.map(schedule => (
                    <div key={schedule.id}>
                      {schedule.start_date} to {schedule.end_date} from {schedule.start_time} to {schedule.end_time}
                    </div>
                  ))
                ) : (
                  'No schedules'
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventTable;
