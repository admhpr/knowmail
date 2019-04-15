import React from "react";

const SurveyField = ({ input, label }) => {
  return (
    <div>
      <label htmlFor="input">{label}</label>
      <input {...input} />
    </div>
  );
};

export default SurveyField;
