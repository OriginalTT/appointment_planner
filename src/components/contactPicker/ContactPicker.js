import React from "react";

export const ContactPicker = ({
  contacts,
  onChange,
  name,
  value
}) => {

  return (
    <>
      <select onChange={onChange} value={value} name={name}>
        <option value="" selected>No Contact Selected</option>
        {contacts.map((obj) => {
          return <option value={obj.name}>{obj.name}</option>
        })}
      </select>
    </>
  );
};
