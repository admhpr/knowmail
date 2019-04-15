import React from "react";

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label htmlFor="input">{label}</label>
      <input {...input} />
      {touched && error}
    </div>
  );
};

export default SurveyField;
