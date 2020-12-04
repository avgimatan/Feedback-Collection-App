import React from "react";

// {input} = return the input property from props and not all of the properties from props
// {...input} = get all of the event handlers from props/input object
// its like doing: "onBlur={input.onBlur} onChange={input.onChange}..."
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div className="red-text" style={{ marginBottom: "20px" }}>
        {touched && error}
      </div>
    </div>
  );
};
