// components/FieldRow.js

import React from 'react';

function FieldRow({ field, onInputChange, onDelete }) {
  const { id, name, type, isRequired } = field;

  return (
    <div className="fieldRow">
      <button onClick={() => onDelete(id)}>Delete</button>
      <div>
        <label>Field Name</label>
        <input 
          type="text" 
          placeholder="Enter field name" 
          value={name}
          onChange={(e) => onInputChange(id, 'name', e)}
        />
      </div>
      <div>
        <label>Type</label>
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
        <label>Is Required</label>
        <input 
          type="checkbox" 
          checked={isRequired}
          onChange={(e) => onInputChange(id, 'isRequired', e)}
        />
      </div>
    </div>
  );
}

export default FieldRow;
