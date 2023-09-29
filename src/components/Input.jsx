import './Input.css';

const Input = ({ text, logText, setLogText }) => {
  const handleChange = (event) => setLogText(event.target.value);

  return (
    <div className="wrapper">
      <label htmlFor="">{text}</label>
      <input type="text" value={logText} onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default Input;
