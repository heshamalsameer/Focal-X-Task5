import React from "react";

const Login = ({ btn }) => {
  return (
    <div>
      <button className="w-[175px] lg:w-[135px] h-[38px] bg-main text-lwhite align-middle text-sm leading-[16.94px] rounded-md ">
        {btn}
      </button>
    </div>
  );
};

export default Login;
