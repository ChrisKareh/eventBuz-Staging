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

  const styles = {
    
    table: {
      width: '100%',
      height: '300px',
      borderCollapse: 'collapse',
      color: 'white', // Set the text color for all table data to white
      marginTop: '50px', 
    },
    th: {
      backgroundColor: '#B62872', // Updated to the new color
      padding: '8px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    td: {
      padding: '8px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    image: {
      width: '100px',
    },
    noImageText: {
      fontStyle: 'italic',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    listItem: {
      fontSize: '0.9em',
    },
    tableContainer: {
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s',
      borderRadius: '5px',
      overflow: 'hidden',
    },
  }
    
  
    return (
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Name</th>
              <th style={styles.th}>Contact Phone Number</th>
              <th style={styles.th}>Main Photo</th>
              <th style={styles.th}>Country</th>
              <th style={styles.th}>City</th>
              <th style={styles.th}>Schedules</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td style={styles.td}><a>{event.id}</a></td>
                <td style={styles.td}><a>{event.name}</a></td>
                <td style={styles.td}><a>{event.contact_phone_number || 'N/A'}</a></td>
                <td style={styles.td}>
                  {event.media && event.media.event_main_photo ? (
                    <img
                      src={event.media.event_main_photo.url}
                      alt={event.name}
                      style={styles.image}
                    />
                  ) : (
                    <span style={styles.noImageText}>No image</span>
                  )}
                </td>
                <td style={styles.td}>{event.venue_location ? event.venue_location.country : 'N/A'}</td>
                <td style={styles.td}>{event.venue_location ? event.venue_location.city : 'N/A'}</td>
                <td style={styles.td}>
                  {event.schedules.length > 0 ? (
                    <ul style={styles.list}>
                      {event.schedules.map((schedule) => (
                        <li key={schedule.id} style={styles.listItem}>
                          {`${schedule.start_date} ${schedule.start_time} - ${schedule.end_date} ${schedule.end_time}`}
                        </li>
                      ))}
                    </ul>
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
