// components/FieldRow.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function FieldRow({ field, onInputChange, onDelete }) {
  const { id, name, type, isRequired } = field;

  return (
    <div className="fieldRow">
      {/* <button onClick={() => onDelete(id)}>Delete</button> */}
      <FontAwesomeIcon icon={faTrashAlt} onClick={() => onDelete(id)} style={{ color: 'red', fontSize: '15px'}} />

      <div>
        <label style={{color:'white', whiteSpace: 'nowrap', marginTop: 6}}>Field Name</label>
        <input 
          type="text" 
          placeholder="Enter field name" 
          value={name}
          onChange={(e) => onInputChange(id, 'name', e)}
          style={{backgroundColor: "#3b3b3b", marginLeft: 30}}
        />
      </div>
      <div>
        <label style={{color:'white'}}>Type</label>
        <select 
          value={type}
          onChange={(e) => onInputChange(id, 'type', e)}
        >
          <option>Text</option>
          <option>Number</option>
          <option>Website</option>
          <option>Email</option>
          <option>Boolean</option>
          <option>Conditional Boolean</option>
        </select>
      </div>
      <div>
        <label style={{color:'white'}}>Required</label>
        <input 
          type="checkbox" 
          checked={isRequired}
          onChange={(e) => onInputChange(id, 'isRequired', e)}
        />
      </div>
    <style jsx>{`
    input[type="text"]{
          display: block;
          width: 4 00px;
          padding: 10px;
          margin-top: 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
          color: #FFF;
        }
        select {
          display: block;
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
          color: #FFF;
          background-color: #3b3b3b;
          -webkit-appearance: none;  /* Removes default styling for select elements in WebKit browsers */
          -moz-appearance: none;     /* Removes default styling for select elements in Mozilla browsers */
          appearance: none;         /* Standard syntax to remove default styling */
        }
      `}
    </style>
    </div>
  );
}

export default FieldRow;
