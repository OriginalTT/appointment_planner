import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setName,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const handleNameChange = ({ target }) => {
    setName(target.value);
  };

  const handleContactChange = ({ target }) => {
    setContact(target.value);
  };

  const handleDateChange = ({ target }) => {
    setDate(target.value);
  };

  const handleTimeChange = ({ target }) => {
    setTime(target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label for="name">Title:</label>
        <input name="name" id="name" type="text" value={name} onChange={handleNameChange} />
        <label for="contact">Contact:</label>
        <ContactPicker name="contact" id="contact" value={contact} contacts={contacts} onChange={handleContactChange} />
        <label for="date">Date:</label>
        <input name="date" id="date" type="date" value={date} onChange={handleDateChange} min={getTodayString} />
        <label for="time">Time:</label>
        <input name="time" id="time" type="time" value={time} onChange={handleTimeChange} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
