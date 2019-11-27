import React from 'react';

const Event = ({ date, description, lang, category1, category2 }) => {
  return (
    <div className="event card">
      <p>
        <b>Date:</b> {date}
      </p>
      <p>
        <b>Description:</b> {description}
      </p>
    </div>
  );
};

export default Event;
