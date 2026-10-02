/* eslint-disable react/prop-types */
import { HiArrowUpRight } from "react-icons/hi2";

const Login = ({ btn = "Login", onClick }) => {
  return (
    <button onClick={onClick} className="btn-pill">
      {btn}
      <span className="ic">
        <HiArrowUpRight />
      </span>
    </button>
  );
};

export default Login;
