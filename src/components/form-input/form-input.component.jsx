import "./form-input.style.css";

const FormInput = ({ textLabel, ...otherProps }) => {
  return (
    <div className="form-group">
      <label className="form-label">{textLabel}</label>
      <input
        className="form-input"
        type={otherProps.type}
        required
        onChange={otherProps.handlerOnChange}
      />
    </div>
  );
};

export default FormInput;
