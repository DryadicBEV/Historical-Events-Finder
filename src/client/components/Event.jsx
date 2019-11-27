import React from 'react';

const Event = ({ date, description, lang, category1, category2 }) => {
  return (
    <div className="event">
      <p>
        <b>Date:</b> {date}
      </p>
      <p>
        <b>Description:</b> {description}
      </p>
      <p>
        <b>Language:</b> {lang}
      </p>
      <p>
        <b>Category1:</b> {category1}
      </p>
      <p>
        <b>Category2:</b> {category2}
      </p>
    </div>
  );
};

export default Event;
