/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitting(true);
    props.userManager.register(value).then((token) => {
      setSubmitting(false);
      if (token) {
        navigate("/cool-chat/ws");
      } else {
        alert("Not possible to get token");
      }
    });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      {submitting && <div>Registering...</div>}
      <h2>Enter your username</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Login;
