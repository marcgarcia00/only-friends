import React from 'react';

const InputFormContainer = (props) => {
  let errorMessage = props.errorMessage || '';
  let placeholder = props.placeholder || '';
  let redBorder = "";
  if (errorMessage.length) {
    redBorder = "red-border";
  }
  return (
    <div className="input-container">
      <div className="error-container">
        <div className="input-error c-padding-bottom-xs">{errorMessage}&nbsp;</div>
      </div>
      <input
        className={`${redBorder} ${props.setClassName}`}
        type={props.type}
        name={props.name}
        placeholder={placeholder}
        name={props.name}
        id={props.setId}
        onChange={props.onChange}
      />
    </div>
  );
}
export default InputFormContainer;