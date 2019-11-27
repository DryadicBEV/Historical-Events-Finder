import React from "react";

const Event = ({ date, description }) => {
  if (date.includes("/")) {
    date = date.split("/")[0];
  }

  return (
    <div className="event card">
      <p>
        <b>Date:</b>{" "}
        {date[0] === "-" ? date.slice(1) + " B.C." : date + " A.D."}
      </p>
      <div>
        <b>Description:</b> {description}
      </div>
    </div>
  );
};

export default Event;
