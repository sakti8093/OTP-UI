import { MdSecurity } from "react-icons/md";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function PopUp({ phone, hidePop }) {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (e, i) => {
    const { value, nextSibling } = e.target;

    if (isNaN(value) || !value) {
      return;
    }

    if (value > 9) {
      if (nextSibling) {
        nextSibling.focus();
      }
      return;
    }

    setOtp((prev) => {
      prev[i] = value;
      return [...prev];
    });
    if (nextSibling) {
      nextSibling.focus();
    }
  };

  const focusChange = (e, i) => {
    const { previousSibling, nextSibling } = e.target;

    if (e.keyCode === 8) {
      if (previousSibling) {
        previousSibling.focus();
      }
      setOtp((prev) => {
        prev[i] = "";
        return [...prev];
      });
    } else if (e.keyCode === 39) {
      if (nextSibling) {
        nextSibling.focus();
      }
    } else if (e.keyCode === 37) {
      if (previousSibling) {
        previousSibling.focus();
      }
    }
  };

  return (
    <div className="otp-container">
      <MdSecurity fontSize={50} className="logo" />
      <RxCross2 fontSize={30} onClick={() => hidePop()} className="cross" />
      <h3>Enter the OTP recieved on {phone.substring(0,6)}xxxx</h3>
      <div className="otp-box">
        {otp.map((elem, index) => (
          <input
            onKeyUp={(e) => focusChange(e, index)}
            onChange={(e) => handleChange(e, index)}
            key={index}
            value={elem}
            type="number"
            min={0}
            max={9}
          />
        ))}
      </div>
      <button
        disabled={otp.join("").length < 6}
        onClick={() => alert(`Your otp is ${otp.join("")}`)}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default PopUp;
