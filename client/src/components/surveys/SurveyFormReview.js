import React from "react";

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>review your enteries</h5>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

export default SurveyFormReview;
