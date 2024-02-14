// JobButton.jsx
import React from "react";

const JobButton = ({ onClick, jobName }) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {jobName}
    </button>
  );
};

export default JobButton;
